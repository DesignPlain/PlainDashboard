import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics {
  // Whether the activity metrics are enabled.
  enabled?: boolean;
}

export function s3control_StorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether the activity metrics are enabled.",
      [],
      false,
      false,
    ),
  ];
}
