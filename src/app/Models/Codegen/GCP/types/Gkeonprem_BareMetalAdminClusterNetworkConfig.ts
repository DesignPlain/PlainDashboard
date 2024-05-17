import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_BareMetalAdminClusterNetworkConfigIslandModeCidr,
  Gkeonprem_BareMetalAdminClusterNetworkConfigIslandModeCidr_GetTypes,
} from "./Gkeonprem_BareMetalAdminClusterNetworkConfigIslandModeCidr";

export interface Gkeonprem_BareMetalAdminClusterNetworkConfig {
  /*
A nested object resource
Structure is documented below.
*/
  IslandModeCidr?: Gkeonprem_BareMetalAdminClusterNetworkConfigIslandModeCidr;
}

export function Gkeonprem_BareMetalAdminClusterNetworkConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "IslandModeCidr",
      "A nested object resource\nStructure is documented below.",
      Gkeonprem_BareMetalAdminClusterNetworkConfigIslandModeCidr_GetTypes(),
      false,
      false,
    ),
  ];
}
