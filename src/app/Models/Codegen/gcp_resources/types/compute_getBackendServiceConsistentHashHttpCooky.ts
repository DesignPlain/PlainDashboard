import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  compute_getBackendServiceConsistentHashHttpCookyTtl,
  compute_getBackendServiceConsistentHashHttpCookyTtl_GetTypes,
} from "./compute_getBackendServiceConsistentHashHttpCookyTtl";

export interface compute_getBackendServiceConsistentHashHttpCooky {
  /*
The name of the Backend Service.

- - -
*/
  name?: string;

  // Path to set for the cookie.
  path?: string;

  // Lifetime of the cookie.
  ttls?: Array<compute_getBackendServiceConsistentHashHttpCookyTtl>;
}

export function compute_getBackendServiceConsistentHashHttpCooky_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the Backend Service.\n\n- - -",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      "Path to set for the cookie.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ttls",
      "Lifetime of the cookie.",
      compute_getBackendServiceConsistentHashHttpCookyTtl_GetTypes(),
      true,
      false,
    ),
  ];
}
