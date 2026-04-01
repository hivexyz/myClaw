import { env } from "../config/env";

export async function httpGet<T>(path: string): Promise<T> {
  const response = await fetch(`${env.apiBaseUrl}${path}`);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  return (await response.json()) as T;
}
