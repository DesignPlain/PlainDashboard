import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics,
  s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics_GetTypes,
} from "./s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics";

export interface s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel {
  // Prefix-level storage metrics for S3 Storage Lens. See Prefix Level Storage Metrics below for more details.
  storageMetrics?: s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics;
}

export function s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "storageMetrics",
      "Prefix-level storage metrics for S3 Storage Lens. See Prefix Level Storage Metrics below for more details.",
      s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics_GetTypes(),
      true,
      false,
    ),
  ];
}
