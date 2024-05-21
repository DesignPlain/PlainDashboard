import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface storage_BucketWebsite {
  /*
The custom object to return when a requested
resource is not found.
*/
  notFoundPage?: string;

  /*
Behaves as the bucket's directory index where
missing objects are treated as potential directories.
*/
  mainPageSuffix?: string;
}

export function storage_BucketWebsite_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "notFoundPage",
      "The custom object to return when a requested\nresource is not found.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mainPageSuffix",
      "Behaves as the bucket's directory index where\nmissing objects are treated as potential directories.",
      [],
      false,
      false,
    ),
  ];
}
