// src/types/i18next.d.ts

import "i18next";
import { defaultNS, resources } from "../i18n/resources";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: (typeof resources)["fr"];
    strictKeyChecks: true;
  }
}
