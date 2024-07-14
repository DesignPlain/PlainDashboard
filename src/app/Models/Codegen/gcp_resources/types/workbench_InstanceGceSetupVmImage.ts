import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface workbench_InstanceGceSetupVmImage {
  /*
Optional. Use this VM image family to find the image; the newest
image in this family will be used.
*/
  family?: string;

  // Optional. Use VM image name to find the image.
  name?: string;

  /*
The name of the Google Cloud project that this VM image belongs to.
Format: {project_id}
*/
  project?: string;
}

export function workbench_InstanceGceSetupVmImage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "family",
      "Optional. Use this VM image family to find the image; the newest\nimage in this family will be used.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Optional. Use VM image name to find the image.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "project",
      "The name of the Google Cloud project that this VM image belongs to.\nFormat: {project_id}",
      [],
      false,
      true,
    ),
  ];
}
