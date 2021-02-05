import { Application, Router } from "https://deno.land/x/oak@v6.5.0/mod.ts";

import { parse } from "https://deno.land/std/flags/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.1/mod.ts";

import { getQuestions, getRandomQuestion } from "./api/questions.ts";

const app = new Application();
const router = new Router();
const { args } = Deno;
const DEFAULT_PORT = 8000;
const argPort = parse(args).port;
app.use(oakCors());
router
  .get("/api/questions/random", async (context) => {
    const question = await getRandomQuestion();
    context.response.body = question;
  })
  .get("/api/questions", async (context) => {
    const questions = await getQuestions();
    context.response.body = questions;
  });

app.use(router.routes());

await app.listen({ port: argPort ? Number(argPort) : DEFAULT_PORT });
