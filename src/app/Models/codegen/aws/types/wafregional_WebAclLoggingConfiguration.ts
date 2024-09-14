import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  wafregional_WebAclLoggingConfigurationRedactedFields,
  wafregional_WebAclLoggingConfigurationRedactedFields_GetTypes,
} from "./wafregional_WebAclLoggingConfigurationRedactedFields";

export interface wafregional_WebAclLoggingConfiguration {
  // Configuration block containing parts of the request that you want redacted from the logs. Detailed below.
  redactedFields?: wafregional_WebAclLoggingConfigurationRedactedFields;

  // Amazon Resource Name (ARN) of Kinesis Firehose Delivery Stream
  logDestination?: string;
}

export function wafregional_WebAclLoggingConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "redactedFields",
      "Configuration block containing parts of the request that you want redacted from the logs. Detailed below.",
      () => wafregional_WebAclLoggingConfigurationRedactedFields_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logDestination",
      "Amazon Resource Name (ARN) of Kinesis Firehose Delivery Stream",
      () => [],
      true,
      false,
    ),
  ];
}
