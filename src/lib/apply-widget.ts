const WIDGET_ID = "12ca09b3-69b2-4aaa-94ce-ad2807002b8e";
const SCRIPT_SRC = "https://cdn.mastersunion.org/widget/iframe.js";

let scriptPromise: Promise<void> | null = null;

function loadScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if ((window as any).LoadWidget) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${SCRIPT_SRC}"]`,
    );
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("widget script failed")));
      return;
    }
    const s = document.createElement("script");
    s.src = SCRIPT_SRC;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("widget script failed"));
    document.head.appendChild(s);
  });

  return scriptPromise;
}

export async function openApplyWidget() {
  try {
    await loadScript();
    const LoadWidget = (window as any).LoadWidget;
    if (typeof LoadWidget === "function") {
      new LoadWidget(WIDGET_ID);
    }
  } catch (err) {
    console.error(err);
  }
}

export function handleApplyClick(e: { preventDefault: () => void }) {
  e.preventDefault();
  void openApplyWidget();
}
