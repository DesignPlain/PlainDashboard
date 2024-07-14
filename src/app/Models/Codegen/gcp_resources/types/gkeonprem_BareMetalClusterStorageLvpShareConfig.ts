import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  gkeonprem_BareMetalClusterStorageLvpShareConfigLvpConfig,
  gkeonprem_BareMetalClusterStorageLvpShareConfigLvpConfig_GetTypes,
} from "./gkeonprem_BareMetalClusterStorageLvpShareConfigLvpConfig";

export interface gkeonprem_BareMetalClusterStorageLvpShareConfig {
  /*
Defines the machine path and storage class for the LVP Share.
Structure is documented below.
*/
  lvpConfig?: gkeonprem_BareMetalClusterStorageLvpShareConfigLvpConfig;

  // The number of subdirectories to create under path.
  sharedPathPvCount?: number;
}

export function gkeonprem_BareMetalClusterStorageLvpShareConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "lvpConfig",
      "Defines the machine path and storage class for the LVP Share.\nStructure is documented below.",
      gkeonprem_BareMetalClusterStorageLvpShareConfigLvpConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "sharedPathPvCount",
      "The number of subdirectories to create under path.",
      [],
      false,
      false,
    ),
  ];
}
