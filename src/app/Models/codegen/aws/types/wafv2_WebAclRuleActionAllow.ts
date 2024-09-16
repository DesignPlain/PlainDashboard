import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  wafv2_WebAclRuleActionAllowCustomRequestHandling,
  wafv2_WebAclRuleActionAllowCustomRequestHandling_GetTypes,
} from './wafv2_WebAclRuleActionAllowCustomRequestHandling';

export interface wafv2_WebAclRuleActionAllow {
  // Defines custom handling for the web request. See `custom_request_handling` below for details.
  customRequestHandling?: wafv2_WebAclRuleActionAllowCustomRequestHandling;
}

export function wafv2_WebAclRuleActionAllow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'customRequestHandling',
      'Defines custom handling for the web request. See `custom_request_handling` below for details.',
      () => wafv2_WebAclRuleActionAllowCustomRequestHandling_GetTypes(),
      false,
      false,
    ),
  ];
}
