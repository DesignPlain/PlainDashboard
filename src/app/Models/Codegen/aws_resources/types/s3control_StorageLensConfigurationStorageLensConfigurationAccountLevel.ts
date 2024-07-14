import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics,
  s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics_GetTypes,
} from "./s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics";
import {
  s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics,
  s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics_GetTypes,
} from "./s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics";
import {
  s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics,
  s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics_GetTypes,
} from "./s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics";
import {
  s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel,
  s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel_GetTypes,
} from "./s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel";
import {
  s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetrics,
  s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetrics_GetTypes,
} from "./s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetrics";

export interface s3control_StorageLensConfigurationStorageLensConfigurationAccountLevel {
  // S3 Storage Lens activity metrics. See Activity Metrics below for more details.
  activityMetrics?: s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics;

  // Advanced cost-optimization metrics for S3 Storage Lens. See Advanced Cost-Optimization Metrics below for more details.
  advancedCostOptimizationMetrics?: s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics;

  // Advanced data-protection metrics for S3 Storage Lens. See Advanced Data-Protection Metrics below for more details.
  advancedDataProtectionMetrics?: s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics;

  // S3 Storage Lens bucket-level configuration. See Bucket Level below for more details.
  bucketLevel?: s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel;

  // Detailed status code metrics for S3 Storage Lens. See Detailed Status Code Metrics below for more details.
  detailedStatusCodeMetrics?: s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetrics;
}

export function s3control_StorageLensConfigurationStorageLensConfigurationAccountLevel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "bucketLevel",
      "S3 Storage Lens bucket-level configuration. See Bucket Level below for more details.",
      s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "detailedStatusCodeMetrics",
      "Detailed status code metrics for S3 Storage Lens. See Detailed Status Code Metrics below for more details.",
      s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetrics_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "activityMetrics",
      "S3 Storage Lens activity metrics. See Activity Metrics below for more details.",
      s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "advancedCostOptimizationMetrics",
      "Advanced cost-optimization metrics for S3 Storage Lens. See Advanced Cost-Optimization Metrics below for more details.",
      s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "advancedDataProtectionMetrics",
      "Advanced data-protection metrics for S3 Storage Lens. See Advanced Data-Protection Metrics below for more details.",
      s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics_GetTypes(),
      false,
      false,
    ),
  ];
}
