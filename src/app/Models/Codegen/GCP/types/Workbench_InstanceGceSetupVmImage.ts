import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Workbench_InstanceGceSetupVmImage {
  /*
The name of the Google Cloud project that this VM image belongs to.
Format: {project_id}
*/
  Project?: string;

  /*
Optional. Use this VM image family to find the image; the newest
image in this family will be used.
*/
  Family?: string;

  // Optional. Use VM image name to find the image.
  Name?: string;
}

export function Workbench_InstanceGceSetupVmImage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Optional. Use VM image name to find the image.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Project",
      "The name of the Google Cloud project that this VM image belongs to.\nFormat: {project_id}",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Family",
      "Optional. Use this VM image family to find the image; the newest\nimage in this family will be used.",
      [],
      false,
      true,
    ),
  ];
}
