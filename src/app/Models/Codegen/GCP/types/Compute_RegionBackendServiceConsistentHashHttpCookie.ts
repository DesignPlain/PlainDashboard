import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_RegionBackendServiceConsistentHashHttpCookieTtl,
  Compute_RegionBackendServiceConsistentHashHttpCookieTtl_GetTypes,
} from "./Compute_RegionBackendServiceConsistentHashHttpCookieTtl";

export interface Compute_RegionBackendServiceConsistentHashHttpCookie {
  // Name of the cookie.
  Name?: string;

  // Path to set for the cookie.
  Path?: string;

  /*
Lifetime of the cookie.
Structure is documented below.
*/
  Ttl?: Compute_RegionBackendServiceConsistentHashHttpCookieTtl;
}

export function Compute_RegionBackendServiceConsistentHashHttpCookie_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Ttl",
      "Lifetime of the cookie.\nStructure is documented below.",
      Compute_RegionBackendServiceConsistentHashHttpCookieTtl_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Name of the cookie.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Path",
      "Path to set for the cookie.",
      [],
      false,
      false,
    ),
  ];
}
