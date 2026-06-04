import { useEffect, useMemo, useState } from "react";

const WIDGET_ID = "12ca09b3-69b2-4aaa-94ce-ad2807002b8e";
const WIDGET_BASE = `https://widget.mastersunion.org/widget/${WIDGET_ID}/`;

let openSetter: ((open: boolean) => void) | null = null;

export function openApplyWidget() {
  if (openSetter) openSetter(true);
}

export function handleApplyClick(e: { preventDefault: () => void }) {
  e.preventDefault();
  openApplyWidget();
}

export function ApplyWidgetModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    openSetter = setOpen;
    return () => {
      if (openSetter === setOpen) openSetter = null;
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Listen for resize/redirect/download messages from the widget,
    // mirroring the official widget script's handler.
    function onMessage(e: MessageEvent) {
      const allowed = [
        "https://mastersunion.org",
        "https://widget.mastersunion.org",
        "https://mittalschoolofbusiness.com",
      ];
      if (!allowed.includes(e.origin)) return;
      const data: any = e.data || {};
      if (data.type === "REDIRECT" && data.url) window.location.href = data.url;
      if ((data.type === "DOWNLOAD" || data.type === "OPEN_URL") && data.url) {
        window.open(data.url, "_blank");
      }
    }
    window.addEventListener("message", onMessage);

    return () => {
      window.removeEventListener("message", onMessage);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const src = useMemo(() => {
    if (typeof window === "undefined") return WIDGET_BASE;
    const params = new URLSearchParams(window.location.search);
    params.set("widgetHostURL", window.location.href);
    params.set("parentReferrer", document.referrer || window.location.href);
    return `${WIDGET_BASE}?${params.toString()}`;
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
        className="relative w-full max-w-3xl bg-paper shadow-2xl overflow-hidden"
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
          id={WIDGET_ID}
          title="Apply to Masters' Union Food Lab"
          src={src}
          width="100%"
          height="640"
          frameBorder={0}
          allow="autoplay; camera; microphone; fullscreen; display-capture"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-top-navigation allow-downloads"
          className="block border-0 w-full h-[640px]"
        />
      </div>
    </div>
  );
}
