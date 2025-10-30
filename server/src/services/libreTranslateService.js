// services/libreTranslateService.js
import fetch from 'node-fetch';

const LT_URL = process.env.LIBRETRANSLATE_URL || 'https://libretranslate.com';
const LT_API_KEY = process.env.LIBRETRANSLATE_API_KEY || null;

export async function translateText(q, from, to, { format = 'text' } = {}) {
  const body = { q, source: from || 'auto', target: to, format };
  if (LT_API_KEY) body.api_key = LT_API_KEY;

  const res = await fetch(`${LT_URL}/translate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    throw new Error(`LibreTranslate error ${res.status}: ${detail}`);
  }

  const data = await res.json();
  return data.translatedText;
}

export async function translateArray(arr, from, to, opts = {}) {
  const out = [];
  for (const x of arr || []) {
    out.push(x ? await translateText(x, from, to, opts) : x);
  }
  return out;
}

export async function translateLocaleContent(content, from, to) {
  if (!content) return content;

  const [title, paragraphs, subtitles] = await Promise.all([
    translateText(content.title, from, to),
    translateArray(content.paragraphs, from, to),
    translateArray(content.subtitles, from, to),
  ]);

  const lists = [];
  for (const block of content.lists || []) {
    lists.push({
      title: block?.title ? await translateText(block.title, from, to) : block.title,
      ordered: !!block?.ordered,
      items: await translateArray(block?.items || [], from, to),
    });
  }

  return { title, paragraphs, subtitles, lists };
}
