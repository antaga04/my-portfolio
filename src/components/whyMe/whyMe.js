import { navigateTo } from '../../router/router';
import './whyMe.css';

const WORD_MS = 26;
const BLOCK_MS = 110;
const THINKING_MS = 1500;
const THINKING_WORD_MS = 620;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const whyMe = (t) => {
  return `
    <div class="whyme-root" translate="no">
      <button class="whyme-fab" type="button" aria-haspopup="dialog" aria-controls="whyme-modal" aria-label="${t.fabAria}">
        <span class="whyme-fab__spark" aria-hidden="true">✳</span>
        <span class="whyme-fab__label">${t.fab}</span>
      </button>

      <div class="whyme-modal" id="whyme-modal" role="dialog" aria-modal="true" aria-label="${t.title}" hidden>
        <div class="whyme-modal__backdrop"></div>

        <div class="whyme-modal__panel" tabindex="-1">
          <header class="whyme-topbar">
            <div class="whyme-topbar__title">
              <span>${t.title}</span>
              <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
            </div>
            <button class="whyme-close" type="button" aria-label="${t.close}">
              <i class="fa-solid fa-xmark" aria-hidden="true"></i>
            </button>
          </header>

          <div class="whyme-thread">
            <div class="whyme-thread__inner"></div>
          </div>

          <div class="whyme-composer">
            <p class="whyme-composer__hint" role="status" aria-live="polite"></p>

            <div class="whyme-composer__box">
              <div class="whyme-composer__input">${t.placeholder}</div>
              <div class="whyme-composer__row">
                <span class="whyme-icon-btn" aria-hidden="true"><i class="fa-solid fa-plus"></i></span>
                <div class="whyme-composer__right" aria-hidden="true">
                  <span class="whyme-model">
                    ${t.model} <em>${t.modelMode}</em>
                    <i class="fa-solid fa-chevron-down"></i>
                  </span>
                  <span class="whyme-icon-btn"><i class="fa-solid fa-microphone"></i></span>
                  <span class="whyme-icon-btn"><i class="fa-solid fa-wave-square"></i></span>
                </div>
              </div>
            </div>

            <p class="whyme-disclaimer">${t.disclaimer}</p>
          </div>
        </div>
      </div>
    </div>
  `;
};

/* Splits "plain **bold** plain" into renderable segments. */
const tokenize = (text) =>
  text
    .split(/(\*\*[^*]+\*\*)/g)
    .filter(Boolean)
    .map((part) => {
      const bold = part.startsWith('**') && part.endsWith('**');
      return { bold, text: bold ? part.slice(2, -2) : part };
    });

const initWhyMe = (t) => {
  const root = document.querySelector('.whyme-root');
  if (!root) return;

  const body = document.querySelector('body');
  const fab = root.querySelector('.whyme-fab');
  const modal = root.querySelector('.whyme-modal');
  const backdrop = root.querySelector('.whyme-modal__backdrop');
  const panel = root.querySelector('.whyme-modal__panel');
  const closeBtn = root.querySelector('.whyme-close');
  const thread = root.querySelector('.whyme-thread');
  const threadInner = root.querySelector('.whyme-thread__inner');
  const composerBox = root.querySelector('.whyme-composer__box');
  const hint = root.querySelector('.whyme-composer__hint');

  let runToken = 0;
  let hintTimer = null;

  const isOpen = () => !modal.hasAttribute('hidden');

  const scrollToBottom = () => {
    const distanceToBottom = thread.scrollHeight - thread.scrollTop - thread.clientHeight;
    if (distanceToBottom < 160) thread.scrollTop = thread.scrollHeight;
  };

  const typeInto = async (host, text, alive) => {
    const segments = tokenize(text);

    if (prefersReducedMotion()) {
      segments.forEach((segment) => {
        const node = document.createElement(segment.bold ? 'strong' : 'span');
        node.textContent = segment.text;
        host.appendChild(node);
      });
      return;
    }

    for (const segment of segments) {
      const node = document.createElement(segment.bold ? 'strong' : 'span');
      host.appendChild(node);

      for (const word of segment.text.split(/(\s+)/)) {
        if (!alive()) return;
        node.textContent += word;
        if (word.trim()) {
          scrollToBottom();
          await sleep(WORD_MS);
        }
      }
    }
  };

  const streamAnswer = async (prose, alive) => {
    let list = null;

    for (const block of t.answer) {
      if (!alive()) return;

      let host;
      if (block.type === 'li') {
        if (!list) {
          list = document.createElement('ul');
          list.className = 'whyme-prose__list';
          prose.appendChild(list);
        }
        host = document.createElement('li');
        list.appendChild(host);
      } else {
        list = null;
        host = document.createElement('p');
        if (block.type === 'cta') host.className = 'whyme-cta';
        prose.appendChild(host);
      }

      await typeInto(host, block.text, alive);
      if (!alive()) return;

      /* the closing line hands the visitor off to the about page */
      if (block.type === 'cta') {
        const link = document.createElement('a');
        link.href = block.path;
        link.addEventListener('click', (ev) => {
          ev.preventDefault();
          closeModal();
          navigateTo(block.path);
        });
        host.appendChild(link);
        await typeInto(link, block.link, alive);
        if (!alive()) return;
      }

      await sleep(BLOCK_MS);
    }
  };

  const renderActions = () => {
    const actions = document.createElement('div');
    actions.className = 'whyme-actions';
    actions.innerHTML = `
      <button class="whyme-actions__copy" type="button" aria-label="${t.copy}">
        <i class="fa-regular fa-copy" aria-hidden="true"></i>
      </button>
      <span aria-hidden="true"><i class="fa-solid fa-volume-low"></i></span>
      <span aria-hidden="true"><i class="fa-regular fa-thumbs-up"></i></span>
      <span aria-hidden="true"><i class="fa-regular fa-thumbs-down"></i></span>
      <span aria-hidden="true"><i class="fa-solid fa-rotate-right"></i></span>
    `;

    const copyBtn = actions.querySelector('.whyme-actions__copy');
    copyBtn.addEventListener('click', async () => {
      const plain = t.answer
        .map((block) => `${block.text}${block.link || ''}`.replaceAll('**', ''))
        .join('\n\n');
      try {
        await navigator.clipboard.writeText(plain);
        copyBtn.classList.add('is-copied');
        copyBtn.setAttribute('aria-label', t.copied);
        setTimeout(() => {
          copyBtn.classList.remove('is-copied');
          copyBtn.setAttribute('aria-label', t.copy);
        }, 1600);
      } catch {
        /* clipboard unavailable, nothing worth interrupting the user for */
      }
    });

    return actions;
  };

  const runConversation = async () => {
    runToken += 1;
    const myRun = runToken;
    const alive = () => myRun === runToken && isOpen();

    threadInner.innerHTML = '';

    const question = document.createElement('div');
    question.className = 'whyme-msg whyme-msg--user';
    question.innerHTML = `<div class="whyme-bubble">${t.question}</div>`;
    threadInner.appendChild(question);
    scrollToBottom();

    await sleep(prefersReducedMotion() ? 0 : 480);
    if (!alive()) return;

    const thinking = document.createElement('div');
    thinking.className = 'whyme-thinking';
    thinking.innerHTML = `<span class="whyme-thinking__text">${t.thinking[0]}</span>`;
    threadInner.appendChild(thinking);
    scrollToBottom();

    const thinkingText = thinking.querySelector('.whyme-thinking__text');
    let wordIndex = 0;
    const cycle = setInterval(() => {
      if (!alive()) return clearInterval(cycle);
      wordIndex = (wordIndex + 1) % t.thinking.length;
      thinkingText.textContent = t.thinking[wordIndex];
    }, THINKING_WORD_MS);

    await sleep(THINKING_MS);
    clearInterval(cycle);
    if (!alive()) return;

    thinking.remove();

    const answer = document.createElement('div');
    answer.className = 'whyme-msg whyme-msg--assistant';
    answer.innerHTML = `
      <span class="whyme-avatar" aria-hidden="true">✳</span>
      <div class="whyme-prose is-streaming"></div>
    `;
    threadInner.appendChild(answer);

    const prose = answer.querySelector('.whyme-prose');
    await streamAnswer(prose, alive);
    if (!alive()) return;

    prose.classList.remove('is-streaming');
    answer.appendChild(renderActions());
    scrollToBottom();
  };

  const showHint = () => {
    hint.textContent = t.hint;
    hint.classList.add('is-visible');
    composerBox.classList.remove('is-nudged');
    /* restart the shake even on rapid repeat attempts */
    void composerBox.offsetWidth;
    composerBox.classList.add('is-nudged');

    clearTimeout(hintTimer);
    hintTimer = setTimeout(() => {
      hint.classList.remove('is-visible');
      composerBox.classList.remove('is-nudged');
    }, 3200);
  };

  const openModal = () => {
    modal.removeAttribute('hidden');
    body.classList.add('no-overflow');
    thread.scrollTop = 0;
    panel.focus();
    runConversation();
  };

  const closeModal = () => {
    runToken += 1;
    modal.setAttribute('hidden', '');
    body.classList.remove('no-overflow');
    hint.classList.remove('is-visible');
    clearTimeout(hintTimer);
    fab.focus();
  };

  fab.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);
  composerBox.addEventListener('click', showHint);

  modal.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape') {
      closeModal();
      return;
    }
    /* any attempt at actually typing gets the same friendly wall */
    const onButton = ev.target.closest('button');
    if (ev.key.length === 1 && !ev.ctrlKey && !ev.metaKey && !onButton) showHint();
  });
};

export { whyMe, initWhyMe };
