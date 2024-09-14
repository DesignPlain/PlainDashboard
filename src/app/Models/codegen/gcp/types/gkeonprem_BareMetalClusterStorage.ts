import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  gkeonprem_BareMetalClusterStorageLvpNodeMountsConfig,
  gkeonprem_BareMetalClusterStorageLvpNodeMountsConfig_GetTypes,
} from "./gkeonprem_BareMetalClusterStorageLvpNodeMountsConfig";
import {
  gkeonprem_BareMetalClusterStorageLvpShareConfig,
  gkeonprem_BareMetalClusterStorageLvpShareConfig_GetTypes,
} from "./gkeonprem_BareMetalClusterStorageLvpShareConfig";

export interface gkeonprem_BareMetalClusterStorage {
  /*
Specifies the config for local PersistentVolumes backed
by mounted node disks. These disks need to be formatted and mounted by the
user, which can be done before or after cluster creation.
Structure is documented below.
*/
  lvpNodeMountsConfig?: gkeonprem_BareMetalClusterStorageLvpNodeMountsConfig;

  /*
Specifies the config for local PersistentVolumes backed by
subdirectories in a shared filesystem. These subdirectores are
automatically created during cluster creation.
Structure is documented below.
*/
  lvpShareConfig?: gkeonprem_BareMetalClusterStorageLvpShareConfig;
}

export function gkeonprem_BareMetalClusterStorage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "lvpNodeMountsConfig",
      "Specifies the config for local PersistentVolumes backed\nby mounted node disks. These disks need to be formatted and mounted by the\nuser, which can be done before or after cluster creation.\nStructure is documented below.",
      () => gkeonprem_BareMetalClusterStorageLvpNodeMountsConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "lvpShareConfig",
      "Specifies the config for local PersistentVolumes backed by\nsubdirectories in a shared filesystem. These subdirectores are\nautomatically created during cluster creation.\nStructure is documented below.",
      () => gkeonprem_BareMetalClusterStorageLvpShareConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
