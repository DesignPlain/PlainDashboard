import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_ClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig {
  /*
Number of raw-block local NVMe SSD disks to be attached to the node. Each local SSD is 375 GB in size. If zero, it means no raw-block local NVMe SSD disks to be attached to the node.
> Note: Local NVMe SSD storage available in GKE versions v1.25.3-gke.1800 and later.
*/
  localSsdCount?: number;
}

export function container_ClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "localSsdCount",
      "Number of raw-block local NVMe SSD disks to be attached to the node. Each local SSD is 375 GB in size. If zero, it means no raw-block local NVMe SSD disks to be attached to the node.\n> Note: Local NVMe SSD storage available in GKE versions v1.25.3-gke.1800 and later.",
      [],
      true,
      true,
    ),
  ];
}
