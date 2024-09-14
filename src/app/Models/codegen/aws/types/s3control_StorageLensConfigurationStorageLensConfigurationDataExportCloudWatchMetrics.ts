import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface s3control_StorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetrics {
  // Whether CloudWatch publishing for S3 Storage Lens metrics is enabled.
  enabled?: boolean;
}

export function s3control_StorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetrics_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether CloudWatch publishing for S3 Storage Lens metrics is enabled.",
      () => [],
      true,
      false,
    ),
  ];
}
