import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  wafv2_WebAclDefaultActionAllowCustomRequestHandling,
  wafv2_WebAclDefaultActionAllowCustomRequestHandling_GetTypes,
} from './wafv2_WebAclDefaultActionAllowCustomRequestHandling';

export interface wafv2_WebAclDefaultActionAllow {
  // Defines custom handling for the web request. See `custom_request_handling` below for details.
  customRequestHandling?: wafv2_WebAclDefaultActionAllowCustomRequestHandling;
}

export function wafv2_WebAclDefaultActionAllow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'customRequestHandling',
      'Defines custom handling for the web request. See `custom_request_handling` below for details.',
      () => wafv2_WebAclDefaultActionAllowCustomRequestHandling_GetTypes(),
      false,
      false,
    ),
  ];
}
