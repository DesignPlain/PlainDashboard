import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface notebooks_InstanceVmImage {
  // Use this VM image family to find the image; the newest image in this family will be used.
  imageFamily?: string;

  // Use VM image name to find the image.
  imageName?: string;

  /*
The name of the Google Cloud project that this VM image belongs to.
Format: projects/{project_id}
*/
  project?: string;
}

export function notebooks_InstanceVmImage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "imageFamily",
      "Use this VM image family to find the image; the newest image in this family will be used.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "imageName",
      "Use VM image name to find the image.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "project",
      "The name of the Google Cloud project that this VM image belongs to.\nFormat: projects/{project_id}",
      () => [],
      true,
      true,
    ),
  ];
}
