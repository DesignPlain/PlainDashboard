import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkeonprem_BareMetalAdminClusterStorageLvpNodeMountsConfig,
  Gkeonprem_BareMetalAdminClusterStorageLvpNodeMountsConfig_GetTypes,
} from "./Gkeonprem_BareMetalAdminClusterStorageLvpNodeMountsConfig";
import {
  Gkeonprem_BareMetalAdminClusterStorageLvpShareConfig,
  Gkeonprem_BareMetalAdminClusterStorageLvpShareConfig_GetTypes,
} from "./Gkeonprem_BareMetalAdminClusterStorageLvpShareConfig";

export interface Gkeonprem_BareMetalAdminClusterStorage {
  /*
Specifies the config for local PersistentVolumes backed
by mounted node disks. These disks need to be formatted and mounted by the
user, which can be done before or after cluster creation.
Structure is documented below.
*/
  LvpNodeMountsConfig?: Gkeonprem_BareMetalAdminClusterStorageLvpNodeMountsConfig;

  /*
Specifies the config for local PersistentVolumes backed by
subdirectories in a shared filesystem. These subdirectores are
automatically created during cluster creation.
Structure is documented below.
*/
  LvpShareConfig?: Gkeonprem_BareMetalAdminClusterStorageLvpShareConfig;
}

export function Gkeonprem_BareMetalAdminClusterStorage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "LvpNodeMountsConfig",
      "Specifies the config for local PersistentVolumes backed\nby mounted node disks. These disks need to be formatted and mounted by the\nuser, which can be done before or after cluster creation.\nStructure is documented below.",
      Gkeonprem_BareMetalAdminClusterStorageLvpNodeMountsConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "LvpShareConfig",
      "Specifies the config for local PersistentVolumes backed by\nsubdirectories in a shared filesystem. These subdirectores are\nautomatically created during cluster creation.\nStructure is documented below.",
      Gkeonprem_BareMetalAdminClusterStorageLvpShareConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
