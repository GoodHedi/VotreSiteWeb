import type { ReactNode } from "react";
import { ChevronDown, TrendingDown, TrendingUp, X } from "lucide-react";
import Gauge from "./Gauge";

function TogglePill({ options, active }: { options: [string, string]; active: 0 | 1 }) {
  return (
    <div className="bg-neutral-100 rounded-full p-1 flex mt-4">
      {options.map((label, i) => (
        <button
          key={label}
          type="button"
          className={`flex-1 rounded-full py-1.5 text-[12px] ${
            i === active
              ? "bg-white shadow-sm text-neutral-900 font-medium"
              : "text-neutral-500"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

function CardHeader({ title, period }: { title: string; period: string }) {
  return (
    <div className="flex items-center justify-between text-[13px]">
      <span className="text-[#ef4d23] font-medium">{title}</span>
      <span className="text-neutral-500">{period}</span>
    </div>
  );
}

function ClicksCard() {
  return (
    <div className="bg-white rounded-2xl p-5 text-left">
      <CardHeader title="Clics" period="Ce mois-ci" />
      <div className="mt-3 flex items-center gap-2 flex-wrap">
        <span className="text-[28px] font-semibold leading-none text-neutral-900">6&nbsp;896</span>
        <span className="inline-flex items-center gap-1 bg-red-50 text-red-600 rounded-full px-2 py-0.5 text-[11px]">
          <TrendingDown className="w-3 h-3" />
          -3&nbsp;382 (33&nbsp;%)
        </span>
      </div>
      <p className="mt-1.5 text-[12px] text-neutral-500">Par rapport à hier</p>
      <p className="mt-4 text-center text-[12px] text-neutral-700">Objectif mensuel atteint</p>
      <div className="mt-1">
        <Gauge value={92} showLabels min="389 k" max="425 k" />
      </div>
      <TogglePill options={["Impressions", "Clics"]} active={0} />
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[12px] text-neutral-700">{label}</span>
      {children}
    </label>
  );
}

function Select({ value }: { value: string }) {
  return (
    <button
      type="button"
      className="flex items-center justify-between border border-neutral-200 rounded-lg px-3 py-2 text-[13px] text-neutral-900"
    >
      {value}
      <ChevronDown className="w-4 h-4 text-neutral-500" />
    </button>
  );
}

function NumberInput({ defaultValue }: { defaultValue: number }) {
  return (
    <div className="flex items-center border border-neutral-200 rounded-lg px-3 py-2 text-[13px]">
      <span className="text-neutral-400 mr-2">#</span>
      <input
        type="number"
        defaultValue={defaultValue}
        className="w-full bg-transparent outline-none text-neutral-900"
      />
    </div>
  );
}

function FormCard() {
  return (
    <div className="bg-white rounded-2xl p-5 flex flex-col gap-3 text-left">
      <Field label="Afficher les chiffres pour">
        <Select value="Ce mois-ci" />
      </Field>
      <Field label="Comparer la période par">
        <Select value="Depuis le début du mois" />
      </Field>
      <Field label="Objectifs (ce mois-ci)">
        <NumberInput defaultValue={10} />
      </Field>
      <Field label="Objectifs (cette année)">
        <NumberInput defaultValue={100} />
      </Field>
      <div className="flex items-center gap-4 mt-1">
        <button
          type="button"
          className="bg-[#ef4d23] text-white rounded-lg px-5 py-2 text-[13px] font-medium"
        >
          Enregistrer
        </button>
        <button type="button" className="underline text-[13px] text-neutral-900">
          Annuler
        </button>
        <button type="button" aria-label="Fermer" className="ml-auto text-neutral-500">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function VideoStartsCard() {
  return (
    <div className="bg-white rounded-2xl p-5 text-left">
      <CardHeader title="Lectures vidéo" period="aujourd'hui" />
      <div className="mt-3 flex items-center gap-2">
        <span className="text-[28px] font-semibold leading-none text-neutral-900">0</span>
        <span className="inline-flex items-center gap-1 bg-neutral-100 text-neutral-600 rounded-full px-2 py-0.5 text-[11px]">
          <TrendingUp className="w-3 h-3" />0
        </span>
      </div>
      <p className="mt-1.5 text-[12px] text-neutral-500">Par rapport à hier</p>
      <div className="mt-4">
        <Gauge value={68} color="#9ca3af" />
      </div>
      <TogglePill options={["Clics vidéo", "Lectures vidéo"]} active={0} />
    </div>
  );
}

export default function DashboardPreview() {
  return (
    <div className="px-3 sm:px-4">
      <div className="bg-[#f5f2ee] rounded-3xl p-4 sm:p-6 w-full max-w-[880px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <ClicksCard />
          <FormCard />
          <VideoStartsCard />
        </div>
      </div>
    </div>
  );
}
