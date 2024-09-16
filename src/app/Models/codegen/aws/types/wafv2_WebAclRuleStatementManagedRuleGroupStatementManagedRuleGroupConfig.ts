import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigPasswordField,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigPasswordField_GetTypes,
} from './wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigPasswordField';
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigUsernameField,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigUsernameField_GetTypes,
} from './wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigUsernameField';
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSet,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSet_GetTypes,
} from './wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSet';
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSet,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSet_GetTypes,
} from './wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSet';
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesBotControlRuleSet,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesBotControlRuleSet_GetTypes,
} from './wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesBotControlRuleSet';

export interface wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfig {
  // Details about your login page password field. See `password_field` for more details.
  passwordField?: wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigPasswordField;

  // The payload type for your login endpoint, either JSON or form encoded.
  payloadType?: string;

  // Details about your login page username field. See `username_field` for more details.
  usernameField?: wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigUsernameField;

  // Additional configuration for using the Account Creation Fraud Prevention managed rule group. Use this to specify information such as the registration page of your application and the type of content to accept or reject from the client.
  awsManagedRulesAcfpRuleSet?: wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSet;

  // Additional configuration for using the Account Takeover Protection managed rule group. Use this to specify information such as the sign-in page of your application and the type of content to accept or reject from the client.
  awsManagedRulesAtpRuleSet?: wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSet;

  // Additional configuration for using the Bot Control managed rule group. Use this to specify the inspection level that you want to use. See `aws_managed_rules_bot_control_rule_set` for more details
  awsManagedRulesBotControlRuleSet?: wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesBotControlRuleSet;

  // The path of the login endpoint for your application.
  loginPath?: string;
}

export function wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'awsManagedRulesAtpRuleSet',
      'Additional configuration for using the Account Takeover Protection managed rule group. Use this to specify information such as the sign-in page of your application and the type of content to accept or reject from the client.',
      () =>
        wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSet_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'awsManagedRulesBotControlRuleSet',
      'Additional configuration for using the Bot Control managed rule group. Use this to specify the inspection level that you want to use. See `aws_managed_rules_bot_control_rule_set` for more details',
      () =>
        wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesBotControlRuleSet_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'loginPath',
      'The path of the login endpoint for your application.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'passwordField',
      'Details about your login page password field. See `password_field` for more details.',
      () =>
        wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigPasswordField_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'payloadType',
      'The payload type for your login endpoint, either JSON or form encoded.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'usernameField',
      'Details about your login page username field. See `username_field` for more details.',
      () =>
        wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigUsernameField_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'awsManagedRulesAcfpRuleSet',
      'Additional configuration for using the Account Creation Fraud Prevention managed rule group. Use this to specify information such as the registration page of your application and the type of content to accept or reject from the client.',
      () =>
        wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAcfpRuleSet_GetTypes(),
      false,
      false,
    ),
  ];
}
