import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig {
  // If set to true, enables CAAP for L7 DDoS detection.
  enable?: boolean;

  // Rule visibility can be one of the following:
  ruleVisibility?: string;
}

export function compute_SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enable",
      "If set to true, enables CAAP for L7 DDoS detection.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ruleVisibility",
      "Rule visibility can be one of the following:",
      [],
      false,
      false,
    ),
  ];
}
