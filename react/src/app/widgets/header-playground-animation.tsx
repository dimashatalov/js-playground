export default function HeaderPlaygroundAnimation() {
    return (<>
                  <div className="playground-animation">
            <svg
              className="playground-animation__svg"
              viewBox="0 0 420 190"
              role="img"
              aria-labelledby="playground-animation-title"
            >
              <title id="playground-animation-title">
                JavaScript code symbols orbit a running script
              </title>
              <defs>
                <radialGradient id="playground-glow">
                  <stop stopColor="#f7c948" stopOpacity="0.28" />
                  <stop offset="1" stopColor="#f7c948" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="playground-card" x1="0" y1="0" x2="1" y2="1">
                  <stop stopColor="#27253b" />
                  <stop offset="1" stopColor="#171624" />
                </linearGradient>
              </defs>

              <circle cx="210" cy="95" r="91" fill="url(#playground-glow)" />
              <ellipse
                className="playground-animation__orbit-track"
                cx="210"
                cy="95"
                rx="157"
                ry="61"
              />
              <ellipse
                className="playground-animation__orbit-track playground-animation__orbit-track--inner"
                cx="210"
                cy="95"
                rx="119"
                ry="44"
              />

              <g className="playground-animation__orbit">
                <g className="playground-animation__token playground-animation__token--code">
                  <rect x="46" y="74" width="64" height="42" rx="13" />
                  <text x="78" y="96" textAnchor="middle" dominantBaseline="middle">
                    {'</>'}
                  </text>
                </g>
                <g className="playground-animation__token playground-animation__token--braces">
                  <circle cx="354" cy="95" r="25" />
                  <text x="354" y="96" textAnchor="middle" dominantBaseline="middle">
                    {'{}'}
                  </text>
                </g>
                <circle className="playground-animation__orbit-dot" cx="209" cy="34" r="4" />
              </g>

              <g className="playground-animation__core">
                <rect
                  x="145"
                  y="43"
                  width="130"
                  height="104"
                  rx="19"
                  fill="url(#playground-card)"
                />
                <path d="M145 62h130" stroke="#454257" />
                <circle cx="162" cy="53" r="3" fill="#ff6b6b" />
                <circle cx="173" cy="53" r="3" fill="#f7c948" />
                <circle cx="184" cy="53" r="3" fill="#67d5a5" />
                <text className="playground-animation__filename" x="210" y="56" textAnchor="middle">
                  script.js
                </text>
                <text className="playground-animation__code" x="166" y="88">
                  const
                </text>
                <text className="playground-animation__code playground-animation__code--highlight" x="205" y="88">
                  fun
                </text>
                <text className="playground-animation__code" x="166" y="108">
                  {'() => {'}
                </text>
                <text className="playground-animation__code playground-animation__code--result" x="178" y="128">
                  run
                </text>
                <text className="playground-animation__cursor" x="207" y="128">
                  _
                </text>
                <text className="playground-animation__code" x="218" y="128">
                  {'}'}
                </text>
              </g>
            </svg>
          </div>
        </>);
    }
}