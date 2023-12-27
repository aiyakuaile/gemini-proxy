import { serve } from "https://deno.land/std@0.181.0/http/server.ts";

const DEEPAI_API_HOST = "generativelanguage.googleapis.com";

serve(async (request) => {
  const url = new URL(request.url);

  if (url.pathname.startsWith("/v1/models/gemini-pro:generateContent")) {
    // 处理特定路径的逻辑
    // ...

    // 例如，将请求代理到 DEEPAI_API_HOST
    url.host = DEEPAI_API_HOST;
    return await fetch(url.toString(), request);
  }

  // 处理其他路径的逻辑
  if (url.pathname === "/") {
    return fetch(new URL("./Readme.md", import.meta.url));
  }

  // 如果没有匹配的路径，可以返回 404 Not Found
  return new Response("Not Found", { status: 404 });
});
