import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterPrivateClusterConfigMasterGlobalAccessConfig {
  /*
Whether the cluster master is accessible globally or
not.
*/
  Enabled?: boolean;
}

export function Container_ClusterPrivateClusterConfigMasterGlobalAccessConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Whether the cluster master is accessible globally or\nnot.",
      [],
      true,
      false,
    ),
  ];
}
