import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

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
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "namespace",
      "Namespace of the kubernetes secret containing the proxy config.",
      [],
      true,
      false,
    ),
  ];
}
