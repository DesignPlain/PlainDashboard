import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface container_ClusterNodeConfigLocalNvmeSsdBlockConfig {
  /*
Number of raw-block local NVMe SSD disks to be attached to the node. Each local SSD is 375 GB in size. If zero, it means no raw-block local NVMe SSD disks to be attached to the node.
> Note: Local NVMe SSD storage available in GKE versions v1.25.3-gke.1800 and later.
*/
  localSsdCount?: number;
}

export function container_ClusterNodeConfigLocalNvmeSsdBlockConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "localSsdCount",
      "Number of raw-block local NVMe SSD disks to be attached to the node. Each local SSD is 375 GB in size. If zero, it means no raw-block local NVMe SSD disks to be attached to the node.\n> Note: Local NVMe SSD storage available in GKE versions v1.25.3-gke.1800 and later.",
      () => [],
      true,
      true,
    ),
  ];
}
