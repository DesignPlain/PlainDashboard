import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  datasync_TaskTaskReportConfigReportOverrides,
  datasync_TaskTaskReportConfigReportOverrides_GetTypes,
} from "./datasync_TaskTaskReportConfigReportOverrides";
import {
  datasync_TaskTaskReportConfigS3Destination,
  datasync_TaskTaskReportConfigS3Destination_GetTypes,
} from "./datasync_TaskTaskReportConfigS3Destination";

export interface datasync_TaskTaskReportConfig {
  // Specifies whether your task report includes the new version of each object transferred into an S3 bucket. This only applies if you enable versioning on your bucket. Keep in mind that setting this to INCLUDE can increase the duration of your task execution. Valid values: `INCLUDE` and `NONE`.
  s3ObjectVersioning?: string;

  // Specifies the type of task report you'd like. Valid values: `SUMMARY_ONLY` and `STANDARD`.
  outputType?: string;

  // Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't. Valid values: `ERRORS_ONLY` and `SUCCESSES_AND_ERRORS`.
  reportLevel?: string;

  // Configuration block containing the configuration of the reporting level for aspects of your task report. See `report_overrides` below.
  reportOverrides?: datasync_TaskTaskReportConfigReportOverrides;

  // Configuration block containing the configuration for the Amazon S3 bucket where DataSync uploads your task report. See `s3_destination` below.
  s3Destination?: datasync_TaskTaskReportConfigS3Destination;
}

export function datasync_TaskTaskReportConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "s3ObjectVersioning",
      "Specifies whether your task report includes the new version of each object transferred into an S3 bucket. This only applies if you enable versioning on your bucket. Keep in mind that setting this to INCLUDE can increase the duration of your task execution. Valid values: `INCLUDE` and `NONE`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "outputType",
      "Specifies the type of task report you'd like. Valid values: `SUMMARY_ONLY` and `STANDARD`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "reportLevel",
      "Specifies whether you want your task report to include only what went wrong with your transfer or a list of what succeeded and didn't. Valid values: `ERRORS_ONLY` and `SUCCESSES_AND_ERRORS`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "reportOverrides",
      "Configuration block containing the configuration of the reporting level for aspects of your task report. See `report_overrides` below.",
      datasync_TaskTaskReportConfigReportOverrides_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3Destination",
      "Configuration block containing the configuration for the Amazon S3 bucket where DataSync uploads your task report. See `s3_destination` below.",
      datasync_TaskTaskReportConfigS3Destination_GetTypes(),
      true,
      false,
    ),
  ];
}
