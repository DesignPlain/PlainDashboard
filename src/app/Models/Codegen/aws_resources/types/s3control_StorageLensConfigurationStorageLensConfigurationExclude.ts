import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface s3control_StorageLensConfigurationStorageLensConfigurationExclude {
  // List of AWS Regions.
  regions?: Array<string>;

  // List of S3 bucket ARNs.
  buckets?: Array<string>;
}

export function s3control_StorageLensConfigurationStorageLensConfigurationExclude_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "regions",
      "List of AWS Regions.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "buckets",
      "List of S3 bucket ARNs.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
