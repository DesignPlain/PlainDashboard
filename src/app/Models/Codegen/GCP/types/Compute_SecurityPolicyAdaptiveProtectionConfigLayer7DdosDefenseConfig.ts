import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig {
  // If set to true, enables CAAP for L7 DDoS detection.
  Enable?: boolean;

  // Rule visibility can be one of the following:
  RuleVisibility?: string;
}

export function Compute_SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enable",
      "If set to true, enables CAAP for L7 DDoS detection.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RuleVisibility",
      "Rule visibility can be one of the following:",
      [],
      false,
      false,
    ),
  ];
}
