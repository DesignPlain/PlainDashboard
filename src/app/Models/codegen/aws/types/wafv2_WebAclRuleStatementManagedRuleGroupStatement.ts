import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfig,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfig_GetTypes,
} from './wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfig';
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverride,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverride_GetTypes,
} from './wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverride';
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatement,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatement_GetTypes,
} from './wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatement';

export interface wafv2_WebAclRuleStatementManagedRuleGroupStatement {
  // Name of the managed rule group vendor.
  vendorName?: string;

  // Version of the managed rule group. You can set `Version_1.0` or `Version_1.1` etc. If you want to use the default version, do not set anything.
  version?: string;

  // Additional information that's used by a managed rule group. Only one rule attribute is allowed in each config. See `managed_rule_group_configs` for more details
  managedRuleGroupConfigs?: Array<wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfig>;

  // Name of the managed rule group.
  name?: string;

  // Action settings to use in the place of the rule actions that are configured inside the rule group. You specify one override for each rule whose action you want to change. See `rule_action_override` below for details.
  ruleActionOverrides?: Array<wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverride>;

  // Narrows the scope of the statement to matching web requests. This can be any nestable statement, and you can nest statements at any level below this scope-down statement. See `statement` above for details.
  scopeDownStatement?: wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatement;
}

export function wafv2_WebAclRuleStatementManagedRuleGroupStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'vendorName',
      'Name of the managed rule group vendor.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'version',
      'Version of the managed rule group. You can set `Version_1.0` or `Version_1.1` etc. If you want to use the default version, do not set anything.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'managedRuleGroupConfigs',
      "Additional information that's used by a managed rule group. Only one rule attribute is allowed in each config. See `managed_rule_group_configs` for more details",
      () =>
        wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the managed rule group.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'ruleActionOverrides',
      'Action settings to use in the place of the rule actions that are configured inside the rule group. You specify one override for each rule whose action you want to change. See `rule_action_override` below for details.',
      () =>
        wafv2_WebAclRuleStatementManagedRuleGroupStatementRuleActionOverride_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'scopeDownStatement',
      'Narrows the scope of the statement to matching web requests. This can be any nestable statement, and you can nest statements at any level below this scope-down statement. See `statement` above for details.',
      () =>
        wafv2_WebAclRuleStatementManagedRuleGroupStatementScopeDownStatement_GetTypes(),
      false,
      false,
    ),
  ];
}
