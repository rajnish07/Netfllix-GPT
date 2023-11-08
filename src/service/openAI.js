import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OpenAI_Key,
  dangerouslyAllowBrowser: true,
});

export default openai;
