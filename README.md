# WebProMax MAX Notify Landing

Static informational landing page for the `Оповещение в MAX` Bitrix module.

Current public preview:

```text
https://webpromax.ru/maxnotify/
```

GitHub Pages preview from `main`:

```text
https://top4an.github.io/webpromax-maxnotify-landing/
```

## Files

- `index.html` - page markup and content.
- `styles.css` - visual styling and responsive layout.
- `script.js` - screenshot modal, FAQ behavior, and contact form message.
- `favicon.svg` - page icon.
- `assets/` - MAX instruction screenshots.

## Local Preview

From this folder:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:4173/
```

## Collaboration Flow

Use this repository as the source of truth for landing changes.

Recommended flow:

1. Pull the latest `main`.
2. Make changes in `index.html`, `styles.css`, `script.js`, or `assets/`.
3. Verify desktop and mobile layouts.
4. Commit changes to a branch or open a pull request.
5. Deploy only after the reviewed version is accepted.

## Content Rules

- Do not add a public form field for a MAX bot token.
- Do not commit real tokens, passwords, chat IDs, cookies, API keys, or server access details.
- Do not add pricing unless it is explicitly approved for this landing.
- Keep the phone number as `+7 988 388 5444` unless the business contact changes.
- The landing is an instruction and lead-capture page: it should explain what the client must prepare for connection.
