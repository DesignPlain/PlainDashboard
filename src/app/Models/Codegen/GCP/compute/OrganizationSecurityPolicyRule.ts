import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { OrganizationSecurityPolicyRuleMatch } from "../types/OrganizationSecurityPolicyRuleMatch";

export interface OrganizationSecurityPolicyRuleArgs {
  // A description of the rule.
  Description?: string;

  // The ID of the OrganizationSecurityPolicy this rule applies to.
  PolicyId?: string;

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
Denotes whether to enable logging for a particular rule.
If logging is enabled, logs will be exported to the
configured export destination in Stackdriver.
*/
  EnableLogging?: boolean;

  /*
A match condition that incoming traffic is evaluated against. If it evaluates to true, the corresponding 'action' is enforced.
Structure is documented below.
*/
  Match?: OrganizationSecurityPolicyRuleMatch;

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
}
export class OrganizationSecurityPolicyRule extends Resource {
  // A description of the rule.
  public Description?: string;

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

  /*
A match condition that incoming traffic is evaluated against. If it evaluates to true, the corresponding 'action' is enforced.
Structure is documented below.
*/
  public Match?: OrganizationSecurityPolicyRuleMatch;

  /*
An integer indicating the priority of a rule in the list. The priority must be a value
between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the
highest priority and 2147483647 is the lowest prority.
*/
  public Priority?: number;

  /*
The Action to perform when the client connection triggers the rule. Can currently be either
"allow", "deny" or "goto_next".
*/
  public Action?: string;

  // The ID of the OrganizationSecurityPolicy this rule applies to.
  public PolicyId?: string;

  // If set to true, the specified action is not enforced.
  public Preview?: boolean;

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

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Action",
        'The Action to perform when the client connection triggers the rule. Can currently be either\n"allow", "deny" or "goto_next".',
      ),
      new DynamicUIProps(
        InputType.String,
        "Match",
        "A match condition that incoming traffic is evaluated against. If it evaluates to true, the corresponding 'action' is enforced.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "Preview",
        "If set to true, the specified action is not enforced.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PolicyId",
        "The ID of the OrganizationSecurityPolicy this rule applies to.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "TargetServiceAccounts",
        "A list of service accounts indicating the sets of\ninstances that are applied with this rule.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Direction",
        "The direction in which this rule applies. If unspecified an INGRESS rule is created.\nPossible values are: `INGRESS`, `EGRESS`.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "EnableLogging",
        "Denotes whether to enable logging for a particular rule.\nIf logging is enabled, logs will be exported to the\nconfigured export destination in Stackdriver.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "Priority",
        "An integer indicating the priority of a rule in the list. The priority must be a value\nbetween 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the\nhighest priority and 2147483647 is the lowest prority.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "TargetResources",
        "A list of network resource URLs to which this rule applies.\nThis field allows you to control which network's VMs get\nthis rule. If this field is left blank, all VMs\nwithin the organization will receive the rule.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A description of the rule.",
      ),
    ];
  }
}
