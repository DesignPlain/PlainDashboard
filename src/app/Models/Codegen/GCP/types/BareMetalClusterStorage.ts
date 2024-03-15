import { BareMetalClusterStorageLvpShareConfig } from "./BareMetalClusterStorageLvpShareConfig";
import { BareMetalClusterStorageLvpNodeMountsConfig } from "./BareMetalClusterStorageLvpNodeMountsConfig";

export interface BareMetalClusterStorage {
  /*
Specifies the config for local PersistentVolumes backed by
subdirectories in a shared filesystem. These subdirectores are
automatically created during cluster creation.
Structure is documented below.
*/
  LvpShareConfig?: BareMetalClusterStorageLvpShareConfig;

  /*
Specifies the config for local PersistentVolumes backed
by mounted node disks. These disks need to be formatted and mounted by the
user, which can be done before or after cluster creation.
Structure is documented below.
*/
  LvpNodeMountsConfig?: BareMetalClusterStorageLvpNodeMountsConfig;
}
