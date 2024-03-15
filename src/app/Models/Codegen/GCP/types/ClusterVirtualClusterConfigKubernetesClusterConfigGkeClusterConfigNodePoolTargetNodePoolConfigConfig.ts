export interface ClusterVirtualClusterConfigKubernetesClusterConfigGkeClusterConfigNodePoolTargetNodePoolConfigConfig {
  /*
The number of local SSD disks to attach to the node, 
which is limited by the maximum number of disks allowable per zone.
*/
  LocalSsdCount?: number;

  /*
The name of a Google Compute Engine machine type
to create for the node group. If not specified, GCP will default to a predetermined
computed value (currently `n1-standard-4`).
*/
  MachineType?: string;

  /*
The name of a minimum generation of CPU family
for the node group. If not specified, GCP will default to a predetermined computed value
for each zone. See [the guide](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform)
for details about which CPU families are available (and defaulted) for each zone.
*/
  MinCpuPlatform?: string;

  /*
Whether the nodes are created as preemptible VM instances. 
Preemptible nodes cannot be used in a node pool with the CONTROLLER role or in the DEFAULT node pool if the
CONTROLLER role is not assigned (the DEFAULT node pool will assume the CONTROLLER role).
*/
  Preemptible?: boolean;

  // Spot flag for enabling Spot VM, which is a rebrand of the existing preemptible flag.
  Spot?: boolean;
}
