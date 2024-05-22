import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface gkeonprem_VMwareClusterControlPlaneNodeVsphereConfig {
  /*
(Output)
The Vsphere datastore used by the Control Plane Node.
*/
  datastore?: string;

  /*
(Output)
The Vsphere storage policy used by the control plane Node.

- - -
*/
  storagePolicyName?: string;
}

export function gkeonprem_VMwareClusterControlPlaneNodeVsphereConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "datastore",
      "(Output)\nThe Vsphere datastore used by the Control Plane Node.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "storagePolicyName",
      "(Output)\nThe Vsphere storage policy used by the control plane Node.\n\n- - -",
      [],
      false,
      false,
    ),
  ];
}
