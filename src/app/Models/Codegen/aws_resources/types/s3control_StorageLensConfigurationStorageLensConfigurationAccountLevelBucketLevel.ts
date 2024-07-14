import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel,
  s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel_GetTypes,
} from "./s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel";
import {
  s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics,
  s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics_GetTypes,
} from "./s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics";
import {
  s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics,
  s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics_GetTypes,
} from "./s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics";
import {
  s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics,
  s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics_GetTypes,
} from "./s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics";
import {
  s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetrics,
  s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetrics_GetTypes,
} from "./s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetrics";

export interface s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel {
  // Advanced cost-optimization metrics for S3 Storage Lens. See Advanced Cost-Optimization Metrics above for more details.
  advancedCostOptimizationMetrics?: s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics;

  // Advanced data-protection metrics for S3 Storage Lens. See Advanced Data-Protection Metrics above for more details.
  advancedDataProtectionMetrics?: s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics;

  // Detailed status code metrics for S3 Storage Lens. See Detailed Status Code Metrics above for more details.
  detailedStatusCodeMetrics?: s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetrics;

  // Prefix-level metrics for S3 Storage Lens. See Prefix Level below for more details.
  prefixLevel?: s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel;

  // S3 Storage Lens activity metrics. See Activity Metrics above for more details.
  activityMetrics?: s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics;
}

export function s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "prefixLevel",
      "Prefix-level metrics for S3 Storage Lens. See Prefix Level below for more details.",
      s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "activityMetrics",
      "S3 Storage Lens activity metrics. See Activity Metrics above for more details.",
      s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "advancedCostOptimizationMetrics",
      "Advanced cost-optimization metrics for S3 Storage Lens. See Advanced Cost-Optimization Metrics above for more details.",
      s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "advancedDataProtectionMetrics",
      "Advanced data-protection metrics for S3 Storage Lens. See Advanced Data-Protection Metrics above for more details.",
      s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "detailedStatusCodeMetrics",
      "Detailed status code metrics for S3 Storage Lens. See Detailed Status Code Metrics above for more details.",
      s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetrics_GetTypes(),
      false,
      false,
    ),
  ];
}
