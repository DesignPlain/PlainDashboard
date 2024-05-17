import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigKubeletConfig {
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

export function Gkeonprem_BareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigKubeletConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "RegistryBurst",
      "The maximum size of bursty pulls, temporarily allows pulls to burst to this\nnumber, while still not exceeding registry_pull_qps.\nThe value must not be a negative number.\nUpdating this field may impact scalability by changing the amount of\ntraffic produced by image pulls.\nDefaults to 10.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "RegistryPullQps",
      "The limit of registry pulls per second.\nSetting this value to 0 means no limit.\nUpdating this field may impact scalability by changing the amount of\ntraffic produced by image pulls.\nDefaults to 5.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "SerializeImagePullsDisabled",
      "Prevents the Kubelet from pulling multiple images at a time.\nWe recommend *not* changing the default value on nodes that run docker\ndaemon with version  < 1.9 or an Another Union File System (Aufs) storage\nbackend. Issue https://github.com/kubernetes/kubernetes/issues/10959 has\nmore details.",
      [],
      false,
      false,
    ),
  ];
}
