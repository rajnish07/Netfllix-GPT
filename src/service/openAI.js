import OpenAI from "openai";
import { openAIKey } from "../utils/contants";

const openai = new OpenAI({
  apiKey: openAIKey,
  dangerouslyAllowBrowser: true,
});

export default openai;
