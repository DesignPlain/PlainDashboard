import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Storage_getBucketWebsite {
  // The custom object to return when a requested resource is not found.
  NotFoundPage?: string;

  // Behaves as the bucket's directory index where missing objects are treated as potential directories.
  MainPageSuffix?: string;
}

export function Storage_getBucketWebsite_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "NotFoundPage",
      "The custom object to return when a requested resource is not found.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MainPageSuffix",
      "Behaves as the bucket's directory index where missing objects are treated as potential directories.",
      [],
      true,
      false,
    ),
  ];
}
