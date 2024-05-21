import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_NetworkFirewallPolicyRuleMatch,
  compute_NetworkFirewallPolicyRuleMatch_GetTypes,
} from "../types/compute_NetworkFirewallPolicyRuleMatch";
import {
  compute_NetworkFirewallPolicyRuleTargetSecureTag,
  compute_NetworkFirewallPolicyRuleTargetSecureTag_GetTypes,
} from "../types/compute_NetworkFirewallPolicyRuleTargetSecureTag";

export interface NetworkFirewallPolicyRuleArgs {
  // The project for the resource
  project?: string;

  // A list of secure tags that controls which instances the firewall rule applies to. If <code>targetSecureTag</code> are specified, then the firewall rule applies only to instances in the VPC network that have one of those EFFECTIVE secure tags, if all the target_secure_tag are in INEFFECTIVE state, then this rule will be ignored. <code>targetSecureTag</code> may not be set at the same time as <code>targetServiceAccounts</code>. If neither <code>targetServiceAccounts</code> nor <code>targetSecureTag</code> are specified, the firewall rule applies to all instances on the specified network. Maximum number of target label tags allowed is 256.
  targetSecureTags?: Array<compute_NetworkFirewallPolicyRuleTargetSecureTag>;

  // A list of service accounts indicating the sets of instances that are applied with this rule.
  targetServiceAccounts?: Array<string>;

  // An optional description for this resource.
  description?: string;

  // The direction in which this rule applies. Possible values: INGRESS, EGRESS
  direction?: string;

  // The firewall policy of the resource.
  firewallPolicy?: string;

  // A match condition that incoming traffic is evaluated against. If it evaluates to true, the corresponding 'action' is enforced.
  match?: compute_NetworkFirewallPolicyRuleMatch;

  // An integer indicating the priority of a rule in the list. The priority must be a positive value between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest prority.
  priority?: number;

  // The Action to perform when the client connection triggers the rule. Valid actions are "allow", "deny" and "goto_next".
  action?: string;

  // Denotes whether the firewall policy rule is disabled. When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist. If this is unspecified, the firewall policy rule will be enabled.
  disabled?: boolean;

  // Denotes whether to enable logging for a particular rule. If logging is enabled, logs will be exported to the configured export destination in Stackdriver. Logs may be exported to BigQuery or Pub/Sub. Note: you cannot enable logging on "goto_next" rules.
  enableLogging?: boolean;

  // An optional name for the rule. This field is not a unique identifier and can be updated.
  ruleName?: string;
}
export class NetworkFirewallPolicyRule extends Resource {
  // An optional name for the rule. This field is not a unique identifier and can be updated.
  public ruleName?: string;

  // The direction in which this rule applies. Possible values: INGRESS, EGRESS
  public direction?: string;

  // Denotes whether the firewall policy rule is disabled. When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist. If this is unspecified, the firewall policy rule will be enabled.
  public disabled?: boolean;

  // The firewall policy of the resource.
  public firewallPolicy?: string;

  // Calculation of the complexity of a single firewall policy rule.
  public ruleTupleCount?: number;

  // An optional description for this resource.
  public description?: string;

  // A match condition that incoming traffic is evaluated against. If it evaluates to true, the corresponding 'action' is enforced.
  public match?: compute_NetworkFirewallPolicyRuleMatch;

  // An integer indicating the priority of a rule in the list. The priority must be a positive value between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest prority.
  public priority?: number;

  // The project for the resource
  public project?: string;

  // A list of secure tags that controls which instances the firewall rule applies to. If <code>targetSecureTag</code> are specified, then the firewall rule applies only to instances in the VPC network that have one of those EFFECTIVE secure tags, if all the target_secure_tag are in INEFFECTIVE state, then this rule will be ignored. <code>targetSecureTag</code> may not be set at the same time as <code>targetServiceAccounts</code>. If neither <code>targetServiceAccounts</code> nor <code>targetSecureTag</code> are specified, the firewall rule applies to all instances on the specified network. Maximum number of target label tags allowed is 256.
  public targetSecureTags?: Array<compute_NetworkFirewallPolicyRuleTargetSecureTag>;

  // The Action to perform when the client connection triggers the rule. Valid actions are "allow", "deny" and "goto_next".
  public action?: string;

  // Denotes whether to enable logging for a particular rule. If logging is enabled, logs will be exported to the configured export destination in Stackdriver. Logs may be exported to BigQuery or Pub/Sub. Note: you cannot enable logging on "goto_next" rules.
  public enableLogging?: boolean;

  // Type of the resource. Always `compute#firewallPolicyRule` for firewall policy rules
  public kind?: string;

  // A list of service accounts indicating the sets of instances that are applied with this rule.
  public targetServiceAccounts?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "targetSecureTags",
        "A list of secure tags that controls which instances the firewall rule applies to. If <code>targetSecureTag</code> are specified, then the firewall rule applies only to instances in the VPC network that have one of those EFFECTIVE secure tags, if all the target_secure_tag are in INEFFECTIVE state, then this rule will be ignored. <code>targetSecureTag</code> may not be set at the same time as <code>targetServiceAccounts</code>. If neither <code>targetServiceAccounts</code> nor <code>targetSecureTag</code> are specified, the firewall rule applies to all instances on the specified network. Maximum number of target label tags allowed is 256.",
        compute_NetworkFirewallPolicyRuleTargetSecureTag_GetTypes(),
        false,
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
        InputType.String,
        "direction",
        "The direction in which this rule applies. Possible values: INGRESS, EGRESS",
        [],
        true,
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
        InputType.Object,
        "match",
        "A match condition that incoming traffic is evaluated against. If it evaluates to true, the corresponding 'action' is enforced.",
        compute_NetworkFirewallPolicyRuleMatch_GetTypes(),
        true,
        false,
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
        "enableLogging",
        'Denotes whether to enable logging for a particular rule. If logging is enabled, logs will be exported to the configured export destination in Stackdriver. Logs may be exported to BigQuery or Pub/Sub. Note: you cannot enable logging on "goto_next" rules.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The project for the resource",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ruleName",
        "An optional name for the rule. This field is not a unique identifier and can be updated.",
        [],
        false,
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
        InputType.Bool,
        "disabled",
        "Denotes whether the firewall policy rule is disabled. When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist. If this is unspecified, the firewall policy rule will be enabled.",
        [],
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
    ];
  }
}
