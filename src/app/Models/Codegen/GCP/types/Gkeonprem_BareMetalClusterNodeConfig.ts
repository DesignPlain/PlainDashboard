import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkeonprem_BareMetalClusterNodeConfig {
  /*
The available runtimes that can be used to run containers in a Bare Metal User Cluster.
Possible values are: `CONTAINER_RUNTIME_UNSPECIFIED`, `DOCKER`, `CONTAINERD`.
*/
  ContainerRuntime?: string;

  /*
The maximum number of pods a node can run. The size of the CIDR range
assigned to the node will be derived from this parameter.
*/
  MaxPodsPerNode?: number;
}

export function Gkeonprem_BareMetalClusterNodeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ContainerRuntime",
      "The available runtimes that can be used to run containers in a Bare Metal User Cluster.\nPossible values are: `CONTAINER_RUNTIME_UNSPECIFIED`, `DOCKER`, `CONTAINERD`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxPodsPerNode",
      "The maximum number of pods a node can run. The size of the CIDR range\nassigned to the node will be derived from this parameter.",
      [],
      false,
      false,
    ),
  ];
}
