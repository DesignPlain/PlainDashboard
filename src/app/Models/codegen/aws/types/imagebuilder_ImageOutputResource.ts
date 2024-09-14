import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  imagebuilder_ImageOutputResourceAmi,
  imagebuilder_ImageOutputResourceAmi_GetTypes,
} from "./imagebuilder_ImageOutputResourceAmi";
import {
  imagebuilder_ImageOutputResourceContainer,
  imagebuilder_ImageOutputResourceContainer_GetTypes,
} from "./imagebuilder_ImageOutputResourceContainer";

export interface imagebuilder_ImageOutputResource {
  // Set of objects with each Amazon Machine Image (AMI) created.
  amis?: Array<imagebuilder_ImageOutputResourceAmi>;

  // Set of objects with each container image created and stored in the output repository.
  containers?: Array<imagebuilder_ImageOutputResourceContainer>;
}

export function imagebuilder_ImageOutputResource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "amis",
      "Set of objects with each Amazon Machine Image (AMI) created.",
      () => imagebuilder_ImageOutputResourceAmi_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "containers",
      "Set of objects with each container image created and stored in the output repository.",
      () => imagebuilder_ImageOutputResourceContainer_GetTypes(),
      false,
      false,
    ),
  ];
}
