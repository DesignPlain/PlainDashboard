import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_SecurityPolicyRulePreconfiguredWafConfigExclusion,
  Compute_SecurityPolicyRulePreconfiguredWafConfigExclusion_GetTypes,
} from "./Compute_SecurityPolicyRulePreconfiguredWafConfigExclusion";

export interface Compute_SecurityPolicyRulePreconfiguredWafConfig {
  // An exclusion to apply during preconfigured WAF evaluation. Structure is documented below.
  Exclusions?: Array<Compute_SecurityPolicyRulePreconfiguredWafConfigExclusion>;
}

export function Compute_SecurityPolicyRulePreconfiguredWafConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Exclusions",
      "An exclusion to apply during preconfigured WAF evaluation. Structure is documented below.",
      Compute_SecurityPolicyRulePreconfiguredWafConfigExclusion_GetTypes(),
      false,
      false,
    ),
  ];
}
