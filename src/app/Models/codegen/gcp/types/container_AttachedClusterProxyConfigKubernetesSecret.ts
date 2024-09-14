import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface container_AttachedClusterProxyConfigKubernetesSecret {
  // Name of the kubernetes secret containing the proxy config.
  name?: string;

  // Namespace of the kubernetes secret containing the proxy config.
  namespace?: string;
}

export function container_AttachedClusterProxyConfigKubernetesSecret_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the kubernetes secret containing the proxy config.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "namespace",
      "Namespace of the kubernetes secret containing the proxy config.",
      () => [],
      true,
      false,
    ),
  ];
}
