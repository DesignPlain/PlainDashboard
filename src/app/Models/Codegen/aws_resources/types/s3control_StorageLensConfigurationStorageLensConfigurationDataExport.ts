import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  s3control_StorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetrics,
  s3control_StorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetrics_GetTypes,
} from "./s3control_StorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetrics";
import {
  s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination,
  s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination_GetTypes,
} from "./s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination";

export interface s3control_StorageLensConfigurationStorageLensConfigurationDataExport {
  // Amazon CloudWatch publishing for S3 Storage Lens metrics. See Cloud Watch Metrics below for more details.
  cloudWatchMetrics?: s3control_StorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetrics;

  // The bucket where the S3 Storage Lens metrics export will be located. See S3 Bucket Destination below for more details.
  s3BucketDestination?: s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination;
}

export function s3control_StorageLensConfigurationStorageLensConfigurationDataExport_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "cloudWatchMetrics",
      "Amazon CloudWatch publishing for S3 Storage Lens metrics. See Cloud Watch Metrics below for more details.",
      s3control_StorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetrics_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3BucketDestination",
      "The bucket where the S3 Storage Lens metrics export will be located. See S3 Bucket Destination below for more details.",
      s3control_StorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination_GetTypes(),
      false,
      false,
    ),
  ];
}
