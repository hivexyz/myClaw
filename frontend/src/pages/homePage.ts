import { getHealth, getMessage } from "../api/services/systemService";

export function renderHomePage(root: HTMLElement): void {
  root.innerHTML = `
    <main class="container">
      <h1>FastAPI + TypeScript Engineering Skeleton</h1>
      <p id="health">Health: checking...</p>
      <p id="message">Message: loading...</p>
      <button id="reload">Reload</button>
    </main>
  `;

  const healthEl = root.querySelector<HTMLParagraphElement>("#health");
  const messageEl = root.querySelector<HTMLParagraphElement>("#message");
  const reloadBtn = root.querySelector<HTMLButtonElement>("#reload");

  async function loadData() {
    if (healthEl) {
      healthEl.textContent = "Health: checking...";
    }
    if (messageEl) {
      messageEl.textContent = "Message: loading...";
    }

    try {
      const [health, message] = await Promise.all([getHealth(), getMessage()]);
      if (healthEl) {
        healthEl.textContent = `Health: ${health.status}`;
      }
      if (messageEl) {
        messageEl.textContent = `Message: ${message.message} (${message.stack.backend} + ${message.stack.frontend})`;
      }
    } catch (error) {
      const msg = (error as Error).message;
      if (healthEl) {
        healthEl.textContent = `Health: failed (${msg})`;
      }
      if (messageEl) {
        messageEl.textContent = `Message: failed (${msg})`;
      }
    }
  }

  reloadBtn?.addEventListener("click", loadData);
  void loadData();
}
