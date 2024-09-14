import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface backup_ReportPlanReportDeliveryChannel {
  // A list of the format of your reports: CSV, JSON, or both. If not specified, the default format is CSV.
  formats?: Array<string>;

  // The unique name of the S3 bucket that receives your reports.
  s3BucketName?: string;

  // The prefix for where Backup Audit Manager delivers your reports to Amazon S3. The prefix is this part of the following path: s3://your-bucket-name/prefix/Backup/us-west-2/year/month/day/report-name. If not specified, there is no prefix.
  s3KeyPrefix?: string;
}

export function backup_ReportPlanReportDeliveryChannel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "s3BucketName",
      "The unique name of the S3 bucket that receives your reports.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3KeyPrefix",
      "The prefix for where Backup Audit Manager delivers your reports to Amazon S3. The prefix is this part of the following path: s3://your-bucket-name/prefix/Backup/us-west-2/year/month/day/report-name. If not specified, there is no prefix.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "formats",
      "A list of the format of your reports: CSV, JSON, or both. If not specified, the default format is CSV.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
