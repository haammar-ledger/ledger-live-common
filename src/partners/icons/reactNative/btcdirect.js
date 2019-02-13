// @flow
import SVG, { Path, Rect, Polygon } from "react-native-svg";
import React from "react";

const fills = {
  blue: "#0086fb"
};

const BTCDirect = ({ width = 150 }: { width: number }) => (
  <SVG
    width={width}
    height={(width * 792.05) / 2892.16}
    viewBox="0 0 2892.16 792.05"
  >
    <Path
      fill={fills.blue}
      d="M528.34,146.17,561.36,24H465.6l-19.81,76c-17.61-6.61-36.32-11-55-14.31L407.27,24H311.51L296.1,83.44C213.56,94.44,137.61,137.37,87,204.51-18.68,342.09,7.73,540.21,145.32,645.87L112.3,768H207l19.81-75.94c17.61,6.6,36.33,11,55,14.31L265.29,768h94.65l16.51-59.43C459,697.6,535,654.68,585.58,587.54,692.34,448.85,665.92,251.84,528.34,146.17ZM336.83,469.77a74.85,74.85,0,1,1,74.84-74.85C411.67,436.75,378.65,469.77,336.83,469.77Z"
    />
    <Path
      fill={fills.blue}
      d="M590,713c0-9.91-6.61-15.41-17.61-15.41H553.66v42.93h11V728.42h8.81l6.6,12.11h12.11l-9.91-13.21C587.78,725.12,591.08,719.61,590,713Zm-9.91,0c0,4.4-2.2,7.7-6.6,7.7h-8.81v-14.3h7.71c3.3-1.1,6.6,2.2,7.7,5.5Z"
    />
    <Path
      fill={fills.blue}
      d="M571.27,675.59a46.23,46.23,0,1,0,46.22,46.23C616.39,696.5,596.58,675.59,571.27,675.59Zm0,81.45a35.23,35.23,0,1,1,35.22-35.22A34.77,34.77,0,0,1,571.27,757Z"
    />
    <Path
      fill={fills.blue}
      d="M1072.06,392.72c35.22-7.7,58.34-34.12,58.34-75.94,0-50.63-37.42-83.65-95.76-83.65H888.26V558.92H1039c59.44,0,96.86-35.22,96.86-90.25C1135.9,425.74,1109.49,397.12,1072.06,392.72Zm-95.75-96.86h35.22A32,32,0,0,1,1041.25,330v4.41c-1.1,17.61-16.51,30.81-35.22,29.71H976.31ZM1044.55,461c-1.1,17.61-17.61,31.92-36.32,29.72H977.41V420.24h36.32a33.24,33.24,0,0,1,30.82,35.22Z"
    />
    <Polygon
      fill={fills.blue}
      points="1152.41 315.68 1230.56 316.77 1230.56 558.92 1320.81 558.92 1320.81 316.77 1397.86 316.77 1397.86 233.13 1152.41 233.13 1152.41 315.68"
    />
    <Path
      fill={fills.blue}
      d="M1575.47,310c36.7,0,59.37,19.61,65.85,49h92.85c-6.48-85-66.94-134-158.7-134-97.16,0-164.1,70.8-164.1,171,0,99.12,65.86,171,164.1,171,91.76,0,151.14-49,158.7-134h-92.85c-5.4,29.41-29.15,49-65.85,49-45.34,0-72.33-32.67-72.33-86.05S1530.13,310,1575.47,310Z"
    />
    <Path
      fill={fills.blue}
      d="M1871.75,233.13h-90.26V558.92h90.26c100.16,0,154.09-79.25,154.09-162.9S1971.91,233.13,1871.75,233.13Zm-2.2,296.07h-59.44V261.74h59.44c83.65,0,126.57,66,126.57,134.28C1996.12,463.16,1953.2,529.2,1869.55,529.2Z"
    />
    <Path
      fill={fills.blue}
      d="M2087.85,248.54c-14.31,1.1-25.32,13.2-24.22,27.51v3.3c1.1,14.31,13.21,25.32,27.52,24.22s25.31-13.21,24.21-27.52v-3.3C2114.26,258.44,2102.16,247.43,2087.85,248.54Z"
    />
    <Rect
      fill={fills.blue}
      x="2075.19"
      y="346.49"
      width="28.62"
      height="212.43"
    />
    <Path
      fill={fills.blue}
      d="M2199.74,402.63V346.49h-27.51V557.82h27.51V466.46c0-46.22,17.61-95.75,62.74-95.75,6.6,0,12.11,0,18.71,1.1V344.29a96.38,96.38,0,0,0-17.61-2.2C2235,342.09,2208.55,360.8,2199.74,402.63Z"
    />
    <Path
      fill={fills.blue}
      d="M2403.36,341c-57.23,0-95.75,42.93-95.75,111.17s37.42,112.26,96.85,112.26c44,0,79.25-27.51,86.95-66H2463.9c-8.81,24.22-33,40.73-59.44,38.53-40.72,0-68.24-29.72-68.24-77h158.5c0-6.6,1.1-13.21,0-19.81C2494.72,382.81,2458.39,341,2403.36,341Zm-67.14,94.66c2.2-41.83,27.52-70.45,67.14-70.45s63.84,28.62,64.94,70.45Z"
    />
    <Path
      fill={fills.blue}
      d="M2627.89,369.61c35.23,0,57.24,16.51,62.74,49.53h27.52c-5.51-47.33-39.63-77.05-90.26-77.05-60.53,0-97.95,44-97.95,110.07s37.42,111.16,97.95,112.26c51.74,0,85.86-29.71,90.26-75.94h-27.52c-5.5,31.92-28.61,48.43-62.74,48.43-42.92,0-69.34-33-69.34-83.65S2585,369.61,2627.89,369.61Z"
    />
    <Path
      fill={fills.blue}
      d="M2843.62,534.71c-18.71,0-34.12-6.61-34.12-50.64V372.91h53.93V346.49H2809.5V276.05H2782v70.44h-37.43v26.42H2782V489.58c0,66,31.91,71.54,56.13,71.54,11,1.1,22-1.1,31.92-3.3V530.3C2861.23,532.5,2852.43,533.6,2843.62,534.71Z"
    />
  </SVG>
);

export default BTCDirect;
