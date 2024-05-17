import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_NodePoolNodeConfigLocalNvmeSsdBlockConfig {
  // Number of raw-block local NVMe SSD disks to be attached to the node. Each local SSD is 375 GB in size.
  LocalSsdCount?: number;
}

export function Container_NodePoolNodeConfigLocalNvmeSsdBlockConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "LocalSsdCount",
      "Number of raw-block local NVMe SSD disks to be attached to the node. Each local SSD is 375 GB in size.",
      [],
      true,
      true,
    ),
  ];
}
