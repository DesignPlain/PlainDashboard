import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface backup_getReportPlanReportDeliveryChannel {
  // List of the format of your reports: CSV, JSON, or both.
  formats?: Array<string>;

  // Unique name of the S3 bucket that receives your reports.
  s3BucketName?: string;

  // Prefix for where Backup Audit Manager delivers your reports to Amazon S3. The prefix is this part of the following path: s3://your-bucket-name/prefix/Backup/us-west-2/year/month/day/report-name.
  s3KeyPrefix?: string;
}

export function backup_getReportPlanReportDeliveryChannel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "s3BucketName",
      "Unique name of the S3 bucket that receives your reports.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3KeyPrefix",
      "Prefix for where Backup Audit Manager delivers your reports to Amazon S3. The prefix is this part of the following path: s3://your-bucket-name/prefix/Backup/us-west-2/year/month/day/report-name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "formats",
      "List of the format of your reports: CSV, JSON, or both.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
