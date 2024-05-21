import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_FirewallPolicyRuleMatch,
  compute_FirewallPolicyRuleMatch_GetTypes,
} from "../types/compute_FirewallPolicyRuleMatch";

export interface FirewallPolicyRuleArgs {
  // The direction in which this rule applies. Possible values: INGRESS, EGRESS
  direction?: string;

  // Denotes whether the firewall policy rule is disabled. When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist. If this is unspecified, the firewall policy rule will be enabled.
  disabled?: boolean;

  // Denotes whether to enable logging for a particular rule. If logging is enabled, logs will be exported to the configured export destination in Stackdriver. Logs may be exported to BigQuery or Pub/Sub. Note: you cannot enable logging on "goto_next" rules.
  enableLogging?: boolean;

  // The firewall policy of the resource.
  firewallPolicy?: string;

  // A match condition that incoming traffic is evaluated against. If it evaluates to true, the corresponding 'action' is enforced.
  match?: compute_FirewallPolicyRuleMatch;

  // The Action to perform when the client connection triggers the rule. Valid actions are "allow", "deny" and "goto_next".
  action?: string;

  // An optional description for this resource.
  description?: string;

  // An integer indicating the priority of a rule in the list. The priority must be a positive value between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest prority.
  priority?: number;

  // A list of network resource URLs to which this rule applies. This field allows you to control which network's VMs get this rule. If this field is left blank, all VMs within the organization will receive the rule.
  targetResources?: Array<string>;

  // A list of service accounts indicating the sets of instances that are applied with this rule.
  targetServiceAccounts?: Array<string>;
}
export class FirewallPolicyRule extends Resource {
  // The direction in which this rule applies. Possible values: INGRESS, EGRESS
  public direction?: string;

  // Denotes whether the firewall policy rule is disabled. When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist. If this is unspecified, the firewall policy rule will be enabled.
  public disabled?: boolean;

  // Denotes whether to enable logging for a particular rule. If logging is enabled, logs will be exported to the configured export destination in Stackdriver. Logs may be exported to BigQuery or Pub/Sub. Note: you cannot enable logging on "goto_next" rules.
  public enableLogging?: boolean;

  // A list of network resource URLs to which this rule applies. This field allows you to control which network's VMs get this rule. If this field is left blank, all VMs within the organization will receive the rule.
  public targetResources?: Array<string>;

  // An optional description for this resource.
  public description?: string;

  // The firewall policy of the resource.
  public firewallPolicy?: string;

  // Type of the resource. Always `compute#firewallPolicyRule` for firewall policy rules
  public kind?: string;

  // A match condition that incoming traffic is evaluated against. If it evaluates to true, the corresponding 'action' is enforced.
  public match?: compute_FirewallPolicyRuleMatch;

  // An integer indicating the priority of a rule in the list. The priority must be a positive value between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest prority.
  public priority?: number;

  // Calculation of the complexity of a single firewall policy rule.
  public ruleTupleCount?: number;

  // A list of service accounts indicating the sets of instances that are applied with this rule.
  public targetServiceAccounts?: Array<string>;

  // The Action to perform when the client connection triggers the rule. Valid actions are "allow", "deny" and "goto_next".
  public action?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "match",
        "A match condition that incoming traffic is evaluated against. If it evaluates to true, the corresponding 'action' is enforced.",
        compute_FirewallPolicyRuleMatch_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "action",
        'The Action to perform when the client connection triggers the rule. Valid actions are "allow", "deny" and "goto_next".',
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description for this resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "targetResources",
        "A list of network resource URLs to which this rule applies. This field allows you to control which network's VMs get this rule. If this field is left blank, all VMs within the organization will receive the rule.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "targetServiceAccounts",
        "A list of service accounts indicating the sets of instances that are applied with this rule.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "direction",
        "The direction in which this rule applies. Possible values: INGRESS, EGRESS",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableLogging",
        'Denotes whether to enable logging for a particular rule. If logging is enabled, logs will be exported to the configured export destination in Stackdriver. Logs may be exported to BigQuery or Pub/Sub. Note: you cannot enable logging on "goto_next" rules.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "firewallPolicy",
        "The firewall policy of the resource.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "priority",
        "An integer indicating the priority of a rule in the list. The priority must be a positive value between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest prority.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "disabled",
        "Denotes whether the firewall policy rule is disabled. When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist. If this is unspecified, the firewall policy rule will be enabled.",
        [],
        false,
        false,
      ),
    ];
  }
}
