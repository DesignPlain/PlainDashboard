import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  networkfirewall_RuleGroupRuleGroupRulesSourceRulesSourceList,
  networkfirewall_RuleGroupRuleGroupRulesSourceRulesSourceList_GetTypes,
} from './networkfirewall_RuleGroupRuleGroupRulesSourceRulesSourceList';
import {
  networkfirewall_RuleGroupRuleGroupRulesSourceStatefulRule,
  networkfirewall_RuleGroupRuleGroupRulesSourceStatefulRule_GetTypes,
} from './networkfirewall_RuleGroupRuleGroupRulesSourceStatefulRule';
import {
  networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions,
  networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions_GetTypes,
} from './networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions';

export interface networkfirewall_RuleGroupRuleGroupRulesSource {
  // A configuration block containing --stateful-- inspection criteria for a domain list rule group. See Rules Source List below for details.
  rulesSourceList?: networkfirewall_RuleGroupRuleGroupRulesSourceRulesSourceList;

  // The fully qualified name of a file in an S3 bucket that contains Suricata compatible intrusion preventions system (IPS) rules or the Suricata rules as a string. These rules contain --stateful-- inspection criteria and the action to take for traffic that matches the criteria.
  rulesString?: string;

  // Set of configuration blocks containing --stateful-- inspection criteria for 5-tuple rules to be used together in a rule group. See Stateful Rule below for details.
  statefulRules?: Array<networkfirewall_RuleGroupRuleGroupRulesSourceStatefulRule>;

  // A configuration block containing --stateless-- inspection criteria for a stateless rule group. See Stateless Rules and Custom Actions below for details.
  statelessRulesAndCustomActions?: networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions;
}

export function networkfirewall_RuleGroupRuleGroupRulesSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'rulesSourceList',
      'A configuration block containing **stateful** inspection criteria for a domain list rule group. See Rules Source List below for details.',
      () =>
        networkfirewall_RuleGroupRuleGroupRulesSourceRulesSourceList_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'rulesString',
      'The fully qualified name of a file in an S3 bucket that contains Suricata compatible intrusion preventions system (IPS) rules or the Suricata rules as a string. These rules contain **stateful** inspection criteria and the action to take for traffic that matches the criteria.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'statefulRules',
      'Set of configuration blocks containing **stateful** inspection criteria for 5-tuple rules to be used together in a rule group. See Stateful Rule below for details.',
      () =>
        networkfirewall_RuleGroupRuleGroupRulesSourceStatefulRule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'statelessRulesAndCustomActions',
      'A configuration block containing **stateless** inspection criteria for a stateless rule group. See Stateless Rules and Custom Actions below for details.',
      () =>
        networkfirewall_RuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions_GetTypes(),
      false,
      false,
    ),
  ];
}
