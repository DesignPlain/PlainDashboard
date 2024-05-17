import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_AttachedClusterProxyConfigKubernetesSecret {
  // Name of the kubernetes secret containing the proxy config.
  Name?: string;

  // Namespace of the kubernetes secret containing the proxy config.
  Namespace?: string;
}

export function Container_AttachedClusterProxyConfigKubernetesSecret_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Name of the kubernetes secret containing the proxy config.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Namespace",
      "Namespace of the kubernetes secret containing the proxy config.",
      [],
      true,
      false,
    ),
  ];
}
