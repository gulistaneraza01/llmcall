# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

- Development server: `pnpm dev` (starts Express server with hot reload on `http://localhost:8000`)
- Install dependencies: `pnpm install`
- Run tests: `pnpm test` (placeholder script with message "Error: no test specified")
- No lint script is defined; no build script is defined in `package.json`.

## Project Architecture

This repository implements a lightweight Node.js/Express API (ModelHop) that proxies requests to AI language models via OpenRouter. Key structural details:

- **src/**
  - **index.js**: Entry point, sets up Express server.
  - **controller/llm.js**: Chat controller handling multiple-choice question generation.
  - **lib/**
    - **anthropicClient.js**: Anthropic SDK client (via OpenRouter).
    - **openai.js**: OpenAI SDK client (via OpenRouter, actively used).
  - **router/llm.js**: Route definitions.
  - **utils/**
    - **constraints.js**: Environment variable exports.
    - **tryCatch.js**: Async error-handling wrapper.

## Configuration

Environment variables must be set via `.env` file copied from `.env.example`. Required keys include `OPENROUTER_API_KEY`, `ANTHROPIC_API_KEY`, and `OPENAI_API_KEY`.

## Development Workflow

1. Install dependencies with `pnpm install`.
2. Start the server using `pnpm dev`.
3. Tests are not implemented; placeholder indicates no test suite is currently present.