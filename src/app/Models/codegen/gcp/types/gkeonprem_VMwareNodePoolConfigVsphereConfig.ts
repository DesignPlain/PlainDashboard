import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  gkeonprem_VMwareNodePoolConfigVsphereConfigTag,
  gkeonprem_VMwareNodePoolConfigVsphereConfigTag_GetTypes,
} from "./gkeonprem_VMwareNodePoolConfigVsphereConfigTag";

export interface gkeonprem_VMwareNodePoolConfigVsphereConfig {
  // The name of the vCenter datastore. Inherited from the user cluster.
  datastore?: string;

  // Vsphere host groups to apply to all VMs in the node pool
  hostGroups?: Array<string>;

  /*
Tags to apply to VMs.
Structure is documented below.
*/
  tags?: Array<gkeonprem_VMwareNodePoolConfigVsphereConfigTag>;
}

export function gkeonprem_VMwareNodePoolConfigVsphereConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "datastore",
      "The name of the vCenter datastore. Inherited from the user cluster.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "hostGroups",
      "Vsphere host groups to apply to all VMs in the node pool",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tags",
      "Tags to apply to VMs.\nStructure is documented below.",
      () => gkeonprem_VMwareNodePoolConfigVsphereConfigTag_GetTypes(),
      false,
      false,
    ),
  ];
}
