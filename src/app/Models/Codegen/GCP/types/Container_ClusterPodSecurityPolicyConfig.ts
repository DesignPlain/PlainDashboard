import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterPodSecurityPolicyConfig {
  /*
Enable the PodSecurityPolicy controller for this cluster.
If enabled, pods must be valid under a PodSecurityPolicy to be created.
*/
  Enabled?: boolean;
}

export function Container_ClusterPodSecurityPolicyConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Enable the PodSecurityPolicy controller for this cluster.\nIf enabled, pods must be valid under a PodSecurityPolicy to be created.",
      [],
      true,
      false,
    ),
  ];
}
