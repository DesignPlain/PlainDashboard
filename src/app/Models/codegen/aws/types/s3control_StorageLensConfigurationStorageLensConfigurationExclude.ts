import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface s3control_StorageLensConfigurationStorageLensConfigurationExclude {
  // List of S3 bucket ARNs.
  buckets?: Array<string>;

  // List of AWS Regions.
  regions?: Array<string>;
}

export function s3control_StorageLensConfigurationStorageLensConfigurationExclude_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "buckets",
      "List of S3 bucket ARNs.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "regions",
      "List of AWS Regions.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
