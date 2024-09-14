import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface notebooks_EnvironmentContainerImage {
  /*
The path to the container image repository.
For example: gcr.io/{project_id}/{imageName}
*/
  repository?: string;

  // The tag of the container image. If not specified, this defaults to the latest tag.
  tag?: string;
}

export function notebooks_EnvironmentContainerImage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "repository",
      "The path to the container image repository.\nFor example: gcr.io/{project_id}/{imageName}",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tag",
      "The tag of the container image. If not specified, this defaults to the latest tag.",
      () => [],
      false,
      false,
    ),
  ];
}
