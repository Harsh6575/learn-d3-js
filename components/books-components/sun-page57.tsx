import { marginClass } from "@/contants";

export const SunPage57 = () => {
  return (
    <div className={`flex flex-wrap ${marginClass}`}>
      <div className="flex items-center justify-start flex-col gap-4">
        <svg width="50" height="50">
          <circle
            cx="25"
            cy="25"
            r="22"
            fill="blue"
            stroke="gray"
            strokeWidth="2"
          />
        </svg>
        <p>A small SVG circle with a stroke applied</p>
      </div>
      <div className="flex items-center justify-start flex-col gap-4">
        <svg>
          <rect x="0" y="0" width="500" height="50" fill="black" />
        </svg>
        <p>A rectangle with a width of 500 and a height of 50</p>
      </div>
      <svg>
        <circle
          cx="25"
          cy="25"
          r="22"
          fill="yellow"
          stroke="orange"
          strokeWidth="5"
        />
      </svg>
    </div>
  );
};
