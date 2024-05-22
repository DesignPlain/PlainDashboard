import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  edgecontainer_ClusterControlPlaneLocal,
  edgecontainer_ClusterControlPlaneLocal_GetTypes,
} from "./edgecontainer_ClusterControlPlaneLocal";
import {
  edgecontainer_ClusterControlPlaneRemote,
  edgecontainer_ClusterControlPlaneRemote_GetTypes,
} from "./edgecontainer_ClusterControlPlaneRemote";

export interface edgecontainer_ClusterControlPlane {
  /*
Local control plane configuration.
Structure is documented below.
*/
  local?: edgecontainer_ClusterControlPlaneLocal;

  /*
Remote control plane configuration.
Structure is documented below.
*/
  remote?: edgecontainer_ClusterControlPlaneRemote;
}

export function edgecontainer_ClusterControlPlane_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "local",
      "Local control plane configuration.\nStructure is documented below.",
      edgecontainer_ClusterControlPlaneLocal_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "remote",
      "Remote control plane configuration.\nStructure is documented below.",
      edgecontainer_ClusterControlPlaneRemote_GetTypes(),
      false,
      true,
    ),
  ];
}
