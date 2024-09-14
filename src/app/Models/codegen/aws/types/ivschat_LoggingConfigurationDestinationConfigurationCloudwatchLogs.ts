import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ivschat_LoggingConfigurationDestinationConfigurationCloudwatchLogs {
  // Name of the Amazon Cloudwatch Logs destination where chat activity will be logged.
  logGroupName?: string;
}

export function ivschat_LoggingConfigurationDestinationConfigurationCloudwatchLogs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "logGroupName",
      "Name of the Amazon Cloudwatch Logs destination where chat activity will be logged.",
      () => [],
      true,
      false,
    ),
  ];
}
