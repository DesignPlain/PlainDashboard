import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Notebooks_EnvironmentVmImage {
  // Use this VM image family to find the image; the newest image in this family will be used.
  ImageFamily?: string;

  // Use VM image name to find the image.
  ImageName?: string;

  /*
The name of the Google Cloud project that this VM image belongs to.
Format: projects/{project_id}
*/
  Project?: string;
}

export function Notebooks_EnvironmentVmImage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ImageFamily",
      "Use this VM image family to find the image; the newest image in this family will be used.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ImageName",
      "Use VM image name to find the image.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Project",
      "The name of the Google Cloud project that this VM image belongs to.\nFormat: projects/{project_id}",
      [],
      true,
      false,
    ),
  ];
}
