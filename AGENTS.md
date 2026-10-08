## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Homepage design direction

The homepage is an art-directed, full-screen portfolio hero for a CS + AI student.
Preserve its neo-brutalist scrapbook language: a warm cream checked-paper background,
hard black borders and offset shadows, slightly imperfect rotations, restrained terminal
details, and HTML/CSS pixel art. Do not replace it with a generic SaaS, glass, neon, or
terminal-first interface.

- Use the existing Astro structure and avoid adding dependencies for this page.
- Use `Space Grotesk` for display type and `DM Mono` for navigation, labels, buttons,
  supporting copy, and terminal details.
- Keep the palette limited to: ink `#171713`, paper `#f3efdf`, coral `#ff5b47`, cobalt
  `#3047d8`, acid green `#d7f04b`, pink `#ffc6d1`, and tape blue `#78cee6`.
- Keep the blue graph-paper grid (about 26px) and a very subtle paper-grain overlay.
- The headline must remain the primary visual element; the scrapbook portrait is second;
  terminal cards and decorative stickers stay small and secondary.
- Keep the CSS/HTML pixel portrait rather than using stock photography or external art.
- Use the same physical-paper language for cards: black outline, hard shadow, modest
  rotation, and no large rounded corners.
- Preserve visible focus states, semantic landmarks, accessible labels, reduced-motion
  handling, and the no-horizontal-overflow mobile behavior.
- Mobile remains a deliberate one-column composition: copy first, artwork second, with
  the centre navigation hidden and the logo and contact CTA retained.
