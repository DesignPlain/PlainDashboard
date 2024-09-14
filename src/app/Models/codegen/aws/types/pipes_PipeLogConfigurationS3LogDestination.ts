import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface pipes_PipeLogConfigurationS3LogDestination {
  // Name of the Amazon S3 bucket to which EventBridge delivers the log records for the pipe.
  bucketName?: string;

  // Amazon Web Services account that owns the Amazon S3 bucket to which EventBridge delivers the log records for the pipe.
  bucketOwner?: string;

  // EventBridge format for the log records. Valid values `json`, `plain` and `w3c`.
  outputFormat?: string;

  // Prefix text with which to begin Amazon S3 log object names.
  prefix?: string;
}

export function pipes_PipeLogConfigurationS3LogDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "Prefix text with which to begin Amazon S3 log object names.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucketName",
      "Name of the Amazon S3 bucket to which EventBridge delivers the log records for the pipe.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucketOwner",
      "Amazon Web Services account that owns the Amazon S3 bucket to which EventBridge delivers the log records for the pipe.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "outputFormat",
      "EventBridge format for the log records. Valid values `json`, `plain` and `w3c`.",
      () => [],
      false,
      false,
    ),
  ];
}
