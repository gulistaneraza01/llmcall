# AGENTS.md — ModelHop

## Quick start

```bash
pnpm install      # pnpm only — no npm/yarn
pnpm dev          # nodemon → http://localhost:8000
```

## Known bugs (fix before adding features)

- `src/lib/openai.js` reads `process.env.OPENROUTER_API_KEY` — not defined in `.env.example`. Add it.
- `src/utils/constraints.js:4` — `anthropic_api_key` reads `process.env.OPENAI_API_KEY` instead of `process.env.ANTHROPIC_API_KEY`.
- `.env` contains live API keys — don't commit changes to it. Use `.env.example` for new vars.
- `pnpm test` is a placeholder (`exit 1`). No test suite, no lint, no typecheck.
- Variable typo at `src/controller/llm.js:4`: `sytemPrompt` (used consistently, but rename if touching).

## Architecture

ESM-only Node.js/Express 5 app routing LLM requests through OpenRouter.

| Path                         | Role                                                    |
| ---------------------------- | ------------------------------------------------------- |
| `src/index.js`               | Express setup, port, mounts routes at `/api/v1/ai`      |
| `src/router/llm.js`          | `POST /chat` → controller                               |
| `src/controller/llm.js`      | Builds prompt, calls OpenAI SDK (via OpenRouter)        |
| `src/lib/openai.js`          | OpenAI client pointed at `https://openrouter.ai/api/v1` |
| `src/lib/anthropicClient.js` | Anthropic client (same base URL, currently unused)      |
| `src/utils/constraints.js`   | `dotenv` config loader, exports env vars                |
| `src/utils/tryCatch.js`      | Async error wrapper → 500 + `{ error }`                 |

Only `openai.js` is wired into the controller. `anthropicClient.js` is imported nowhere.

## Gotchas

- No `opencode.json` in repo — instructions live in this file and `CLAUDE.md` only.
- `.env` is gitignored; `.env.example` is the template for new vars.
- No build step, no code generation.
