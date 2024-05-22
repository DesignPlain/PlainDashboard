import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

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
      [],
      true,
      false,
    ),
  ];
}
