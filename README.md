# ModelHop

A lightweight Node.js/Express API server that acts as a proxy/router to AI language models via [OpenRouter](https://openrouter.ai). Currently generates AI-powered multiple-choice questions for educational purposes.

## Tech Stack

- **Runtime:** Node.js (ES Modules)
- **Framework:** Express 5
- **LLM SDKs:** OpenAI SDK, Anthropic SDK
- **LLM Provider:** OpenRouter
- **Package Manager:** pnpm

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 11+
- An [OpenRouter](https://openrouter.ai) API key

### Installation

```bash
pnpm install
```

### Configuration

Copy the environment template and add your API keys:

```bash
cp .env.example .env
```

Edit `.env` with your OpenRouter API key:

```env
OPENROUTER_API_KEY=sk-or-v1-...
ANTHROPIC_API_KEY=sk-or-v1-...
OPENAI_API_KEY=sk-or-v1-...
```

### Development

```bash
pnpm dev
```

Starts the server with `nodemon` for hot-reload on `http://localhost:8000`.

## API

### Health Check

```
GET /
```

Response: `{ "msg": "server is runing 🚀" }`

### Generate MCQs

```
POST /api/v1/ai/chat
Content-Type: application/json

{ "topic": "JavaScript closures" }
```

Response: `{ "reply": "<generated multiple-choice questions>" }`

The model generates 2 multiple-choice questions about the given topic, each with one correct answer and three distractors.

## Project Structure

```
src/
├── index.js                # Entry point — Express server setup
├── controller/
│   └── llm.js              # Chat controller (MCQ generation logic)
├── lib/
│   ├── anthropicClient.js  # Anthropic SDK client (via OpenRouter)
│   └── openai.js           # OpenAI SDK client (via OpenRouter, actively used)
├── router/
│   └── llm.js              # Route definitions
└── utils/
    ├── constraints.js      # Environment variable exports
    └── tryCatch.js         # Async error-handling wrapper
```

## Scripts

| Script | Command                  | Description          |
| ------ | ------------------------ | -------------------- |
| `dev`  | `nodemon src/index.js`   | Start with hot-reload |
| `test` | `echo "Error: no test specified" && exit 1` | Placeholder |

## License

ISC
