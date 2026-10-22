import { ChevronRight } from "lucide-react";
import Navbar from "./components/Navbar";
import DashboardPreview from "./components/DashboardPreview";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260424_064411_9e9d7f84-9277-41f4-ab10-59172d89e6be.mp4";
const POSTER_URL = "https://images.unsplash.com/photo-1557683316-973673baf926?w=1600&q=60";

export default function App() {
  return (
    <div
      className="min-h-screen w-full bg-[#ededed] p-3 sm:p-4"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <section className="relative w-full h-[calc(100vh-24px)] sm:h-[calc(100vh-32px)] overflow-hidden bg-[#d9d9d9] rounded-2xl sm:rounded-3xl">
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          src={VIDEO_URL}
          poster={POSTER_URL}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disableRemotePlayback
          webkit-playsinline="true"
          x5-playsinline="true"
        />
        <div className="absolute inset-0 bg-white/10" />

        <div className="relative z-10">
          <Navbar />

          <div className="flex flex-col items-center px-4 pt-10 sm:pt-16 pb-8 sm:pb-12 text-center">
            <span className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 shadow-sm text-[13px] text-neutral-900">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ef4d23]" />
              votresiteweb
            </span>

            <h1
              className="mt-5 sm:mt-6 max-w-4xl text-neutral-950"
              style={{
                fontSize: "clamp(36px, 8vw, 72px)",
                lineHeight: 1.05,
                fontWeight: 500,
                letterSpacing: "-0.02em",
              }}
            >
              Façonner les{" "}
              <span
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                agences
              </span>
              <br />
              de demain
            </h1>

            <p
              className="mt-4 sm:mt-6 text-neutral-700 px-2"
              style={{ fontSize: "clamp(13px, 3.5vw, 16px)" }}
            >
              Le logiciel tout-en-un qui propulse l'avenir des agences de relations presse
            </p>

            <a
              href="#"
              className="mt-6 sm:mt-8 inline-flex items-center gap-3 bg-[#0b0f1a] text-white rounded-full pl-6 sm:pl-7 pr-2 py-2 sm:py-2.5 text-[14px] font-medium"
            >
              Commencer
              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/15 flex items-center justify-center">
                <ChevronRight className="w-4 h-4" />
              </span>
            </a>
          </div>

          <DashboardPreview />
        </div>
      </section>
    </div>
  );
}
