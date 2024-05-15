import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_RouterNatLogConfig {
  // Indicates whether or not to export logs.
  Enable?: boolean;

  /*
Specifies the desired filtering of logs on this NAT.
Possible values are: `ERRORS_ONLY`, `TRANSLATIONS_ONLY`, `ALL`.
*/
  Filter?: string;
}

export function Compute_RouterNatLogConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enable",
      "Indicates whether or not to export logs.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Filter",
      "Specifies the desired filtering of logs on this NAT.\nPossible values are: `ERRORS_ONLY`, `TRANSLATIONS_ONLY`, `ALL`.",
      [],
      true,
      false,
    ),
  ];
}
