import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Edgecontainer_ClusterControlPlaneLocal,
  Edgecontainer_ClusterControlPlaneLocal_GetTypes,
} from "./Edgecontainer_ClusterControlPlaneLocal";
import {
  Edgecontainer_ClusterControlPlaneRemote,
  Edgecontainer_ClusterControlPlaneRemote_GetTypes,
} from "./Edgecontainer_ClusterControlPlaneRemote";

export interface Edgecontainer_ClusterControlPlane {
  /*
Local control plane configuration.
Structure is documented below.
*/
  Local?: Edgecontainer_ClusterControlPlaneLocal;

  /*
Remote control plane configuration.
Structure is documented below.
*/
  Remote?: Edgecontainer_ClusterControlPlaneRemote;
}

export function Edgecontainer_ClusterControlPlane_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Local",
      "Local control plane configuration.\nStructure is documented below.",
      Edgecontainer_ClusterControlPlaneLocal_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Remote",
      "Remote control plane configuration.\nStructure is documented below.",
      Edgecontainer_ClusterControlPlaneRemote_GetTypes(),
      false,
      true,
    ),
  ];
}
