import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  gkeonprem_BareMetalAdminClusterNetworkConfigIslandModeCidr,
  gkeonprem_BareMetalAdminClusterNetworkConfigIslandModeCidr_GetTypes,
} from "./gkeonprem_BareMetalAdminClusterNetworkConfigIslandModeCidr";

export interface gkeonprem_BareMetalAdminClusterNetworkConfig {
  /*
A nested object resource
Structure is documented below.
*/
  islandModeCidr?: gkeonprem_BareMetalAdminClusterNetworkConfigIslandModeCidr;
}

export function gkeonprem_BareMetalAdminClusterNetworkConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "islandModeCidr",
      "A nested object resource\nStructure is documented below.",
      () =>
        gkeonprem_BareMetalAdminClusterNetworkConfigIslandModeCidr_GetTypes(),
      false,
      false,
    ),
  ];
}
