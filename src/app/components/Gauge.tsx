type GaugeProps = {
  value: number;
  color?: string;
  showLabels?: boolean;
  min?: string;
  max?: string;
};

const TICKS = 40;
const CX = 100;
const CY = 100;
const R = 80;

export default function Gauge({
  value,
  color = "#ef4d23",
  showLabels = false,
  min,
  max,
}: GaugeProps) {
  const active = Math.round((value / 100) * TICKS);

  return (
    <div className="w-full max-w-[260px] mx-auto">
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        {Array.from({ length: TICKS }, (_, i) => {
          // Sweep from π (left) to 2π (right) across the top half.
          const angle = Math.PI + (i / (TICKS - 1)) * Math.PI;
          const cos = Math.cos(angle);
          const sin = Math.sin(angle);
          return (
            <line
              key={i}
              x1={CX + (R - 10) * cos}
              y1={CY + (R - 10) * sin}
              x2={CX + R * cos}
              y2={CY + R * sin}
              stroke={i < active ? color : "#d4d4d8"}
              strokeWidth={2.5}
              strokeLinecap="round"
            />
          );
        })}
        <text
          x={100}
          y={105}
          textAnchor="middle"
          fontSize={22}
          fontWeight={600}
          fill="#0b0f1a"
        >
          {value}%
        </text>
      </svg>
      {showLabels && (
        <div className="flex justify-between text-[11px] text-neutral-500">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      )}
    </div>
  );
}
