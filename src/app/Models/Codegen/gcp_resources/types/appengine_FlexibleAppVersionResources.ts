import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appengine_FlexibleAppVersionResourcesVolume,
  appengine_FlexibleAppVersionResourcesVolume_GetTypes,
} from "./appengine_FlexibleAppVersionResourcesVolume";

export interface appengine_FlexibleAppVersionResources {
  // Number of CPU cores needed.
  cpu?: number;

  // Disk size (GB) needed.
  diskGb?: number;

  // Memory (GB) needed.
  memoryGb?: number;

  /*
List of ports, or port pairs, to forward from the virtual machine to the application container.
Structure is documented below.
*/
  volumes?: Array<appengine_FlexibleAppVersionResourcesVolume>;
}

export function appengine_FlexibleAppVersionResources_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "cpu",
      "Number of CPU cores needed.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "diskGb",
      "Disk size (GB) needed.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "memoryGb",
      "Memory (GB) needed.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "volumes",
      "List of ports, or port pairs, to forward from the virtual machine to the application container.\nStructure is documented below.",
      appengine_FlexibleAppVersionResourcesVolume_GetTypes(),
      false,
      false,
    ),
  ];
}
