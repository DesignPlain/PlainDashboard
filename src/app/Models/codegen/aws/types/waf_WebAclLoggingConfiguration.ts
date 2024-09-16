import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  waf_WebAclLoggingConfigurationRedactedFields,
  waf_WebAclLoggingConfigurationRedactedFields_GetTypes,
} from './waf_WebAclLoggingConfigurationRedactedFields';

export interface waf_WebAclLoggingConfiguration {
  // Configuration block containing parts of the request that you want redacted from the logs. Detailed below.
  redactedFields?: waf_WebAclLoggingConfigurationRedactedFields;

  // Amazon Resource Name (ARN) of Kinesis Firehose Delivery Stream
  logDestination?: string;
}

export function waf_WebAclLoggingConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'redactedFields',
      'Configuration block containing parts of the request that you want redacted from the logs. Detailed below.',
      () => waf_WebAclLoggingConfigurationRedactedFields_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'logDestination',
      'Amazon Resource Name (ARN) of Kinesis Firehose Delivery Stream',
      () => [],
      true,
      false,
    ),
  ];
}
