import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_getRouterNatLogConfig {
  // Indicates whether or not to export logs.
  enable?: boolean;

  // Specifies the desired filtering of logs on this NAT. Possible values: ["ERRORS_ONLY", "TRANSLATIONS_ONLY", "ALL"]
  filter?: string;
}

export function compute_getRouterNatLogConfig_GetTypes(): DynamicUIProps[] {
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
      'Specifies the desired filtering of logs on this NAT. Possible values: ["ERRORS_ONLY", "TRANSLATIONS_ONLY", "ALL"]',
      [],
      true,
      false,
    ),
  ];
}
