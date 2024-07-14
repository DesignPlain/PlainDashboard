import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  compute_BackendServiceConsistentHashHttpCookieTtl,
  compute_BackendServiceConsistentHashHttpCookieTtl_GetTypes,
} from "./compute_BackendServiceConsistentHashHttpCookieTtl";

export interface compute_BackendServiceConsistentHashHttpCookie {
  // Name of the cookie.
  name?: string;

  // Path to set for the cookie.
  path?: string;

  /*
Lifetime of the cookie.
Structure is documented below.
*/
  ttl?: compute_BackendServiceConsistentHashHttpCookieTtl;
}

export function compute_BackendServiceConsistentHashHttpCookie_GetTypes(): DynamicUIProps[] {
  return [
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
    new DynamicUIProps(
      InputType.Object,
      "ttl",
      "Lifetime of the cookie.\nStructure is documented below.",
      compute_BackendServiceConsistentHashHttpCookieTtl_GetTypes(),
      false,
      false,
    ),
  ];
}
