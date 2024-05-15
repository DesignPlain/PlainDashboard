import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_FirewallLogConfig {
  /*
This field denotes whether to include or exclude metadata for firewall logs.
Possible values are: `EXCLUDE_ALL_METADATA`, `INCLUDE_ALL_METADATA`.
*/
  Metadata?: string;
}

export function Compute_FirewallLogConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Metadata",
      "This field denotes whether to include or exclude metadata for firewall logs.\nPossible values are: `EXCLUDE_ALL_METADATA`, `INCLUDE_ALL_METADATA`.",
      [],
      true,
      false,
    ),
  ];
}
