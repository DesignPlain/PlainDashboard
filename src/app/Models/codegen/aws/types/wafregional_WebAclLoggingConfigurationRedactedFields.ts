import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  wafregional_WebAclLoggingConfigurationRedactedFieldsFieldToMatch,
  wafregional_WebAclLoggingConfigurationRedactedFieldsFieldToMatch_GetTypes,
} from './wafregional_WebAclLoggingConfigurationRedactedFieldsFieldToMatch';

export interface wafregional_WebAclLoggingConfigurationRedactedFields {
  // Set of configuration blocks for fields to redact. Detailed below.
  fieldToMatches?: Array<wafregional_WebAclLoggingConfigurationRedactedFieldsFieldToMatch>;
}

export function wafregional_WebAclLoggingConfigurationRedactedFields_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'fieldToMatches',
      'Set of configuration blocks for fields to redact. Detailed below.',
      () =>
        wafregional_WebAclLoggingConfigurationRedactedFieldsFieldToMatch_GetTypes(),
      true,
      false,
    ),
  ];
}
