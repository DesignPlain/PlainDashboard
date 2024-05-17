import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_OrganizationSecurityPolicyRuleMatchConfigLayer4Config,
  Compute_OrganizationSecurityPolicyRuleMatchConfigLayer4Config_GetTypes,
} from "./Compute_OrganizationSecurityPolicyRuleMatchConfigLayer4Config";

export interface Compute_OrganizationSecurityPolicyRuleMatchConfig {
  /*
Destination IP address range in CIDR format. Required for
EGRESS rules.
*/
  DestIpRanges?: Array<string>;

  /*
Pairs of IP protocols and ports that the rule should match.
Structure is documented below.


<a name="nested_layer4_config"></a>The `layer4_config` block supports:
*/
  Layer4Configs?: Array<Compute_OrganizationSecurityPolicyRuleMatchConfigLayer4Config>;

  /*
Source IP address range in CIDR format. Required for
INGRESS rules.
*/
  SrcIpRanges?: Array<string>;
}

export function Compute_OrganizationSecurityPolicyRuleMatchConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "SrcIpRanges",
      "Source IP address range in CIDR format. Required for\nINGRESS rules.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "DestIpRanges",
      "Destination IP address range in CIDR format. Required for\nEGRESS rules.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Layer4Configs",
      'Pairs of IP protocols and ports that the rule should match.\nStructure is documented below.\n\n\n<a name="nested_layer4_config"></a>The `layer4_config` block supports:',
      Compute_OrganizationSecurityPolicyRuleMatchConfigLayer4Config_GetTypes(),
      true,
      false,
    ),
  ];
}
