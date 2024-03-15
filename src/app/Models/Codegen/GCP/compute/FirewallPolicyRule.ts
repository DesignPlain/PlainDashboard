import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { FirewallPolicyRuleMatch } from "../types/FirewallPolicyRuleMatch";

export interface FirewallPolicyRuleArgs {
  // Denotes whether the firewall policy rule is disabled. When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist. If this is unspecified, the firewall policy rule will be enabled.
  Disabled?: boolean;

  // An integer indicating the priority of a rule in the list. The priority must be a positive value between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest prority.
  Priority?: number;

  // A list of network resource URLs to which this rule applies. This field allows you to control which network's VMs get this rule. If this field is left blank, all VMs within the organization will receive the rule.
  TargetResources?: Array<string>;

  // The Action to perform when the client connection triggers the rule. Valid actions are "allow", "deny" and "goto_next".
  Action?: string;

  // The direction in which this rule applies. Possible values: INGRESS, EGRESS
  Direction?: string;

  // Denotes whether to enable logging for a particular rule. If logging is enabled, logs will be exported to the configured export destination in Stackdriver. Logs may be exported to BigQuery or Pub/Sub. Note: you cannot enable logging on "goto_next" rules.
  EnableLogging?: boolean;

  // The firewall policy of the resource.
  FirewallPolicy?: string;

  // A match condition that incoming traffic is evaluated against. If it evaluates to true, the corresponding 'action' is enforced.
  Match?: FirewallPolicyRuleMatch;

  // A list of service accounts indicating the sets of instances that are applied with this rule.
  TargetServiceAccounts?: Array<string>;

  // An optional description for this resource.
  Description?: string;
}
export class FirewallPolicyRule extends Resource {
  // The direction in which this rule applies. Possible values: INGRESS, EGRESS
  public Direction?: string;

  // A match condition that incoming traffic is evaluated against. If it evaluates to true, the corresponding 'action' is enforced.
  public Match?: FirewallPolicyRuleMatch;

  // An integer indicating the priority of a rule in the list. The priority must be a positive value between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest prority.
  public Priority?: number;

  // Calculation of the complexity of a single firewall policy rule.
  public RuleTupleCount?: number;

  // A list of network resource URLs to which this rule applies. This field allows you to control which network's VMs get this rule. If this field is left blank, all VMs within the organization will receive the rule.
  public TargetResources?: Array<string>;

  // A list of service accounts indicating the sets of instances that are applied with this rule.
  public TargetServiceAccounts?: Array<string>;

  // The Action to perform when the client connection triggers the rule. Valid actions are "allow", "deny" and "goto_next".
  public Action?: string;

  // Denotes whether the firewall policy rule is disabled. When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist. If this is unspecified, the firewall policy rule will be enabled.
  public Disabled?: boolean;

  // Denotes whether to enable logging for a particular rule. If logging is enabled, logs will be exported to the configured export destination in Stackdriver. Logs may be exported to BigQuery or Pub/Sub. Note: you cannot enable logging on "goto_next" rules.
  public EnableLogging?: boolean;

  // The firewall policy of the resource.
  public FirewallPolicy?: string;

  // Type of the resource. Always `compute#firewallPolicyRule` for firewall policy rules
  public Kind?: string;

  // An optional description for this resource.
  public Description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Action",
        'The Action to perform when the client connection triggers the rule. Valid actions are "allow", "deny" and "goto_next".',
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "EnableLogging",
        'Denotes whether to enable logging for a particular rule. If logging is enabled, logs will be exported to the configured export destination in Stackdriver. Logs may be exported to BigQuery or Pub/Sub. Note: you cannot enable logging on "goto_next" rules.',
      ),
      new DynamicUIProps(
        InputType.String,
        "FirewallPolicy",
        "The firewall policy of the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Match",
        "A match condition that incoming traffic is evaluated against. If it evaluates to true, the corresponding 'action' is enforced.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "TargetServiceAccounts",
        "A list of service accounts indicating the sets of instances that are applied with this rule.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description for this resource.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "Disabled",
        "Denotes whether the firewall policy rule is disabled. When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist. If this is unspecified, the firewall policy rule will be enabled.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "Priority",
        "An integer indicating the priority of a rule in the list. The priority must be a positive value between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest prority.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "TargetResources",
        "A list of network resource URLs to which this rule applies. This field allows you to control which network's VMs get this rule. If this field is left blank, all VMs within the organization will receive the rule.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Direction",
        "The direction in which this rule applies. Possible values: INGRESS, EGRESS",
      ),
    ];
  }
}
