import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  imagebuilder_getImageOutputResourceAmi,
  imagebuilder_getImageOutputResourceAmi_GetTypes,
} from "./imagebuilder_getImageOutputResourceAmi";
import {
  imagebuilder_getImageOutputResourceContainer,
  imagebuilder_getImageOutputResourceContainer_GetTypes,
} from "./imagebuilder_getImageOutputResourceContainer";

export interface imagebuilder_getImageOutputResource {
  // Set of objects with each Amazon Machine Image (AMI) created.
  amis?: Array<imagebuilder_getImageOutputResourceAmi>;

  // Set of objects with each container image created and stored in the output repository.
  containers?: Array<imagebuilder_getImageOutputResourceContainer>;
}

export function imagebuilder_getImageOutputResource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "amis",
      "Set of objects with each Amazon Machine Image (AMI) created.",
      imagebuilder_getImageOutputResourceAmi_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "containers",
      "Set of objects with each container image created and stored in the output repository.",
      imagebuilder_getImageOutputResourceContainer_GetTypes(),
      true,
      false,
    ),
  ];
}
