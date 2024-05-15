import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Notebooks_RuntimeSoftwareConfigKernel {
  /*
The path to the container image repository.
For example: gcr.io/{project_id}/{imageName}
*/
  Repository?: string;

  // The tag of the container image. If not specified, this defaults to the latest tag.
  Tag?: string;
}

export function Notebooks_RuntimeSoftwareConfigKernel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Repository",
      "The path to the container image repository.\nFor example: gcr.io/{project_id}/{imageName}",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Tag",
      "The tag of the container image. If not specified, this defaults to the latest tag.",
      [],
      false,
      false,
    ),
  ];
}
