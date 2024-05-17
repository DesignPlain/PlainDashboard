import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_VMwareNodePoolConfigVsphereConfigTag,
  Gkeonprem_VMwareNodePoolConfigVsphereConfigTag_GetTypes,
} from "./Gkeonprem_VMwareNodePoolConfigVsphereConfigTag";

export interface Gkeonprem_VMwareNodePoolConfigVsphereConfig {
  // The name of the vCenter datastore. Inherited from the user cluster.
  Datastore?: string;

  // Vsphere host groups to apply to all VMs in the node pool
  HostGroups?: Array<string>;

  /*
Tags to apply to VMs.
Structure is documented below.
*/
  Tags?: Array<Gkeonprem_VMwareNodePoolConfigVsphereConfigTag>;
}

export function Gkeonprem_VMwareNodePoolConfigVsphereConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Datastore",
      "The name of the vCenter datastore. Inherited from the user cluster.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "HostGroups",
      "Vsphere host groups to apply to all VMs in the node pool",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Tags",
      "Tags to apply to VMs.\nStructure is documented below.",
      Gkeonprem_VMwareNodePoolConfigVsphereConfigTag_GetTypes(),
      false,
      false,
    ),
  ];
}
