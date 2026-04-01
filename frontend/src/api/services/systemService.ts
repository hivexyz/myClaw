import { httpGet } from "../http";
import type { HealthResponse, MessageResponse } from "../../types/api";

export function getHealth() {
  return httpGet<HealthResponse>("/api/health");
}

export function getMessage() {
  return httpGet<MessageResponse>("/api/message");
}
