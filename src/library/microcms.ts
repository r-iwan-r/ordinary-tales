// src/library/microcms.ts

import { createClient } from "microcms-js-sdk";

// microCMSとの通信経路を確立します
export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// Member の設計図
export type Member = {
  id: string;
  Name: string;
  Part: string;
  img: {
    url: string;
  };
};

// Archive の設計図
export type Archive = {
  id: string;
  ReleaseOrder: string;
  Title: string;
  Year: string;
  Date: string; // 【追加】
  URL01_LinkText?: string;
  URL01_URL?: string;
  URL02_LinkText?: string;
  URL02_URL?: string;
  URL03_LinkText?: string;
  URL03_URL?: string;
  URL04_LinkText?: string;
  URL04_URL?: string;
  "CD-R"?: string; // 【追加】IDにハイフンがある場合はダブルクォーテーションで囲みます
  Img: {
    url: string;
    width: number;
    height: number;
  };
};

// Movieの型定義を追加
export type Movie = {
  id: string; /* microcmsのID */
  Title: string; /* 管理用のタイトル */
  URL?: string; /* YouTubeなどのURL（任意） */
  Pass?: string; /* 自社サーバー等のパス（任意） */
  IMG?: { url: string }; /* MicroCMSの画像オブジェクトを追加 */
};