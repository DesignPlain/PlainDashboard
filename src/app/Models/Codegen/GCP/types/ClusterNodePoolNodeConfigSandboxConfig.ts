export interface ClusterNodePoolNodeConfigSandboxConfig {
  /*
Which sandbox to use for pods in the node pool.
Accepted values are:

- `"gvisor"`: Pods run within a gVisor sandbox.
*/
  SandboxType?: string;
}
