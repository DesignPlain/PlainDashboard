import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  gkeonprem_BareMetalAdminClusterStorageLvpNodeMountsConfig,
  gkeonprem_BareMetalAdminClusterStorageLvpNodeMountsConfig_GetTypes,
} from "./gkeonprem_BareMetalAdminClusterStorageLvpNodeMountsConfig";
import {
  gkeonprem_BareMetalAdminClusterStorageLvpShareConfig,
  gkeonprem_BareMetalAdminClusterStorageLvpShareConfig_GetTypes,
} from "./gkeonprem_BareMetalAdminClusterStorageLvpShareConfig";

export interface gkeonprem_BareMetalAdminClusterStorage {
  /*
Specifies the config for local PersistentVolumes backed
by mounted node disks. These disks need to be formatted and mounted by the
user, which can be done before or after cluster creation.
Structure is documented below.
*/
  lvpNodeMountsConfig?: gkeonprem_BareMetalAdminClusterStorageLvpNodeMountsConfig;

  /*
Specifies the config for local PersistentVolumes backed by
subdirectories in a shared filesystem. These subdirectores are
automatically created during cluster creation.
Structure is documented below.
*/
  lvpShareConfig?: gkeonprem_BareMetalAdminClusterStorageLvpShareConfig;
}

export function gkeonprem_BareMetalAdminClusterStorage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "lvpNodeMountsConfig",
      "Specifies the config for local PersistentVolumes backed\nby mounted node disks. These disks need to be formatted and mounted by the\nuser, which can be done before or after cluster creation.\nStructure is documented below.",
      gkeonprem_BareMetalAdminClusterStorageLvpNodeMountsConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "lvpShareConfig",
      "Specifies the config for local PersistentVolumes backed by\nsubdirectories in a shared filesystem. These subdirectores are\nautomatically created during cluster creation.\nStructure is documented below.",
      gkeonprem_BareMetalAdminClusterStorageLvpShareConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
