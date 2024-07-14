import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface imagebuilder_ImageOutputResourceContainer {
  // Set of URIs for created containers.
  imageUris?: Array<string>;

  // Region of the container image.
  region?: string;
}

export function imagebuilder_ImageOutputResourceContainer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "imageUris",
      "Set of URIs for created containers.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "region",
      "Region of the container image.",
      [],
      false,
      false,
    ),
  ];
}
