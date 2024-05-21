import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_RegionSecurityPolicyRuleMatchConfig {
  // CIDR IP address range. Maximum number of srcIpRanges allowed is 10.
  srcIpRanges?: Array<string>;
}

export function compute_RegionSecurityPolicyRuleMatchConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "srcIpRanges",
      "CIDR IP address range. Maximum number of srcIpRanges allowed is 10.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
