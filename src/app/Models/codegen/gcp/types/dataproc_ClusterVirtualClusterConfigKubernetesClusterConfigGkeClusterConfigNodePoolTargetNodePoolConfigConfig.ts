import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig {
  /*
Whether the nodes are created as preemptible VM instances. 
Preemptible nodes cannot be used in a node pool with the CONTROLLER role or in the DEFAULT node pool if the
CONTROLLER role is not assigned (the DEFAULT node pool will assume the CONTROLLER role).
*/
  preemptible?: boolean;

  // Spot flag for enabling Spot VM, which is a rebrand of the existing preemptible flag.
  spot?: boolean;

  /*
The number of local SSD disks to attach to the node, 
which is limited by the maximum number of disks allowable per zone.
*/
  localSsdCount?: number;

  /*
The name of a Google Compute Engine machine type
to create for the node group. If not specified, GCP will default to a predetermined
computed value (currently `n1-standard-4`).
*/
  machineType?: string;

  /*
The name of a minimum generation of CPU family
for the node group. If not specified, GCP will default to a predetermined computed value
for each zone. See [the guide](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform)
for details about which CPU families are available (and defaulted) for each zone.
*/
  minCpuPlatform?: string;
}

export function dataproc_ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "preemptible",
      "Whether the nodes are created as preemptible VM instances. \nPreemptible nodes cannot be used in a node pool with the CONTROLLER role or in the DEFAULT node pool if the\nCONTROLLER role is not assigned (the DEFAULT node pool will assume the CONTROLLER role).",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "spot",
      "Spot flag for enabling Spot VM, which is a rebrand of the existing preemptible flag.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "localSsdCount",
      "The number of local SSD disks to attach to the node, \nwhich is limited by the maximum number of disks allowable per zone.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "machineType",
      "The name of a Google Compute Engine machine type\nto create for the node group. If not specified, GCP will default to a predetermined\ncomputed value (currently `n1-standard-4`).",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "minCpuPlatform",
      "The name of a minimum generation of CPU family\nfor the node group. If not specified, GCP will default to a predetermined computed value\nfor each zone. See [the guide](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform)\nfor details about which CPU families are available (and defaulted) for each zone.",
      () => [],
      false,
      true,
    ),
  ];
}
