import React from "react";

export default function CurvedText({ text, textColor }) {
  return (
    <div>
      <svg xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
          <path
            id="cp1"
            fill="none"
            stroke="red"
            d="M-120 0a120 120 0 01240 0"
          ></path>
          <path fill="none" stroke="red" d="M-120 0a120 120 0 00240 0"></path>
        </defs>
        <g transform="translate(150 150)">
          <text fontFamily="Roboto" fontSize="20" fill={textColor}>
            <textPath
              dominantBaseline="central"
              startOffset="190"
              textAnchor="middle"
              xlinkHref="#cp1"
            >
              {text ?? "Empty"}
            </textPath>
          </text>
        </g>
      </svg>
    </div>
  );
}
