import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria {
  // The delimiter of the selection criteria being used.
  delimiter?: string;

  // The max depth of the selection criteria.
  maxDepth?: number;

  // The minimum number of storage bytes percentage whose metrics will be selected.
  minStorageBytesPercentage?: number;
}

export function s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "delimiter",
      "The delimiter of the selection criteria being used.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxDepth",
      "The max depth of the selection criteria.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minStorageBytesPercentage",
      "The minimum number of storage bytes percentage whose metrics will be selected.",
      () => [],
      false,
      false,
    ),
  ];
}
