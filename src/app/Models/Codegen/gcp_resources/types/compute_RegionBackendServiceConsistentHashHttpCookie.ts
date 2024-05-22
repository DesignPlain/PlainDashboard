import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_RegionBackendServiceConsistentHashHttpCookieTtl,
  compute_RegionBackendServiceConsistentHashHttpCookieTtl_GetTypes,
} from "./compute_RegionBackendServiceConsistentHashHttpCookieTtl";

export interface compute_RegionBackendServiceConsistentHashHttpCookie {
  // Name of the cookie.
  name?: string;

  // Path to set for the cookie.
  path?: string;

  /*
Lifetime of the cookie.
Structure is documented below.
*/
  ttl?: compute_RegionBackendServiceConsistentHashHttpCookieTtl;
}

export function compute_RegionBackendServiceConsistentHashHttpCookie_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ttl",
      "Lifetime of the cookie.\nStructure is documented below.",
      compute_RegionBackendServiceConsistentHashHttpCookieTtl_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the cookie.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      "Path to set for the cookie.",
      [],
      false,
      false,
    ),
  ];
}
