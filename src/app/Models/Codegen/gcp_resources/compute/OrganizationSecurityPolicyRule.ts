import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  compute_OrganizationSecurityPolicyRuleMatch,
  compute_OrganizationSecurityPolicyRuleMatch_GetTypes,
} from "../types/compute_OrganizationSecurityPolicyRuleMatch";

export interface OrganizationSecurityPolicyRuleArgs {
  /*
The direction in which this rule applies. If unspecified an INGRESS rule is created.
Possible values are: `INGRESS`, `EGRESS`.
*/
  direction?: string;

  /*
A match condition that incoming traffic is evaluated against. If it evaluates to true, the corresponding 'action' is enforced.
Structure is documented below.
*/
  match?: compute_OrganizationSecurityPolicyRuleMatch;

  /*
A list of network resource URLs to which this rule applies.
This field allows you to control which network's VMs get
this rule. If this field is left blank, all VMs
within the organization will receive the rule.
*/
  targetResources?: Array<string>;

  /*
A list of service accounts indicating the sets of
instances that are applied with this rule.
*/
  targetServiceAccounts?: Array<string>;

  /*
The Action to perform when the client connection triggers the rule. Can currently be either
"allow", "deny" or "goto_next".
*/
  action?: string;

  // A description of the rule.
  description?: string;

  /*
Denotes whether to enable logging for a particular rule.
If logging is enabled, logs will be exported to the
configured export destination in Stackdriver.
*/
  enableLogging?: boolean;

  // The ID of the OrganizationSecurityPolicy this rule applies to.
  policyId?: string;

  // If set to true, the specified action is not enforced.
  preview?: boolean;

  /*
An integer indicating the priority of a rule in the list. The priority must be a value
between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the
highest priority and 2147483647 is the lowest prority.
*/
  priority?: number;
}
export class OrganizationSecurityPolicyRule extends Resource {
  /*
The Action to perform when the client connection triggers the rule. Can currently be either
"allow", "deny" or "goto_next".
*/
  public action?: string;

  // A description of the rule.
  public description?: string;

  // If set to true, the specified action is not enforced.
  public preview?: boolean;

  /*
A list of network resource URLs to which this rule applies.
This field allows you to control which network's VMs get
this rule. If this field is left blank, all VMs
within the organization will receive the rule.
*/
  public targetResources?: Array<string>;

  /*
A list of service accounts indicating the sets of
instances that are applied with this rule.
*/
  public targetServiceAccounts?: Array<string>;

  /*
The direction in which this rule applies. If unspecified an INGRESS rule is created.
Possible values are: `INGRESS`, `EGRESS`.
*/
  public direction?: string;

  /*
Denotes whether to enable logging for a particular rule.
If logging is enabled, logs will be exported to the
configured export destination in Stackdriver.
*/
  public enableLogging?: boolean;

  /*
A match condition that incoming traffic is evaluated against. If it evaluates to true, the corresponding 'action' is enforced.
Structure is documented below.
*/
  public match?: compute_OrganizationSecurityPolicyRuleMatch;

  // The ID of the OrganizationSecurityPolicy this rule applies to.
  public policyId?: string;

  /*
An integer indicating the priority of a rule in the list. The priority must be a value
between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the
highest priority and 2147483647 is the lowest prority.
*/
  public priority?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "direction",
        "The direction in which this rule applies. If unspecified an INGRESS rule is created.\nPossible values are: `INGRESS`, `EGRESS`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "match",
        "A match condition that incoming traffic is evaluated against. If it evaluates to true, the corresponding 'action' is enforced.\nStructure is documented below.",
        compute_OrganizationSecurityPolicyRuleMatch_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "action",
        'The Action to perform when the client connection triggers the rule. Can currently be either\n"allow", "deny" or "goto_next".',
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description of the rule.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "policyId",
        "The ID of the OrganizationSecurityPolicy this rule applies to.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "targetResources",
        "A list of network resource URLs to which this rule applies.\nThis field allows you to control which network's VMs get\nthis rule. If this field is left blank, all VMs\nwithin the organization will receive the rule.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "targetServiceAccounts",
        "A list of service accounts indicating the sets of\ninstances that are applied with this rule.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableLogging",
        "Denotes whether to enable logging for a particular rule.\nIf logging is enabled, logs will be exported to the\nconfigured export destination in Stackdriver.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "preview",
        "If set to true, the specified action is not enforced.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "priority",
        "An integer indicating the priority of a rule in the list. The priority must be a value\nbetween 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the\nhighest priority and 2147483647 is the lowest prority.",
        [],
        true,
        true,
      ),
    ];
  }
}
