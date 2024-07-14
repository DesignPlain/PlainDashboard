import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface s3_AnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination {
  // Output format of exported analytics data. Allowed values: `CSV`. Default value: `CSV`.
  format?: string;

  // Prefix to append to exported analytics data.
  prefix?: string;

  // Account ID that owns the destination bucket.
  bucketAccountId?: string;

  // ARN of the destination bucket.
  bucketArn?: string;
}

export function s3_AnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucketAccountId",
      "Account ID that owns the destination bucket.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucketArn",
      "ARN of the destination bucket.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "format",
      "Output format of exported analytics data. Allowed values: `CSV`. Default value: `CSV`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "Prefix to append to exported analytics data.",
      [],
      false,
      false,
    ),
  ];
}
