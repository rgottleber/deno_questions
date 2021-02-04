import {
  Application,
  send,
  Router,
} from "https://deno.land/x/oak@v6.5.0/mod.ts";

import { getQuestions, getRandomQuestion } from "./api/questions.ts";

const app = new Application();

const router = new Router();

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

await app.listen({ port: 8000 });
