import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface imagebuilder_getImageOutputResourceContainer {
  // Set of URIs for created containers.
  imageUris?: Array<string>;

  // Region of the container image.
  region?: string;
}

export function imagebuilder_getImageOutputResourceContainer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "imageUris",
      "Set of URIs for created containers.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "region",
      "Region of the container image.",
      () => [],
      true,
      false,
    ),
  ];
}
