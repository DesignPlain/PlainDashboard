import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Beyondcorp_AppConnectionApplicationEndpoint {
  // Hostname or IP address of the remote application endpoint.
  Host?: string;

  /*
Port of the remote application endpoint.

- - -
*/
  Port?: number;
}

export function Beyondcorp_AppConnectionApplicationEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Host",
      "Hostname or IP address of the remote application endpoint.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Port",
      "Port of the remote application endpoint.\n\n- - -",
      [],
      true,
      false,
    ),
  ];
}
