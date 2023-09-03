import './card.css';

export const cardTemplate = (prop) => {
  return `
    <article id="${prop.name}" class="clipping">
      <h2 class="">${prop.name}</h2>
    </article>
  `;
};
