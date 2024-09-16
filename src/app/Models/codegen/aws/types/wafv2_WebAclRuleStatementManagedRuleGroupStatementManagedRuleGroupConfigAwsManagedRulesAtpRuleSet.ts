import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetRequestInspection,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetRequestInspection_GetTypes,
} from './wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetRequestInspection';
import {
  wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetResponseInspection,
  wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetResponseInspection_GetTypes,
} from './wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetResponseInspection';

export interface wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSet {
  // Whether or not to allow the use of regular expressions in the login page path.
  enableRegexInPath?: boolean;

  // The path of the login endpoint for your application.
  loginPath?: string;

  // The criteria for inspecting login requests, used by the ATP rule group to validate credentials usage. See `request_inspection` for more details.
  requestInspection?: wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetRequestInspection;

  // The criteria for inspecting responses to login requests, used by the ATP rule group to track login failure rates. Note that Response Inspection is available only on web ACLs that protect CloudFront distributions. See `response_inspection` for more details.
  responseInspection?: wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetResponseInspection;
}

export function wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enableRegexInPath',
      'Whether or not to allow the use of regular expressions in the login page path.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'loginPath',
      'The path of the login endpoint for your application.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'requestInspection',
      'The criteria for inspecting login requests, used by the ATP rule group to validate credentials usage. See `request_inspection` for more details.',
      () =>
        wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetRequestInspection_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'responseInspection',
      'The criteria for inspecting responses to login requests, used by the ATP rule group to track login failure rates. Note that Response Inspection is available only on web ACLs that protect CloudFront distributions. See `response_inspection` for more details.',
      () =>
        wafv2_WebAclRuleStatementManagedRuleGroupStatementManagedRuleGroupConfigAwsManagedRulesAtpRuleSetResponseInspection_GetTypes(),
      false,
      false,
    ),
  ];
}
