import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  codebuild_ReportGroupExportConfigS3Destination,
  codebuild_ReportGroupExportConfigS3Destination_GetTypes,
} from "./codebuild_ReportGroupExportConfigS3Destination";

export interface codebuild_ReportGroupExportConfig {
  // contains information about the S3 bucket where the run of a report is exported. see S3 Destination documented below.
  s3Destination?: codebuild_ReportGroupExportConfigS3Destination;

  // The export configuration type. Valid values are `S3` and `NO_EXPORT`.
  type?: string;
}

export function codebuild_ReportGroupExportConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "s3Destination",
      "contains information about the S3 bucket where the run of a report is exported. see S3 Destination documented below.",
      () => codebuild_ReportGroupExportConfigS3Destination_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The export configuration type. Valid values are `S3` and `NO_EXPORT`.",
      () => [],
      true,
      false,
    ),
  ];
}
