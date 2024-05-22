import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_getClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig {
  // Number of raw-block local NVMe SSD disks to be attached to the node. Each local SSD is 375 GB in size.
  localSsdCount?: number;
}

export function container_getClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "localSsdCount",
      "Number of raw-block local NVMe SSD disks to be attached to the node. Each local SSD is 375 GB in size.",
      [],
      true,
      false,
    ),
  ];
}
