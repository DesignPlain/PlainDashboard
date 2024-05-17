import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_SecurityPolicyRuleMatchConfig {
  /*
Set of IP addresses or ranges (IPV4 or IPV6) in CIDR notation
to match against inbound traffic. There is a limit of 10 IP ranges per rule. A value of `-` matches all IPs
(can be used to override the default behavior).
*/
  SrcIpRanges?: Array<string>;
}

export function Compute_SecurityPolicyRuleMatchConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "SrcIpRanges",
      "Set of IP addresses or ranges (IPV4 or IPV6) in CIDR notation\nto match against inbound traffic. There is a limit of 10 IP ranges per rule. A value of `*` matches all IPs\n(can be used to override the default behavior).",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
