import { useEffect, useRef, useState } from "react";

const WIDGET_ID = "12ca09b3-69b2-4aaa-94ce-ad2807002b8e";
const SCRIPT_SRC = "https://cdn.mastersunion.org/widget/iframe.js";

let scriptPromise: Promise<void> | null = null;
let openSetter: ((open: boolean) => void) | null = null;

function loadScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if ((window as any).LoadWidget) return Promise.resolve();
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise<void>((resolve, reject) => {
    const s = document.createElement("script");
    s.src = SCRIPT_SRC;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("widget script failed"));
    document.head.appendChild(s);
  });
  return scriptPromise;
}

export function openApplyWidget() {
  if (openSetter) openSetter(true);
}

export function handleApplyClick(e: { preventDefault: () => void }) {
  e.preventDefault();
  openApplyWidget();
}

export function ApplyWidgetModal() {
  const [open, setOpen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    openSetter = setOpen;
    return () => {
      if (openSetter === setOpen) openSetter = null;
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    let cancelled = false;
    loadScript()
      .then(() => {
        if (cancelled) return;
        const LoadWidget = (window as any).LoadWidget;
        if (typeof LoadWidget === "function") {
          // small delay to ensure iframe is in DOM
          requestAnimationFrame(() => {
            try {
              new LoadWidget(WIDGET_ID);
            } catch (err) {
              console.error(err);
            }
          });
        }
      })
      .catch((err) => console.error(err));
    return () => {
      cancelled = true;
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-ink/80 backdrop-blur-sm p-3 sm:p-6"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-3xl h-[90vh] bg-paper shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center bg-ink text-paper text-lg font-bold hover:bg-green hover:text-ink"
          aria-label="Close"
        >
          ×
        </button>
        <iframe
          ref={iframeRef}
          id={WIDGET_ID}
          title="Apply to Masters' Union Food Lab"
          className="h-full w-full border-0"
        />
      </div>
    </div>
  );
}
