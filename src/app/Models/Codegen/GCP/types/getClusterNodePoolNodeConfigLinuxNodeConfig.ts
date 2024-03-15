export interface getClusterNodePoolNodeConfigLinuxNodeConfig {
  // cgroupMode specifies the cgroup mode to be used on the node.
  CgroupMode?: string;

  // The Linux kernel parameters to be applied to the nodes and all pods running on the nodes.
  Sysctls?: Map<string, string>;
}
