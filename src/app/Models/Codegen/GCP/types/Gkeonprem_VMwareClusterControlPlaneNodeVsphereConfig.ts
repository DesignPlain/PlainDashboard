import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkeonprem_VMwareClusterControlPlaneNodeVsphereConfig {
  /*
(Output)
The Vsphere datastore used by the Control Plane Node.
*/
  Datastore?: string;

  /*
(Output)
The Vsphere storage policy used by the control plane Node.

- - -
*/
  StoragePolicyName?: string;
}

export function Gkeonprem_VMwareClusterControlPlaneNodeVsphereConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Datastore",
      "(Output)\nThe Vsphere datastore used by the Control Plane Node.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "StoragePolicyName",
      "(Output)\nThe Vsphere storage policy used by the control plane Node.\n\n- - -",
      [],
      false,
      false,
    ),
  ];
}
