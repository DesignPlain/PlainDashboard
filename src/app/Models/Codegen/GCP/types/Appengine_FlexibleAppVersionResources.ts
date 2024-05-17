import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Appengine_FlexibleAppVersionResourcesVolume,
  Appengine_FlexibleAppVersionResourcesVolume_GetTypes,
} from "./Appengine_FlexibleAppVersionResourcesVolume";

export interface Appengine_FlexibleAppVersionResources {
  /*
List of ports, or port pairs, to forward from the virtual machine to the application container.
Structure is documented below.
*/
  Volumes?: Array<Appengine_FlexibleAppVersionResourcesVolume>;

  // Number of CPU cores needed.
  Cpu?: number;

  // Disk size (GB) needed.
  DiskGb?: number;

  // Memory (GB) needed.
  MemoryGb?: number;
}

export function Appengine_FlexibleAppVersionResources_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Volumes",
      "List of ports, or port pairs, to forward from the virtual machine to the application container.\nStructure is documented below.",
      Appengine_FlexibleAppVersionResourcesVolume_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Cpu",
      "Number of CPU cores needed.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "DiskGb",
      "Disk size (GB) needed.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MemoryGb",
      "Memory (GB) needed.",
      [],
      false,
      false,
    ),
  ];
}
