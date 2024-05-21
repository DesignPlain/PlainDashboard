import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_ClusterPodSecurityPolicyConfig {
  /*
Enable the PodSecurityPolicy controller for this cluster.
If enabled, pods must be valid under a PodSecurityPolicy to be created.
*/
  enabled?: boolean;
}

export function container_ClusterPodSecurityPolicyConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Enable the PodSecurityPolicy controller for this cluster.\nIf enabled, pods must be valid under a PodSecurityPolicy to be created.",
      [],
      true,
      false,
    ),
  ];
}
