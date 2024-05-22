import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_OrganizationSecurityPolicyRuleMatchConfigLayer4Config,
  compute_OrganizationSecurityPolicyRuleMatchConfigLayer4Config_GetTypes,
} from "./compute_OrganizationSecurityPolicyRuleMatchConfigLayer4Config";

export interface compute_OrganizationSecurityPolicyRuleMatchConfig {
  /*
Destination IP address range in CIDR format. Required for
EGRESS rules.
*/
  destIpRanges?: Array<string>;

  /*
Pairs of IP protocols and ports that the rule should match.
Structure is documented below.


<a name="nested_layer4_config"></a>The `layer4_config` block supports:
*/
  layer4Configs?: Array<compute_OrganizationSecurityPolicyRuleMatchConfigLayer4Config>;

  /*
Source IP address range in CIDR format. Required for
INGRESS rules.
*/
  srcIpRanges?: Array<string>;
}

export function compute_OrganizationSecurityPolicyRuleMatchConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "layer4Configs",
      'Pairs of IP protocols and ports that the rule should match.\nStructure is documented below.\n\n\n<a name="nested_layer4_config"></a>The `layer4_config` block supports:',
      compute_OrganizationSecurityPolicyRuleMatchConfigLayer4Config_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "srcIpRanges",
      "Source IP address range in CIDR format. Required for\nINGRESS rules.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "destIpRanges",
      "Destination IP address range in CIDR format. Required for\nEGRESS rules.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
