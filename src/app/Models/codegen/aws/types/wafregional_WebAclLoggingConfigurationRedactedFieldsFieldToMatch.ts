import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface wafregional_WebAclLoggingConfigurationRedactedFieldsFieldToMatch {
  // When the value of `type` is `HEADER`, enter the name of the header that you want the WAF to search, for example, `User-Agent` or `Referer`. If the value of `type` is any other value, omit `data`.
  data?: string;

  // The part of the web request that you want AWS WAF to search for a specified stringE.g., `HEADER` or `METHOD`
  type?: string;
}

export function wafregional_WebAclLoggingConfigurationRedactedFieldsFieldToMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'data',
      'When the value of `type` is `HEADER`, enter the name of the header that you want the WAF to search, for example, `User-Agent` or `Referer`. If the value of `type` is any other value, omit `data`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'The part of the web request that you want AWS WAF to search for a specified stringE.g., `HEADER` or `METHOD`',
      () => [],
      true,
      false,
    ),
  ];
}
