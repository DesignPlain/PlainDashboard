import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  waf_WebAclLoggingConfigurationRedactedFields,
  waf_WebAclLoggingConfigurationRedactedFields_GetTypes,
} from "./waf_WebAclLoggingConfigurationRedactedFields";

export interface waf_WebAclLoggingConfiguration {
  // Amazon Resource Name (ARN) of Kinesis Firehose Delivery Stream
  logDestination?: string;

  // Configuration block containing parts of the request that you want redacted from the logs. Detailed below.
  redactedFields?: waf_WebAclLoggingConfigurationRedactedFields;
}

export function waf_WebAclLoggingConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "logDestination",
      "Amazon Resource Name (ARN) of Kinesis Firehose Delivery Stream",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "redactedFields",
      "Configuration block containing parts of the request that you want redacted from the logs. Detailed below.",
      waf_WebAclLoggingConfigurationRedactedFields_GetTypes(),
      false,
      false,
    ),
  ];
}
