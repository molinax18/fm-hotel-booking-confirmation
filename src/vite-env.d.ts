/// <reference types="vite/client" />

declare module "*.svg?react" {
  import React from "react";
  const FC: React.FC<React.SVGProps<SVGSVGElement>>;
  export default FC;
}
