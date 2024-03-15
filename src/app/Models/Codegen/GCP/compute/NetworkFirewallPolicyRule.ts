import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { NetworkFirewallPolicyRuleTargetSecureTag } from "../types/NetworkFirewallPolicyRuleTargetSecureTag";
import { NetworkFirewallPolicyRuleMatch } from "../types/NetworkFirewallPolicyRuleMatch";

export interface NetworkFirewallPolicyRuleArgs {
  // An integer indicating the priority of a rule in the list. The priority must be a positive value between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest prority.
  Priority?: number;

  // A list of secure tags that controls which instances the firewall rule applies to. If <code>targetSecureTag</code> are specified, then the firewall rule applies only to instances in the VPC network that have one of those EFFECTIVE secure tags, if all the target_secure_tag are in INEFFECTIVE state, then this rule will be ignored. <code>targetSecureTag</code> may not be set at the same time as <code>targetServiceAccounts</code>. If neither <code>targetServiceAccounts</code> nor <code>targetSecureTag</code> are specified, the firewall rule applies to all instances on the specified network. Maximum number of target label tags allowed is 256.
  TargetSecureTags?: Array<NetworkFirewallPolicyRuleTargetSecureTag>;

  // The Action to perform when the client connection triggers the rule. Valid actions are "allow", "deny" and "goto_next".
  Action?: string;

  // The direction in which this rule applies. Possible values: INGRESS, EGRESS
  Direction?: string;

  // Denotes whether the firewall policy rule is disabled. When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist. If this is unspecified, the firewall policy rule will be enabled.
  Disabled?: boolean;

  // The firewall policy of the resource.
  FirewallPolicy?: string;

  // An optional name for the rule. This field is not a unique identifier and can be updated.
  RuleName?: string;

  // A list of service accounts indicating the sets of instances that are applied with this rule.
  TargetServiceAccounts?: Array<string>;

  // An optional description for this resource.
  Description?: string;

  // Denotes whether to enable logging for a particular rule. If logging is enabled, logs will be exported to the configured export destination in Stackdriver. Logs may be exported to BigQuery or Pub/Sub. Note: you cannot enable logging on "goto_next" rules.
  EnableLogging?: boolean;

  // A match condition that incoming traffic is evaluated against. If it evaluates to true, the corresponding 'action' is enforced.
  Match?: NetworkFirewallPolicyRuleMatch;

  // The project for the resource
  Project?: string;
}
export class NetworkFirewallPolicyRule extends Resource {
  // Denotes whether to enable logging for a particular rule. If logging is enabled, logs will be exported to the configured export destination in Stackdriver. Logs may be exported to BigQuery or Pub/Sub. Note: you cannot enable logging on "goto_next" rules.
  public EnableLogging?: boolean;

  // Type of the resource. Always `compute#firewallPolicyRule` for firewall policy rules
  public Kind?: string;

  // A match condition that incoming traffic is evaluated against. If it evaluates to true, the corresponding 'action' is enforced.
  public Match?: NetworkFirewallPolicyRuleMatch;

  // The project for the resource
  public Project?: string;

  // An optional name for the rule. This field is not a unique identifier and can be updated.
  public RuleName?: string;

  // Denotes whether the firewall policy rule is disabled. When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist. If this is unspecified, the firewall policy rule will be enabled.
  public Disabled?: boolean;

  // An optional description for this resource.
  public Description?: string;

  // The direction in which this rule applies. Possible values: INGRESS, EGRESS
  public Direction?: string;

  // An integer indicating the priority of a rule in the list. The priority must be a positive value between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest prority.
  public Priority?: number;

  // Calculation of the complexity of a single firewall policy rule.
  public RuleTupleCount?: number;

  // The Action to perform when the client connection triggers the rule. Valid actions are "allow", "deny" and "goto_next".
  public Action?: string;

  // A list of secure tags that controls which instances the firewall rule applies to. If <code>targetSecureTag</code> are specified, then the firewall rule applies only to instances in the VPC network that have one of those EFFECTIVE secure tags, if all the target_secure_tag are in INEFFECTIVE state, then this rule will be ignored. <code>targetSecureTag</code> may not be set at the same time as <code>targetServiceAccounts</code>. If neither <code>targetServiceAccounts</code> nor <code>targetSecureTag</code> are specified, the firewall rule applies to all instances on the specified network. Maximum number of target label tags allowed is 256.
  public TargetSecureTags?: Array<NetworkFirewallPolicyRuleTargetSecureTag>;

  // A list of service accounts indicating the sets of instances that are applied with this rule.
  public TargetServiceAccounts?: Array<string>;

  // The firewall policy of the resource.
  public FirewallPolicy?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.DropDown,
        "TargetSecureTags",
        "A list of secure tags that controls which instances the firewall rule applies to. If <code>targetSecureTag</code> are specified, then the firewall rule applies only to instances in the VPC network that have one of those EFFECTIVE secure tags, if all the target_secure_tag are in INEFFECTIVE state, then this rule will be ignored. <code>targetSecureTag</code> may not be set at the same time as <code>targetServiceAccounts</code>. If neither <code>targetServiceAccounts</code> nor <code>targetSecureTag</code> are specified, the firewall rule applies to all instances on the specified network. Maximum number of target label tags allowed is 256.",
      ),
      new DynamicUIProps(
        InputType.String,
        "FirewallPolicy",
        "The firewall policy of the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "RuleName",
        "An optional name for the rule. This field is not a unique identifier and can be updated.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description for this resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project for the resource",
      ),
      new DynamicUIProps(
        InputType.Number,
        "Priority",
        "An integer indicating the priority of a rule in the list. The priority must be a positive value between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest prority.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Action",
        'The Action to perform when the client connection triggers the rule. Valid actions are "allow", "deny" and "goto_next".',
      ),
      new DynamicUIProps(
        InputType.String,
        "Direction",
        "The direction in which this rule applies. Possible values: INGRESS, EGRESS",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "Disabled",
        "Denotes whether the firewall policy rule is disabled. When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist. If this is unspecified, the firewall policy rule will be enabled.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "TargetServiceAccounts",
        "A list of service accounts indicating the sets of instances that are applied with this rule.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "EnableLogging",
        'Denotes whether to enable logging for a particular rule. If logging is enabled, logs will be exported to the configured export destination in Stackdriver. Logs may be exported to BigQuery or Pub/Sub. Note: you cannot enable logging on "goto_next" rules.',
      ),
      new DynamicUIProps(
        InputType.String,
        "Match",
        "A match condition that incoming traffic is evaluated against. If it evaluates to true, the corresponding 'action' is enforced.",
      ),
    ];
  }
}
