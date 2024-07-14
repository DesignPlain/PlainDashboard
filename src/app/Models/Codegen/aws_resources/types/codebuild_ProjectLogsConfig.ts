import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  codebuild_ProjectLogsConfigCloudwatchLogs,
  codebuild_ProjectLogsConfigCloudwatchLogs_GetTypes,
} from "./codebuild_ProjectLogsConfigCloudwatchLogs";
import {
  codebuild_ProjectLogsConfigS3Logs,
  codebuild_ProjectLogsConfigS3Logs_GetTypes,
} from "./codebuild_ProjectLogsConfigS3Logs";

export interface codebuild_ProjectLogsConfig {
  // Configuration block. Detailed below.
  cloudwatchLogs?: codebuild_ProjectLogsConfigCloudwatchLogs;

  // Configuration block. Detailed below.
  s3Logs?: codebuild_ProjectLogsConfigS3Logs;
}

export function codebuild_ProjectLogsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "cloudwatchLogs",
      "Configuration block. Detailed below.",
      codebuild_ProjectLogsConfigCloudwatchLogs_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3Logs",
      "Configuration block. Detailed below.",
      codebuild_ProjectLogsConfigS3Logs_GetTypes(),
      false,
      false,
    ),
  ];
}
