export interface BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigKubeletConfig {
  /*
The maximum size of bursty pulls, temporarily allows pulls to burst to this
number, while still not exceeding registry_pull_qps.
The value must not be a negative number.
Updating this field may impact scalability by changing the amount of
traffic produced by image pulls.
Defaults to 10.
*/
  RegistryBurst?: number;

  /*
The limit of registry pulls per second.
Setting this value to 0 means no limit.
Updating this field may impact scalability by changing the amount of
traffic produced by image pulls.
Defaults to 5.
*/
  RegistryPullQps?: number;

  /*
Prevents the Kubelet from pulling multiple images at a time.
We recommend -not- changing the default value on nodes that run docker
daemon with version  < 1.9 or an Another Union File System (Aufs) storage
backend. Issue https://github.com/kubernetes/kubernetes/issues/10959 has
more details.
*/
  SerializeImagePullsDisabled?: boolean;
}
