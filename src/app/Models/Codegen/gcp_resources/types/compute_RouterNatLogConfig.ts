import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface compute_RouterNatLogConfig {
  // Indicates whether or not to export logs.
  enable?: boolean;

  /*
Specifies the desired filtering of logs on this NAT.
Possible values are: `ERRORS_ONLY`, `TRANSLATIONS_ONLY`, `ALL`.
*/
  filter?: string;
}

export function compute_RouterNatLogConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enable",
      "Indicates whether or not to export logs.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "filter",
      "Specifies the desired filtering of logs on this NAT.\nPossible values are: `ERRORS_ONLY`, `TRANSLATIONS_ONLY`, `ALL`.",
      [],
      true,
      false,
    ),
  ];
}
