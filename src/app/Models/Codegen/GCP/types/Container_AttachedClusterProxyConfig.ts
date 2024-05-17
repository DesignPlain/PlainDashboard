import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_AttachedClusterProxyConfigKubernetesSecret,
  Container_AttachedClusterProxyConfigKubernetesSecret_GetTypes,
} from "./Container_AttachedClusterProxyConfigKubernetesSecret";

export interface Container_AttachedClusterProxyConfig {
  /*
The Kubernetes Secret resource that contains the HTTP(S) proxy configuration.
Structure is documented below.
*/
  KubernetesSecret?: Container_AttachedClusterProxyConfigKubernetesSecret;
}

export function Container_AttachedClusterProxyConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "KubernetesSecret",
      "The Kubernetes Secret resource that contains the HTTP(S) proxy configuration.\nStructure is documented below.",
      Container_AttachedClusterProxyConfigKubernetesSecret_GetTypes(),
      false,
      false,
    ),
  ];
}
