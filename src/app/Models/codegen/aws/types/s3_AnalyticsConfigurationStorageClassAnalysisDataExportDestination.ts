import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  s3_AnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination,
  s3_AnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination_GetTypes,
} from './s3_AnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination';

export interface s3_AnalyticsConfigurationStorageClassAnalysisDataExportDestination {
  // Analytics data export currently only supports an S3 bucket destination (documented below).
  s3BucketDestination?: s3_AnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination;
}

export function s3_AnalyticsConfigurationStorageClassAnalysisDataExportDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      's3BucketDestination',
      'Analytics data export currently only supports an S3 bucket destination (documented below).',
      () =>
        s3_AnalyticsConfigurationStorageClassAnalysisDataExportDestinationS3BucketDestination_GetTypes(),
      true,
      false,
    ),
  ];
}
