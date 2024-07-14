import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface codebuild_ProjectLogsConfigCloudwatchLogs {
  // Group name of the logs in CloudWatch Logs.
  groupName?: string;

  // Current status of logs in S3 for a build project. Valid values: `ENABLED`, `DISABLED`. Defaults to `DISABLED`.
  status?: string;

  // Prefix of the log stream name of the logs in CloudWatch Logs.
  streamName?: string;
}

export function codebuild_ProjectLogsConfigCloudwatchLogs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "streamName",
      "Prefix of the log stream name of the logs in CloudWatch Logs.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "groupName",
      "Group name of the logs in CloudWatch Logs.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "status",
      "Current status of logs in S3 for a build project. Valid values: `ENABLED`, `DISABLED`. Defaults to `DISABLED`.",
      [],
      false,
      false,
    ),
  ];
}
