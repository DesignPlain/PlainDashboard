import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_OrganizationSecurityPolicyRuleMatch,
  Compute_OrganizationSecurityPolicyRuleMatch_GetTypes,
} from "../types/Compute_OrganizationSecurityPolicyRuleMatch";

export interface OrganizationSecurityPolicyRuleArgs {
  // If set to true, the specified action is not enforced.
  Preview?: boolean;

  /*
A list of service accounts indicating the sets of
instances that are applied with this rule.
*/
  TargetServiceAccounts?: Array<string>;

  /*
The Action to perform when the client connection triggers the rule. Can currently be either
"allow", "deny" or "goto_next".
*/
  Action?: string;

  /*
The direction in which this rule applies. If unspecified an INGRESS rule is created.
Possible values are: `INGRESS`, `EGRESS`.
*/
  Direction?: string;

  /*
A match condition that incoming traffic is evaluated against. If it evaluates to true, the corresponding 'action' is enforced.
Structure is documented below.
*/
  Match?: Compute_OrganizationSecurityPolicyRuleMatch;

  // The ID of the OrganizationSecurityPolicy this rule applies to.
  PolicyId?: string;

  /*
An integer indicating the priority of a rule in the list. The priority must be a value
between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the
highest priority and 2147483647 is the lowest prority.
*/
  Priority?: number;

  /*
A list of network resource URLs to which this rule applies.
This field allows you to control which network's VMs get
this rule. If this field is left blank, all VMs
within the organization will receive the rule.
*/
  TargetResources?: Array<string>;

  // A description of the rule.
  Description?: string;

  /*
Denotes whether to enable logging for a particular rule.
If logging is enabled, logs will be exported to the
configured export destination in Stackdriver.
*/
  EnableLogging?: boolean;
}
export class OrganizationSecurityPolicyRule extends Resource {
  /*
A match condition that incoming traffic is evaluated against. If it evaluates to true, the corresponding 'action' is enforced.
Structure is documented below.
*/
  public Match?: Compute_OrganizationSecurityPolicyRuleMatch;

  // The ID of the OrganizationSecurityPolicy this rule applies to.
  public PolicyId?: string;

  /*
An integer indicating the priority of a rule in the list. The priority must be a value
between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the
highest priority and 2147483647 is the lowest prority.
*/
  public Priority?: number;

  /*
A list of network resource URLs to which this rule applies.
This field allows you to control which network's VMs get
this rule. If this field is left blank, all VMs
within the organization will receive the rule.
*/
  public TargetResources?: Array<string>;

  /*
A list of service accounts indicating the sets of
instances that are applied with this rule.
*/
  public TargetServiceAccounts?: Array<string>;

  /*
The direction in which this rule applies. If unspecified an INGRESS rule is created.
Possible values are: `INGRESS`, `EGRESS`.
*/
  public Direction?: string;

  /*
Denotes whether to enable logging for a particular rule.
If logging is enabled, logs will be exported to the
configured export destination in Stackdriver.
*/
  public EnableLogging?: boolean;

  // If set to true, the specified action is not enforced.
  public Preview?: boolean;

  /*
The Action to perform when the client connection triggers the rule. Can currently be either
"allow", "deny" or "goto_next".
*/
  public Action?: string;

  // A description of the rule.
  public Description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "Priority",
        "An integer indicating the priority of a rule in the list. The priority must be a value\nbetween 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the\nhighest priority and 2147483647 is the lowest prority.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "EnableLogging",
        "Denotes whether to enable logging for a particular rule.\nIf logging is enabled, logs will be exported to the\nconfigured export destination in Stackdriver.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "TargetServiceAccounts",
        "A list of service accounts indicating the sets of\ninstances that are applied with this rule.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Action",
        'The Action to perform when the client connection triggers the rule. Can currently be either\n"allow", "deny" or "goto_next".',
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Direction",
        "The direction in which this rule applies. If unspecified an INGRESS rule is created.\nPossible values are: `INGRESS`, `EGRESS`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Match",
        "A match condition that incoming traffic is evaluated against. If it evaluates to true, the corresponding 'action' is enforced.\nStructure is documented below.",
        Compute_OrganizationSecurityPolicyRuleMatch_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "PolicyId",
        "The ID of the OrganizationSecurityPolicy this rule applies to.",
        [],
        true,
        true,
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
        InputType.Array,
        "TargetResources",
        "A list of network resource URLs to which this rule applies.\nThis field allows you to control which network's VMs get\nthis rule. If this field is left blank, all VMs\nwithin the organization will receive the rule.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A description of the rule.",
        [],
        false,
        false,
      ),
    ];
  }
}
