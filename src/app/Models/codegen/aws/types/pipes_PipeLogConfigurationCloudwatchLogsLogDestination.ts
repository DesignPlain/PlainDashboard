import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface pipes_PipeLogConfigurationCloudwatchLogsLogDestination {
  // Amazon Web Services Resource Name (ARN) for the CloudWatch log group to which EventBridge sends the log records.
  logGroupArn?: string;
}

export function pipes_PipeLogConfigurationCloudwatchLogsLogDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "logGroupArn",
      "Amazon Web Services Resource Name (ARN) for the CloudWatch log group to which EventBridge sends the log records.",
      () => [],
      true,
      false,
    ),
  ];
}
