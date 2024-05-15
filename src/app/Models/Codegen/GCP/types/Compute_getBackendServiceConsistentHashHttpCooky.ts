import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_getBackendServiceConsistentHashHttpCookyTtl,
  Compute_getBackendServiceConsistentHashHttpCookyTtl_GetTypes,
} from "./Compute_getBackendServiceConsistentHashHttpCookyTtl";

export interface Compute_getBackendServiceConsistentHashHttpCooky {
  /*
The name of the Backend Service.

- - -
*/
  Name?: string;

  // Path to set for the cookie.
  Path?: string;

  // Lifetime of the cookie.
  Ttls?: Array<Compute_getBackendServiceConsistentHashHttpCookyTtl>;
}

export function Compute_getBackendServiceConsistentHashHttpCooky_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Ttls",
      "Lifetime of the cookie.",
      Compute_getBackendServiceConsistentHashHttpCookyTtl_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of the Backend Service.\n\n- - -",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Path",
      "Path to set for the cookie.",
      [],
      true,
      false,
    ),
  ];
}
