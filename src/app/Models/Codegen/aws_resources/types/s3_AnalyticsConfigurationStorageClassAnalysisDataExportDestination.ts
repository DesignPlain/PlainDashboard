import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  s3_AnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination,
  s3_AnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination_GetTypes,
} from "./s3_AnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination";

export interface s3_AnalyticsConfigurationStorageClassAnalysisDataExportDestination {
  /*
Analytics data export currently only supports an S3 bucket destination (documented below).

The `s3_bucket_destination` configuration supports the following:
*/
  s3BucketDestination?: s3_AnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination;
}

export function s3_AnalyticsConfigurationStorageClassAnalysisDataExportDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "s3BucketDestination",
      "Analytics data export currently only supports an S3 bucket destination (documented below).\n\nThe `s3_bucket_destination` configuration supports the following:",
      s3_AnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination_GetTypes(),
      true,
      false,
    ),
  ];
}
