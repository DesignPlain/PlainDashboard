import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterNodeConfigLocalNvmeSsdBlockConfig {
  /*
Number of raw-block local NVMe SSD disks to be attached to the node. Each local SSD is 375 GB in size. If zero, it means no raw-block local NVMe SSD disks to be attached to the node.
> Note: Local NVMe SSD storage available in GKE versions v1.25.3-gke.1800 and later.
*/
  LocalSsdCount?: number;
}

export function Container_ClusterNodeConfigLocalNvmeSsdBlockConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "LocalSsdCount",
      "Number of raw-block local NVMe SSD disks to be attached to the node. Each local SSD is 375 GB in size. If zero, it means no raw-block local NVMe SSD disks to be attached to the node.\n> Note: Local NVMe SSD storage available in GKE versions v1.25.3-gke.1800 and later.",
      [],
      true,
      true,
    ),
  ];
}
