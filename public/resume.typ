#set page(paper: "a4", margin: (x: 46pt, y: 46pt), fill: white)
#set text(font: "Helvetica", size: 8.8pt, fill: rgb("#535252"))
#set par(leading: 0.75em, spacing: 0.6em)

#let c-title = rgb("#313030")
#let c-muted = rgb("#A3A3A3")
#let c-body = rgb("#535252")
#let c-dates = rgb("#BABABA")
#let c-link = rgb("#0f0e0e")
#let label-col = 112pt

// inline website link in accent
#let weblink(url, label) = link(url)[#text(fill: c-link, weight: "medium")[#label]]

// tight bullet list
#let bullets(..items) = {
  for it in items.pos() {
    grid(columns: (7pt, 1fr), column-gutter: 2pt,
      text(fill: c-muted)[•], text(fill: c-body)[#it])
    v(3pt)
  }
}

// ---- Section label + content row ----
#let section(label, body) = {
  grid(
    columns: (label-col, 1fr),
    column-gutter: 16pt,
    row-gutter: 0pt,
    align(top+left)[#text(fill: c-muted, size: 8.8pt)[#label]],
    body,
  )
  v(22pt)
}

// ---- An experience/education entry ----
#let entry(title, org-sep: " · ", role, dates, body: none, gap: 6pt) = {
  block(spacing: 0pt)[
    #grid(
      columns: (1fr, auto),
      align(bottom+left)[
        #text(weight: "bold", size: 10.5pt, fill: c-title)[#title]#text(size: 10.5pt, fill: c-title)[#org-sep]#text(size: 10.5pt, fill: c-title)[#role]
      ],
      align(bottom+right)[#text(fill: c-dates, size: 8pt)[#dates]],
    )
    #if body != none [
      #v(gap)
      #body
    ]
  ]
}

// ---- Links (full width, top of page) ----
#block(width: 100%)[
  #text(size: 8.6pt)[
    #link("https://adriananta.dev")[adriananta.dev] #h(8pt)
    #link("mailto:hello@adriananta.dev")[hello\@adriananta.dev] #h(8pt)
    #link("tel:+34604050533")[(34)604 05 05 33] #h(8pt)
    #link("https://linkedin.com/in/adrian-anta-gil")[/in/adrian-anta-gil] #h(8pt)
    #link("https://github.com/antaga04")[github.com/antaga04]
  ]
]
#v(16pt)

// ---- Header ----
#grid(
  columns: (label-col, 1fr),
  column-gutter: 16pt,
  align(top+left)[#text(weight: "bold", size: 18pt, fill: c-title)[Adrián Anta]],
  align(bottom+left)[
    #text(fill: c-muted, size: 12pt)[Software Engineer based in Galicia, Spain.]
  ],
)
#v(22pt)

// ---- Experience ----
#section("Experience")[
  #entry("DLTCode (current)", "Software Engineer", "October 2025 – Present", gap: 4pt, body: [
    #bullets(
      [Rebuilt an education platform from scratch; participated on the design of a multi-tenant configurable theming system (colors, border radius, typography, spacing and others).],
      [Delivered a second multi-tenant platform (CTF-style product) under tight deadlines, including same-day fixes ahead of live client demos.],
      [Currently building two internal component libraries (core logic + themed styles) published to a private npm registry, using Tailwind and Storybook.],
      [Strong Git/GitHub practices: branching, PRs, code review. Often the team's reference on Git.],
    )
  ])

  #v(12pt)
  #entry("Client-Facing Store", "Sales & Operations", "November 2025 – May 2026", body: [
    #bullets([Sales, service, and daily operations; alongside my full-time engineering job. Adding up to 13 h weekdays for three months, then 10 h for three more, without slipping on either.])
  ])

  #v(12pt)
  #entry("Bahia Software (internship)", "Software Engineering Intern", "March 2025 – June 2025", body: [
    #bullets([Worked within a legacy Java / Spring Boot codebase where I prototyped LLM integration into an existing production application in the medical field.])
  ])

]

// ---- Projects ----
#section("Projects")[
  #entry("Desktop Automation App", "Electron (macOS / Windows)", "April 2026 – Present", body: [
    #bullets(
      [Built and shipped a Windows / macOS app automating contract generation from templates and spreadsheet data for a real lawyer; scope grew to Google Drive sync, DeepL translation, PDF redaction, PDF-to-Excel extraction, and DOCX templating editor.],
      [Set up CI/CD with GitHub Actions to auto-build and release installers (Windows auto-update).],
      [Built with heavy, supervised use of AI (Claude) for a fast iteration workflow.],
    )
  ])

  #v(12pt)
  #entry("Full-Stack Web App", "Business Admin Tool", "July 2024 – Present", body: [
    #bullets([Admin dashboard for a lottery business: bulk QR generation for slides, sitemap generator, page editor, and training page. Improving business efficiency.])
  ])

]

// ---- Education (incl. Bootcamp) ----
#section("Education")[
  #entry("Universidad de Vigo", "B.Sc. in Software Engineering", "September 2021 – June 2025", body: [
    #bullets([Thesis: games platform focused on UX/UI polish and complete account features. Independently planned the project and documented it in LaTeX. #weblink("https://www.imprffctgames.com")[imprffctgames.com]])
  ])
  #v(12pt)
  #entry("The Power Business School", "Web Development Bootcamp", "2023 - 2024", body: [
    #bullets(
      [Consistently exceeded expectations in functionality, UX, and attention to detail across every project; like my weather app design #weblink("https://weatherdelta.vercel.app/")[weatherdelta.vercel.app].],
      [Developed a strong foundation by building in plain JavaScript rather than starting with a framework; e.g. a custom SPA router.]
    )
  ])
  #v(12pt)
  #entry("Exchange semester", "Poland", "February 2024 – June 2024")
  #v(12pt)
  #entry("Bachillerato de Excelencia", "STEAM track - passive house project", "")
]

// ---- Languages ----
#section("Languages")[
  English - C1 (Cambridge) #h(10pt) Spanish - Native #h(10pt) Galician - C1
]

// ---- Principles ----
#section("Principles")[
  Attention to Detail #h(10pt) Ownership #h(10pt) User-Centered Design #h(10pt) Pragmatism
]

// ---- Toolbox ----
#section("Toolbox")[
  Next.js, React, TypeScript, Tailwind, Saas, Storybook, Docker / Docker Compose, Git & GitHub Actions, Java, Spring Boot, C++, C, Python, Electron, pnpm
]
