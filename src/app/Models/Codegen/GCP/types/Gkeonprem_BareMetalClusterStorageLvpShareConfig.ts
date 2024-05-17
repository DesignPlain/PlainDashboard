import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_BareMetalClusterStorageLvpShareConfigLvpConfig,
  Gkeonprem_BareMetalClusterStorageLvpShareConfigLvpConfig_GetTypes,
} from "./Gkeonprem_BareMetalClusterStorageLvpShareConfigLvpConfig";

export interface Gkeonprem_BareMetalClusterStorageLvpShareConfig {
  /*
Defines the machine path and storage class for the LVP Share.
Structure is documented below.
*/
  LvpConfig?: Gkeonprem_BareMetalClusterStorageLvpShareConfigLvpConfig;

  // The number of subdirectories to create under path.
  SharedPathPvCount?: number;
}

export function Gkeonprem_BareMetalClusterStorageLvpShareConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "LvpConfig",
      "Defines the machine path and storage class for the LVP Share.\nStructure is documented below.",
      Gkeonprem_BareMetalClusterStorageLvpShareConfigLvpConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "SharedPathPvCount",
      "The number of subdirectories to create under path.",
      [],
      false,
      false,
    ),
  ];
}
