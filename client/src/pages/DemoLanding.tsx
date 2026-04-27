import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  MessageSquare,
  Check,
  X,
  Play,
  Pause,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import samProfileImg from "@assets/1765163866463_1771787212019.jpeg";
import jefferyMelaraImg from "@assets/Jeffery_Melara_1773694648945.jpeg";
import kimberlyLorahImg from "@assets/Kimberly_Lorah_1773694648947.png";
import jillKaufmanImg from "@assets/Jill_K_1773694648946.jpg";
import kristenAlvarezImg from "@assets/Kristen_Alvarez_1773694648948.jpg";
import coleBinghamImg from "@assets/Cole_B_1773694648941.jpeg";
import janeGareeImg from "@assets/Jane_Garee_1773694648942.jpg";
import plumberImg from "@assets/male-plumber-working-to-fix-leaking-sink-in-home-b-2026-01-05-_1773770503114.jpg";
import electricianImg from "@assets/homeowner-checks-utility-water-meters-and-pipes-r-2026-01-16-2_1773770503115.jpg";
import restaurantImg from "@assets/waiter-using-mobile-phone-at-counter-2026-01-09-11-20-07-utc_(_1773770503116.jpg";
import hvacImg from "@assets/a-young-man-using-his-smart-phone-in-a-cycle-shop-2026-01-09-0_1773770503115.jpg";
import salonImg from "@assets/smiling-male-farm-worker-using-smartphone-near-com-2026-01-09-_1773770503117.jpg";
import petCareImg from "@assets/construction-worker-using-smartphone-near-the-site-2026-01-07-_1773770503117.jpg";
import { content } from "@/lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const VIEWPORT = { once: true, margin: "-60px" };
const TRANSITION = { duration: 0.5, ease: "easeOut" };

const WAVEFORM_BARS = [3,5,8,6,10,7,4,9,12,8,5,11,9,6,13,10,7,4,8,11,6,9,7,4,10,8,5,12,9,6];

type PhotoOverlay =
  | { style: "chip"; icon: string; line1: string; line2?: string }
  | { style: "notification"; time: string; title: string; fields: { label: string; value: string }[]; bgClass?: string }
  | { style: "sms"; message: string; time: string };

type CarouselCard =
  | { type: "photo"; caption: string; src?: string; objectPosition?: string; overlay?: PhotoOverlay }
  | { type: "quote"; quote: string; name: string; business: string; photo?: string };

const CAROUSEL_CARDS: CarouselCard[] = [
  { type: "photo", caption: "Plumber in van", src: plumberImg, overlay: { style: "notification", time: "11:47 PM", title: "Appointment booked", fields: [{ label: "Name", value: "Mike Torres" }, { label: "Address", value: "742 Elm St." }, { label: "Date", value: "Friday at 9 AM" }], bgClass: "bg-emerald-50 border border-emerald-200" } },
  { type: "quote", quote: "I feel a lot more confident that the customer's being taken care of. I was doing it all myself and I shouldn't have to spend so much time. You had it in your brain before we even did it on a whiteboard.", name: "Jeffrey Melara", business: "Melara's Coffee", photo: jefferyMelaraImg },
  { type: "photo", caption: "Electrician on site", src: electricianImg, objectPosition: "70% center", overlay: { style: "notification", time: "3:22 PM", title: "Consultation scheduled", fields: [{ label: "Name", value: "Sarah Mitchell" }, { label: "Address", value: "1205 Oak Ave." }, { label: "Date", value: "Thursday at 10 AM" }], bgClass: "bg-blue-50 border border-blue-200" } },
  { type: "quote", quote: "I didn't want my clients to think I had abandoned them. I feel confident now that people are getting the follow-up that they really deserve. You really understand without making me feel stupid or bad.", name: "Kimberly Lorah", business: "Blossom Coaching", photo: kimberlyLorahImg },
  { type: "photo", caption: "Restaurant owner", src: restaurantImg, objectPosition: "70% center", overlay: { style: "notification", time: "5:15 PM", title: "Reservation confirmed", fields: [{ label: "Name", value: "Maria Hernandez" }, { label: "Guests", value: "4" }, { label: "Date", value: "Tonight at 7:30 PM" }], bgClass: "bg-orange-50 border border-orange-200" } },
  { type: "quote", quote: "My leads were dropping out of my funnel. I didn't realize that I could automate it. You are on top of it. I knew I was going to get good results.", name: "Jill Kaufman", business: "Divorce Network Pro", photo: jillKaufmanImg },
  { type: "photo", caption: "HVAC tech", src: hvacImg, overlay: { style: "notification", time: "9:08 AM", title: "Appointment booked", fields: [{ label: "Name", value: "Marcus Rivera" }, { label: "Address", value: "88 Pine Rd." }, { label: "Date", value: "Monday at 2 PM" }], bgClass: "bg-sky-50 border border-sky-200" } },
  { type: "quote", quote: "The process is sped up and it requires less of me. You move things forward in a reliable way.", name: "Kristen Alvarez", business: "Happy Paws", photo: kristenAlvarezImg },
  { type: "photo", caption: "Salon owner", src: salonImg, objectPosition: "70% center", overlay: { style: "notification", time: "8:00 AM", title: "Weekly Report", fields: [{ label: "Calls answered", value: "23" }, { label: "Appointments booked", value: "5" }, { label: "Customers helped", value: "8" }, { label: "Spam calls blocked", value: "10" }], bgClass: "bg-violet-50 border border-violet-200" } },
  { type: "quote", quote: "If you combine his tech abilities, his understanding of business, and his work ethic, I think you'd be hard-pressed to find someone better.", name: "Cole Bingham", business: "Wingman Insurance", photo: coleBinghamImg },
  { type: "photo", caption: "Pet care pro", src: petCareImg, overlay: { style: "notification", time: "6:45 AM", title: "Consultation scheduled", fields: [{ label: "Name", value: "Jim Patterson" }, { label: "Address", value: "460 Cedar Ln." }, { label: "Date", value: "Wednesday at 8 AM" }], bgClass: "bg-amber-50 border border-amber-200" } },
  { type: "quote", quote: "I'm able to automate some things that still maintain that high-touch feeling but I don't have to go do it. It really saved me a ton of time and a lot of brain space. I have a lot more time to sit and think strategically.", name: "Jane Garee", business: "Showstopping Sales", photo: janeGareeImg },
];

function PhotoCard({ caption, src, objectPosition, overlay, idx }: { caption: string; src?: string; objectPosition?: string; overlay?: PhotoOverlay; idx: number }) {
  return (
    <div
      className="flex-shrink-0 w-[300px] sm:w-[340px] md:w-[380px] h-[300px] md:h-[340px] rounded-2xl bg-muted/60 border border-border relative overflow-hidden"
      data-testid={`carousel-photo-${idx}`}
    >
      {src ? (
        <img
          src={src}
          alt={caption}
          className="w-full h-full object-cover"
          style={objectPosition ? { objectPosition } : undefined}
        />
      ) : (
        <div className="absolute inset-0 bg-muted/60" />
      )}

      {overlay?.style === "chip" && (
        <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-md text-white rounded-full px-3 py-2 shadow-lg">
          <span className="text-green-400 font-bold text-sm">{overlay.icon}</span>
          <div>
            <p className="text-xs font-bold leading-tight">{overlay.line1}</p>
            {overlay.line2 && <p className="text-[10px] text-white/70 leading-tight">{overlay.line2}</p>}
          </div>
        </div>
      )}

      {overlay?.style === "notification" && (
        <div className="absolute bottom-3 left-3 right-3 flex items-start gap-2 bg-white rounded-2xl px-3 py-2.5 shadow-lg">
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
            <MessageSquare className="w-3.5 h-3.5 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <p className="text-sm font-bold text-gray-900 leading-none">{overlay.title}</p>
              <p className="text-xs text-gray-400 leading-none flex-shrink-0">{overlay.time}</p>
            </div>
            {overlay.fields.map((f) => (
              <p key={f.label} className="text-xs text-gray-600 leading-snug">
                <span className="font-semibold text-gray-700">{f.label}:</span> {f.value}
              </p>
            ))}
          </div>
        </div>
      )}

      {overlay?.style === "sms" && (
        <div className="absolute bottom-4 left-3 right-3">
          <div className="ml-auto max-w-[85%] bg-primary text-white rounded-2xl rounded-br-sm px-3 py-2 shadow-lg">
            <p className="text-xs leading-snug">{overlay.message}</p>
            <p className="text-[10px] text-white/60 text-right mt-1 leading-none">{overlay.time}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function QuoteCard({ quote, name, business, photo, idx }: { quote: string; name: string; business: string; photo?: string; idx: number }) {
  return (
    <div
      className="flex-shrink-0 w-[260px] sm:w-[290px] md:w-[320px] h-[300px] md:h-[340px] rounded-2xl bg-white border border-border/40 p-5 md:p-6 flex flex-col justify-between"
      data-testid={`carousel-quote-${idx}`}
    >
      <div>
        {photo ? (
          <img src={photo} alt={name} className="w-12 h-12 rounded-full object-cover border border-gray-300 mb-4" />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-200 border border-gray-300 mb-4" />
        )}
        <p className="text-gray-900 font-display text-sm md:text-base leading-snug line-clamp-7">
          "{quote}"
        </p>
      </div>
      <div>
        <p className="text-gray-900 font-body font-bold text-sm">{name}</p>
        <p className="text-gray-500 font-body text-xs">{business}</p>
      </div>
    </div>
  );
}

const TESTIMONIALS = [
  {
    name: "Jeffrey Melara",
    role: "Melara's Coffee",
    quote: "I feel a lot more confident that the customer's being taken care of. I was doing it all myself and I shouldn't have to spend so much time. You had it in your brain before we even did it on a whiteboard.",
    vimeoUrl: "https://www.youtube.com/watch?v=LlBXI7H4Fx4",
    previewClip: "",
  },
  {
    name: "Jill Kaufman",
    role: "Divorce Network Pro",
    quote: "My leads were dropping out of my funnel. I didn't realize that I could automate it. You are on top of it. I knew I was going to get good results.",
    vimeoUrl: "https://www.youtube.com/watch?v=ibOGXP3XLLQ",
    previewClip: "",
  },
  {
    name: "Cole Bingham",
    role: "Wingman Insurance",
    quote: "If you combine his tech abilities, his understanding of business, and his work ethic, I think you'd be hard-pressed to find someone better.",
    vimeoUrl: "https://www.youtube.com/watch?v=b3qbCH25VRc",
    previewClip: "",
  },
];

const DEMO_WAVEFORM_BARS = [4,7,11,8,14,10,6,12,9,5,13,8,10,6,15,11,7,4,9,12,6,10,8,5,11,7,14,9,6,13,10,8,5,12,7,11,9,6,14,10];

function AudioDemoPlayer({ label, src, demoId }: { label: string; src: string; demoId: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => setIsPlaying(false));
    }
  }

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onTimeUpdate = () => {
      if (audio.duration) setProgress((audio.currentTime / audio.duration) * 100);
    };
    const onEnded = () => { setIsPlaying(false); setProgress(0); };
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const totalBars = DEMO_WAVEFORM_BARS.length;

  return (
    <div className="rounded-2xl border border-border bg-card p-5 sm:p-6" data-testid={`audio-demo-${demoId}`}>
      <audio ref={audioRef} src={src} preload="metadata" />
      <div className="flex items-center gap-4 mb-4">
        <Button
          variant="default"
          size="icon"
          className="flex-shrink-0 w-12 h-12 rounded-full"
          onClick={togglePlay}
          data-testid={`btn-play-${demoId}`}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </Button>
        <p className="text-sm font-semibold text-foreground">{label}</p>
      </div>
      <div className="flex items-end gap-[3px] h-12 w-full" data-testid={`visualizer-${demoId}`}>
        {DEMO_WAVEFORM_BARS.map((height, i) => {
          const barProgress = (i / totalBars) * 100;
          const isPast = barProgress < progress;
          return (
            <div
              key={i}
              className={`flex-1 rounded-sm origin-bottom ${isPlaying || isPast ? "bg-primary" : "bg-muted-foreground/20"}`}
              style={{
                height: `${(height / 15) * 100}%`,
                animationName: isPlaying ? "pulse-bar" : "none",
                animationDuration: `${0.25 + (i % 9) * 0.055}s`,
                animationDelay: `${(i % 5) * 0.04}s`,
                animationIterationCount: "infinite",
                animationDirection: "alternate",
                animationTimingFunction: "ease-in-out",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

const vimeoThumbnailCache = new Map<string, string>();

function getYouTubeId(url: string): string | null {
  if (!url) return null;
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  return match ? match[1] : null;
}

function useVimeoThumbnail(vimeoUrl: string | undefined): { thumbnail: string | null; loading: boolean } {
  const ytId = vimeoUrl ? getYouTubeId(vimeoUrl) : null;
  const [thumbnail, setThumbnail] = useState<string | null>(() => {
    if (ytId) return `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
    if (vimeoUrl && vimeoThumbnailCache.has(vimeoUrl)) return vimeoThumbnailCache.get(vimeoUrl)!;
    return null;
  });
  const [loading, setLoading] = useState(() => {
    if (!vimeoUrl || ytId) return false;
    return !vimeoThumbnailCache.has(vimeoUrl);
  });
  useEffect(() => {
    if (!vimeoUrl) { setLoading(false); return; }
    if (ytId) {
      setThumbnail(`https://img.youtube.com/vi/${ytId}/hqdefault.jpg`);
      setLoading(false);
      return;
    }
    if (vimeoThumbnailCache.has(vimeoUrl)) {
      setThumbnail(vimeoThumbnailCache.get(vimeoUrl)!);
      setLoading(false);
      return;
    }
    setLoading(true);
    let cancelled = false;
    fetch(`https://vimeo.com/api/oembed.json?url=${encodeURIComponent(vimeoUrl)}&width=640`)
      .then(r => r.json())
      .then(data => {
        if (!cancelled && data.thumbnail_url) {
          vimeoThumbnailCache.set(vimeoUrl, data.thumbnail_url);
          setThumbnail(data.thumbnail_url);
        }
      })
      .catch(() => {})
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [vimeoUrl, ytId]);
  return { thumbnail, loading };
}

function buildVimeoEmbedUrl(vimeoUrl: string, opts: { autoplay?: boolean; muted?: boolean; loop?: boolean; background?: boolean } = {}): string {
  const ytId = getYouTubeId(vimeoUrl);
  if (ytId) {
    const params = new URLSearchParams();
    params.set("rel", "0");
    params.set("modestbranding", "1");
    if (opts.autoplay) params.set("autoplay", "1");
    if (opts.muted) params.set("mute", "1");
    if (opts.loop) { params.set("loop", "1"); params.set("playlist", ytId); }
    return `https://www.youtube.com/embed/${ytId}?${params.toString()}`;
  }
  if (vimeoUrl.includes("player.vimeo.com")) return vimeoUrl;
  const cleaned = vimeoUrl.split("?")[0];
  const parts = cleaned.replace("https://vimeo.com/", "").split("/");
  const videoId = parts[0];
  const privacyHash = parts[1] || "";
  const params = new URLSearchParams();
  params.set("title", "0");
  params.set("byline", "0");
  params.set("portrait", "0");
  if (privacyHash) params.set("h", privacyHash);
  if (opts.autoplay) params.set("autoplay", "1");
  if (opts.muted) params.set("muted", "1");
  if (opts.loop) params.set("loop", "1");
  if (opts.background) params.set("background", "1");
  return `https://player.vimeo.com/video/${videoId}?${params.toString()}`;
}

function DemoVimeoLightbox({ vimeoUrl, onClose }: { vimeoUrl: string; onClose: () => void }) {
  const embedUrl = buildVimeoEmbedUrl(vimeoUrl, { autoplay: true });

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
      data-testid="demo-vimeo-lightbox"
    >
      <div
        className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={embedUrl}
          className="w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Testimonial Video"
        />
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center hover:bg-black/80 transition-colors"
          data-testid="button-close-demo-lightbox"
        >
          <X className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth < breakpoint);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [breakpoint]);
  return isMobile;
}

function TestimonialCard({ testimonial, index, onPlay }: { testimonial: typeof TESTIMONIALS[0]; index: number; onPlay: (vimeoUrl: string) => void }) {
  const isMobile = useIsMobile();
  const { thumbnail, loading } = useVimeoThumbnail(testimonial.previewClip || testimonial.vimeoUrl);

  const previewEmbedUrl = testimonial.previewClip
    ? buildVimeoEmbedUrl(testimonial.previewClip, { autoplay: true, muted: true, loop: true, background: true })
    : "";

  return (
    <div
      className="rounded-xl overflow-hidden bg-card border border-card-border shadow-md cursor-pointer"
      data-testid={`testimonial-card-${index}`}
      onClick={() => onPlay(testimonial.vimeoUrl)}
    >
      <div className="relative aspect-video bg-secondary overflow-hidden">
        {isMobile || !testimonial.previewClip ? (
          <>
            {thumbnail ? (
              <img
                src={thumbnail}
                alt={testimonial.name}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className={`absolute inset-0 bg-gray-900 ${loading ? "animate-pulse" : ""}`} />
            )}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-lg"
                data-testid={`btn-play-testimonial-${index}`}
              >
                <Play className="w-6 h-6 text-white ml-0.5" />
              </div>
            </div>
          </>
        ) : (
          <>
            <iframe
              src={previewEmbedUrl}
              className="absolute inset-0 w-full h-full pointer-events-none"
              allow="autoplay"
              title={`${testimonial.name} preview`}
              style={{ border: 0 }}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity z-10"
              data-testid={`btn-play-testimonial-${index}`}
            >
              <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-lg">
                <Play className="w-6 h-6 text-white ml-0.5" />
              </div>
            </div>
          </>
        )}
      </div>
      <div className="p-3 min-h-[140px] flex flex-col justify-between">
        <p className="font-bold text-sm text-foreground font-body leading-snug">"{testimonial.quote}"</p>
        <p className="text-xs text-muted-foreground font-body mt-2">{testimonial.name}, {testimonial.role}</p>
      </div>
    </div>
  );
}

export default function DemoLanding() {
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "demo", {origin:"https://app.cal.com"});
      Cal.ns.demo("inline", {
        elementOrSelector:"#my-cal-inline-demo",
        config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
        calLink: "servicecallsaver/demo",
      });
      Cal.ns.demo("ui", {"hideEventTypeDetails":true,"layout":"month_view","theme":"dark","cssVarsPerTheme":{"dark":{"cal-bg":"#15181e","cal-bg-subtle":"#1c2027","cal-bg-muted":"#111318","cal-border":"#1e2530"}}});
    `;
    document.head.appendChild(script);
    return () => {
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, []);

  const [lightboxUrl, setLightboxUrl] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body selection:bg-primary/20 overflow-x-hidden">
      {/* ─── 1. STICKY HEADER ─── */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm" data-testid="demo-sticky-header">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <img src="/images/logo.png" alt="Service Call Saver" className="h-8 w-auto -mr-1" />
            <span className="font-bold text-sm text-foreground font-body">Service Call Saver</span>
          </div>
          <Button
            size="sm"
            className="rounded-full px-4 font-semibold text-sm glow-accent whitespace-nowrap"
            onClick={() => scrollTo("book")}
            data-testid="btn-sticky-try-free"
          >
            Start your free trial
          </Button>
        </div>
      </header>

      {/* ─── 2. HERO + PHOTO MOSAIC ─── */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6" data-testid="demo-hero">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-foreground mb-6"
              data-testid="demo-headline"
            >
              <span className="block mb-3 sm:mb-4 leading-[1.15]">Stop missing calls.</span>
              <em className="italic leading-[1.15]">Make more money.</em>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-10 leading-relaxed" data-testid="demo-subheadline">
              Your AI receptionist answers the calls you can't get to, books jobs and takes care of your customers.
            </p>
            <Button
              size="lg"
              className="rounded-full px-10 py-6 text-base font-bold shadow-lg glow-accent"
              onClick={() => scrollTo("book")}
              data-testid="btn-hero-primary"
            >
              Start your free trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="pb-4" data-testid="demo-carousel">
        <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp} transition={TRANSITION}>
          <div
            className="overflow-hidden py-2"
            onMouseEnter={() => setIsCarouselHovered(true)}
            onMouseLeave={() => setIsCarouselHovered(false)}
            data-testid="mixed-carousel-wrapper"
          >
            <div
              className="flex gap-4 w-max"
              style={{
                animation: `carousel-scroll ${CAROUSEL_CARDS.length * 6}s linear infinite`,
                animationPlayState: isCarouselHovered ? "paused" : "running",
              }}
              data-testid="mixed-carousel-strip"
            >
              {[...CAROUSEL_CARDS, ...CAROUSEL_CARDS].map((card, idx) =>
                card.type === "photo" ? (
                  <PhotoCard key={`card-${idx}`} caption={card.caption} src={card.src} objectPosition={card.objectPosition} overlay={card.overlay} idx={idx} />
                ) : (
                  <QuoteCard key={`card-${idx}`} quote={card.quote} name={card.name} business={card.business} photo={card.photo} idx={idx} />
                )
              )}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── 3. BUSINESS STATEMENT ─── */}
      <section className="min-h-[85vh] flex items-center justify-center px-4 sm:px-6" data-testid="demo-statement">
        <div className="max-w-5xl mx-auto text-center py-20 md:py-28">
          <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp} transition={TRANSITION}>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.08] tracking-tight text-foreground mb-8">
              We answer the calls you can't get to and turn them into <em className="italic">booked jobs.</em>
            </h2>
            <p className="text-2xl sm:text-3xl md:text-4xl text-muted-foreground font-body font-medium max-w-3xl mx-auto leading-snug">
              And if you ever need us, just call. Real person in 30 minutes or your month is free.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── AUDIO DEMO ─── */}
      <section className="py-20 md:py-28 px-4 sm:px-6" data-testid="demo-audio">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp} transition={TRANSITION}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-center mb-12 text-foreground">
              Hear it in action.
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <AudioDemoPlayer demoId="hvac" label="Real call: Deck building company" src="/audio/hvac-demo.mp3" />
              <AudioDemoPlayer demoId="restaurant" label="Real call: Restaurant reservation" src="/audio/restaurant-demo.mp3" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 4. SOCIAL PROOF / TESTIMONIALS (with AudioCard play behavior) ─── */}
      <section className="py-20 md:py-28 bg-secondary/40" data-testid="demo-testimonials">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp} transition={TRANSITION}>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest font-body text-center mb-4">
              Trusted by real owners
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-center mb-12 text-foreground">
              Real owners. <em className="italic">Real results.</em>
            </h2>
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible sm:grid sm:grid-cols-2 lg:grid-cols-3">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="min-w-[280px] sm:min-w-0 snap-center">
                  <TestimonialCard testimonial={t} index={i} onPlay={(url) => setLightboxUrl(url)} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 5. THE OFFER ─── */}
      <section id="offer" className="py-20 md:py-28" data-testid="demo-offer">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp} transition={TRANSITION}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-center mb-2 text-foreground" style={{ lineHeight: '1.45' }}>
              85% of your missed callers are already calling your competitor.
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-center mb-6 text-foreground" style={{ lineHeight: '1.45' }}>
              How many did you miss this week?
            </p>
            <p className="text-lg sm:text-xl font-display font-semibold text-center text-muted-foreground mb-12" data-testid="offer-subheadline">
              More money without more hours. Try it free.
            </p>
            <div className="space-y-4 mb-10">
              {[
                "14-day free trial. Full access.",
                "30-day money-back guarantee.",
                "No contracts. Stop anytime.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3" data-testid={`offer-item-${i}`}>
                  <div className="w-5 h-5 rounded-full bg-green-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-500" />
                  </div>
                  <p className="text-base text-foreground font-body">{item}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button
                size="lg"
                className="rounded-full px-10 py-6 text-base sm:text-lg font-bold shadow-lg glow-accent whitespace-normal"
                onClick={() => scrollTo("book")}
                data-testid="btn-offer-cta"
              >
                Start your free trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── ABOUT SAM ─── */}
      <section className="pt-10 pb-4 md:pt-14 md:pb-6 relative" data-testid="demo-about-sam">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp} transition={TRANSITION}>
            <div className="text-center mb-14">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-5 block font-body">
                {content.aboutSam.sectionLabel}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-foreground whitespace-pre-line" style={{ lineHeight: "1.3" }} data-testid="demo-text-about-headline">
                {content.aboutSam.headline}
              </h2>
            </div>

            <div className="flex flex-col items-center gap-8">
              <div className="w-full max-w-xs mx-auto">
                <img
                  src={samProfileImg}
                  alt="Sam"
                  className="w-full rounded-xl shadow-lg object-cover"
                  data-testid="demo-img-about-sam"
                />
              </div>

              <div className="w-full space-y-6" data-testid="demo-text-about-body">
                {content.aboutSam.paragraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-base md:text-lg text-muted-foreground font-body leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 10. BOOKING CALENDAR ─── */}
      <section id="book" className="pt-20 md:pt-28 pb-6 md:pb-8 bg-secondary/40" data-testid="demo-book">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp} transition={TRANSITION}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-center mb-12 text-foreground">
              Pick a time to <em className="italic">get started.</em>
            </h2>
            <div className="rounded-xl overflow-hidden" data-testid="cal-embed-container">
              <div id="my-cal-inline-demo" style={{ width: "100%", height: "100%", overflow: "scroll" }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 8. CLOSING CTA + FOOTER ─── */}
      <section className="pt-4 pb-10 md:pb-14 bg-secondary/40" data-testid="demo-closing">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp} transition={TRANSITION}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4 text-foreground">
              More money without more hours.
            </h2>
            <p className="text-lg text-muted-foreground font-body mb-10">
              Try it free.
            </p>
            <Button
              size="lg"
              className="rounded-full px-10 py-6 text-base sm:text-lg font-bold shadow-lg glow-accent whitespace-normal"
              onClick={() => scrollTo("book")}
              data-testid="btn-closing-cta"
            >
              Start your free trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-border py-8" data-testid="demo-footer">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center">
                <Phone className="w-3 h-3 text-primary" />
              </div>
              <span className="font-semibold text-sm text-foreground font-body">Service Call Saver</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground font-body">
              <Link href="/privacy" className="hover:text-foreground transition-colors" data-testid="link-demo-privacy">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors" data-testid="link-demo-terms">
                Terms of Service
              </Link>
            </div>
            <div className="text-xs text-muted-foreground/40 font-body">
              &copy; {new Date().getFullYear()} Service Call Saver. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {lightboxUrl && (
        <DemoVimeoLightbox vimeoUrl={lightboxUrl} onClose={() => setLightboxUrl(null)} />
      )}
    </div>
  );
}
