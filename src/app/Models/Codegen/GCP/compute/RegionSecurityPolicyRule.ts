import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_RegionSecurityPolicyRuleMatch,
  Compute_RegionSecurityPolicyRuleMatch_GetTypes,
} from "../types/Compute_RegionSecurityPolicyRuleMatch";
import {
  Compute_RegionSecurityPolicyRuleNetworkMatch,
  Compute_RegionSecurityPolicyRuleNetworkMatch_GetTypes,
} from "../types/Compute_RegionSecurityPolicyRuleNetworkMatch";

export interface RegionSecurityPolicyRuleArgs {
  /*
The name of the security policy this rule belongs to.


- - -
*/
  SecurityPolicy?: string;

  /*
The Action to perform when the rule is matched. The following are the valid actions:
- allow: allow access to target.
- deny(STATUS): deny access to target, returns the HTTP response code specified. Valid values for STATUS are 403, 404, and 502.
- rate_based_ban: limit client traffic to the configured threshold and ban the client if the traffic exceeds the threshold. Configure parameters for this action in RateLimitOptions. Requires rateLimitOptions to be set.
- redirect: redirect to a different target. This can either be an internal reCAPTCHA redirect, or an external URL-based redirect via a 302 response. Parameters for this action can be configured via redirectOptions. This action is only supported in Global Security Policies of type CLOUD_ARMOR.
- throttle: limit client traffic to the configured threshold. Configure parameters for this action in rateLimitOptions. Requires rateLimitOptions to be set for this.
*/
  Action?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The Region in which the created Region Security Policy rule should reside.
  Region?: string;

  // If set to true, the specified action is not enforced.
  Preview?: boolean;

  /*
An integer indicating the priority of a rule in the list.
The priority must be a positive value between 0 and 2147483647.
Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest priority.
*/
  Priority?: number;

  // An optional description of this resource. Provide this property when you create the resource.
  Description?: string;

  /*
A match condition that incoming traffic is evaluated against.
If it evaluates to true, the corresponding 'action' is enforced.
Structure is documented below.
*/
  Match?: Compute_RegionSecurityPolicyRuleMatch;

  /*
A match condition that incoming packets are evaluated against for CLOUD_ARMOR_NETWORK security policies. If it matches, the corresponding 'action' is enforced.
The match criteria for a rule consists of built-in match fields (like 'srcIpRanges') and potentially multiple user-defined match fields ('userDefinedFields').
Field values may be extracted directly from the packet or derived from it (e.g. 'srcRegionCodes'). Some fields may not be present in every packet (e.g. 'srcPorts'). A user-defined field is only present if the base header is found in the packet and the entire field is in bounds.
Each match field may specify which values can match it, listing one or more ranges, prefixes, or exact values that are considered a match for the field. A field value must be present in order to match a specified match field. If no match values are specified for a match field, then any field value is considered to match it, and it's not required to be present. For strings specifying '-' is also equivalent to match all.
For a packet to match a rule, all specified match fields must match the corresponding field values derived from the packet.
Example:
networkMatch: srcIpRanges: - "192.0.2.0/24" - "198.51.100.0/24" userDefinedFields: - name: "ipv4_fragment_offset" values: - "1-0x1fff"
The above match condition matches packets with a source IP in 192.0.2.0/24 or 198.51.100.0/24 and a user-defined field named "ipv4_fragment_offset" with a value between 1 and 0x1fff inclusive
Structure is documented below.
*/
  NetworkMatch?: Compute_RegionSecurityPolicyRuleNetworkMatch;
}
export class RegionSecurityPolicyRule extends Resource {
  // The Region in which the created Region Security Policy rule should reside.
  public Region?: string;

  /*
The Action to perform when the rule is matched. The following are the valid actions:
- allow: allow access to target.
- deny(STATUS): deny access to target, returns the HTTP response code specified. Valid values for STATUS are 403, 404, and 502.
- rate_based_ban: limit client traffic to the configured threshold and ban the client if the traffic exceeds the threshold. Configure parameters for this action in RateLimitOptions. Requires rateLimitOptions to be set.
- redirect: redirect to a different target. This can either be an internal reCAPTCHA redirect, or an external URL-based redirect via a 302 response. Parameters for this action can be configured via redirectOptions. This action is only supported in Global Security Policies of type CLOUD_ARMOR.
- throttle: limit client traffic to the configured threshold. Configure parameters for this action in rateLimitOptions. Requires rateLimitOptions to be set for this.
*/
  public Action?: string;

  // An optional description of this resource. Provide this property when you create the resource.
  public Description?: string;

  // If set to true, the specified action is not enforced.
  public Preview?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
A match condition that incoming traffic is evaluated against.
If it evaluates to true, the corresponding 'action' is enforced.
Structure is documented below.
*/
  public Match?: Compute_RegionSecurityPolicyRuleMatch;

  /*
A match condition that incoming packets are evaluated against for CLOUD_ARMOR_NETWORK security policies. If it matches, the corresponding 'action' is enforced.
The match criteria for a rule consists of built-in match fields (like 'srcIpRanges') and potentially multiple user-defined match fields ('userDefinedFields').
Field values may be extracted directly from the packet or derived from it (e.g. 'srcRegionCodes'). Some fields may not be present in every packet (e.g. 'srcPorts'). A user-defined field is only present if the base header is found in the packet and the entire field is in bounds.
Each match field may specify which values can match it, listing one or more ranges, prefixes, or exact values that are considered a match for the field. A field value must be present in order to match a specified match field. If no match values are specified for a match field, then any field value is considered to match it, and it's not required to be present. For strings specifying '-' is also equivalent to match all.
For a packet to match a rule, all specified match fields must match the corresponding field values derived from the packet.
Example:
networkMatch: srcIpRanges: - "192.0.2.0/24" - "198.51.100.0/24" userDefinedFields: - name: "ipv4_fragment_offset" values: - "1-0x1fff"
The above match condition matches packets with a source IP in 192.0.2.0/24 or 198.51.100.0/24 and a user-defined field named "ipv4_fragment_offset" with a value between 1 and 0x1fff inclusive
Structure is documented below.
*/
  public NetworkMatch?: Compute_RegionSecurityPolicyRuleNetworkMatch;

  /*
An integer indicating the priority of a rule in the list.
The priority must be a positive value between 0 and 2147483647.
Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest priority.
*/
  public Priority?: number;

  /*
The name of the security policy this rule belongs to.


- - -
*/
  public SecurityPolicy?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Action",
        "The Action to perform when the rule is matched. The following are the valid actions:\n* allow: allow access to target.\n* deny(STATUS): deny access to target, returns the HTTP response code specified. Valid values for STATUS are 403, 404, and 502.\n* rate_based_ban: limit client traffic to the configured threshold and ban the client if the traffic exceeds the threshold. Configure parameters for this action in RateLimitOptions. Requires rateLimitOptions to be set.\n* redirect: redirect to a different target. This can either be an internal reCAPTCHA redirect, or an external URL-based redirect via a 302 response. Parameters for this action can be configured via redirectOptions. This action is only supported in Global Security Policies of type CLOUD_ARMOR.\n* throttle: limit client traffic to the configured threshold. Configure parameters for this action in rateLimitOptions. Requires rateLimitOptions to be set for this.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "Preview",
        "If set to true, the specified action is not enforced.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource. Provide this property when you create the resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "NetworkMatch",
        "A match condition that incoming packets are evaluated against for CLOUD_ARMOR_NETWORK security policies. If it matches, the corresponding 'action' is enforced.\nThe match criteria for a rule consists of built-in match fields (like 'srcIpRanges') and potentially multiple user-defined match fields ('userDefinedFields').\nField values may be extracted directly from the packet or derived from it (e.g. 'srcRegionCodes'). Some fields may not be present in every packet (e.g. 'srcPorts'). A user-defined field is only present if the base header is found in the packet and the entire field is in bounds.\nEach match field may specify which values can match it, listing one or more ranges, prefixes, or exact values that are considered a match for the field. A field value must be present in order to match a specified match field. If no match values are specified for a match field, then any field value is considered to match it, and it's not required to be present. For strings specifying '*' is also equivalent to match all.\nFor a packet to match a rule, all specified match fields must match the corresponding field values derived from the packet.\nExample:\nnetworkMatch: srcIpRanges: - \"192.0.2.0/24\" - \"198.51.100.0/24\" userDefinedFields: - name: \"ipv4_fragment_offset\" values: - \"1-0x1fff\"\nThe above match condition matches packets with a source IP in 192.0.2.0/24 or 198.51.100.0/24 and a user-defined field named \"ipv4_fragment_offset\" with a value between 1 and 0x1fff inclusive\nStructure is documented below.",
        Compute_RegionSecurityPolicyRuleNetworkMatch_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "SecurityPolicy",
        "The name of the security policy this rule belongs to.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The Region in which the created Region Security Policy rule should reside.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "Priority",
        "An integer indicating the priority of a rule in the list.\nThe priority must be a positive value between 0 and 2147483647.\nRules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest priority.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Match",
        "A match condition that incoming traffic is evaluated against.\nIf it evaluates to true, the corresponding 'action' is enforced.\nStructure is documented below.",
        Compute_RegionSecurityPolicyRuleMatch_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
