import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  gkeonprem_BareMetalAdminClusterStorageLvpShareConfigLvpConfig,
  gkeonprem_BareMetalAdminClusterStorageLvpShareConfigLvpConfig_GetTypes,
} from "./gkeonprem_BareMetalAdminClusterStorageLvpShareConfigLvpConfig";

export interface gkeonprem_BareMetalAdminClusterStorageLvpShareConfig {
  // The number of subdirectories to create under path.
  sharedPathPvCount?: number;

  /*
Defines the machine path and storage class for the LVP Share.
Structure is documented below.
*/
  lvpConfig?: gkeonprem_BareMetalAdminClusterStorageLvpShareConfigLvpConfig;
}

export function gkeonprem_BareMetalAdminClusterStorageLvpShareConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "sharedPathPvCount",
      "The number of subdirectories to create under path.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "lvpConfig",
      "Defines the machine path and storage class for the LVP Share.\nStructure is documented below.",
      () =>
        gkeonprem_BareMetalAdminClusterStorageLvpShareConfigLvpConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
