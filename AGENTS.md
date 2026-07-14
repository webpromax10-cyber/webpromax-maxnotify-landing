# Landing Project Rules

This folder is a standalone static landing project for the Bitrix module
`Оповещение в MAX`.

## Scope

- Edit only this landing project unless the task explicitly says otherwise.
- Treat GitHub as the source of truth for this landing.
- Treat `https://webpromax.ru/maxnotify/` as the current public preview, not as
  proof that local files have already been deployed.

## Safety

- Never commit real MAX bot tokens, passwords, chat IDs, API keys, cookies, SSH
  details, or hosting credentials.
- Do not add a token field to the public form.
- Do not add pricing or commercial terms unless explicitly approved.
- Keep connection/security wording clear: token transfer is agreed separately
  and should not happen through the public form.

## Verification

Before reporting a change as ready:

- open the page in a browser;
- check desktop and mobile widths;
- check that screenshots load;
- check that the screenshot modal opens;
- check that there are no relevant console errors;
- check that the public form still does not ask for a token.
