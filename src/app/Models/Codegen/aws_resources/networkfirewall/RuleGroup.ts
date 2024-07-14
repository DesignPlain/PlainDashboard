import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  networkfirewall_RuleGroupEncryptionConfiguration,
  networkfirewall_RuleGroupEncryptionConfiguration_GetTypes,
} from "../types/networkfirewall_RuleGroupEncryptionConfiguration";
import {
  networkfirewall_RuleGroupRuleGroup,
  networkfirewall_RuleGroupRuleGroup_GetTypes,
} from "../types/networkfirewall_RuleGroupRuleGroup";

export interface RuleGroupArgs {
  // Whether the rule group is stateless (containing stateless rules) or stateful (containing stateful rules). Valid values include: `STATEFUL` or `STATELESS`.
  type?: string;

  // The maximum number of operating resources that this rule group can use. For a stateless rule group, the capacity required is the sum of the capacity requirements of the individual rules. For a stateful rule group, the minimum capacity required is the number of individual rules.
  capacity?: number;

  // A friendly description of the rule group.
  description?: string;

  // KMS encryption configuration settings. See Encryption Configuration below for details.
  encryptionConfiguration?: networkfirewall_RuleGroupEncryptionConfiguration;

  // A friendly name of the rule group.
  name?: string;

  // A configuration block that defines the rule group rules. Required unless `rules` is specified. See Rule Group below for details.
  ruleGroup?: networkfirewall_RuleGroupRuleGroup;

  // The stateful rule group rules specifications in Suricata file format, with one rule per line. Use this to import your existing Suricata compatible rule groups. Required unless `rule_group` is specified.
  rules?: string;

  // A map of key:value pairs to associate with the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class RuleGroup extends Resource {
  // The stateful rule group rules specifications in Suricata file format, with one rule per line. Use this to import your existing Suricata compatible rule groups. Required unless `rule_group` is specified.
  public rules?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // A string token used when updating the rule group.
  public updateToken?: string;

  // The Amazon Resource Name (ARN) that identifies the rule group.
  public arn?: string;

  // A friendly description of the rule group.
  public description?: string;

  // KMS encryption configuration settings. See Encryption Configuration below for details.
  public encryptionConfiguration?: networkfirewall_RuleGroupEncryptionConfiguration;

  // A map of key:value pairs to associate with the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Whether the rule group is stateless (containing stateless rules) or stateful (containing stateful rules). Valid values include: `STATEFUL` or `STATELESS`.
  public type?: string;

  // The maximum number of operating resources that this rule group can use. For a stateless rule group, the capacity required is the sum of the capacity requirements of the individual rules. For a stateful rule group, the minimum capacity required is the number of individual rules.
  public capacity?: number;

  // A friendly name of the rule group.
  public name?: string;

  // A configuration block that defines the rule group rules. Required unless `rules` is specified. See Rule Group below for details.
  public ruleGroup?: networkfirewall_RuleGroupRuleGroup;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of key:value pairs to associate with the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "Whether the rule group is stateless (containing stateless rules) or stateful (containing stateful rules). Valid values include: `STATEFUL` or `STATELESS`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "capacity",
        "The maximum number of operating resources that this rule group can use. For a stateless rule group, the capacity required is the sum of the capacity requirements of the individual rules. For a stateful rule group, the minimum capacity required is the number of individual rules.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A friendly description of the rule group.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "encryptionConfiguration",
        "KMS encryption configuration settings. See Encryption Configuration below for details.",
        networkfirewall_RuleGroupEncryptionConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A friendly name of the rule group.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ruleGroup",
        "A configuration block that defines the rule group rules. Required unless `rules` is specified. See Rule Group below for details.",
        networkfirewall_RuleGroupRuleGroup_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "rules",
        "The stateful rule group rules specifications in Suricata file format, with one rule per line. Use this to import your existing Suricata compatible rule groups. Required unless `rule_group` is specified.",
        [],
        false,
        false,
      ),
    ];
  }
}
