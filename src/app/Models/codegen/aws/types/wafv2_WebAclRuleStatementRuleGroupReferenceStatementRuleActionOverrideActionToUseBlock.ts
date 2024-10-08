import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseBlockCustomResponse,
  wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseBlockCustomResponse_GetTypes,
} from './wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseBlockCustomResponse';

export interface wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseBlock {
  // Defines a custom response for the web request. See `custom_response` below for details.
  customResponse?: wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseBlockCustomResponse;
}

export function wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseBlock_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'customResponse',
      'Defines a custom response for the web request. See `custom_response` below for details.',
      () =>
        wafv2_WebAclRuleStatementRuleGroupReferenceStatementRuleActionOverrideActionToUseBlockCustomResponse_GetTypes(),
      false,
      false,
    ),
  ];
}
