import { BareMetalAdminClusterStorageLvpShareConfigLvpConfig } from "./BareMetalAdminClusterStorageLvpShareConfigLvpConfig";

export interface BareMetalAdminClusterStorageLvpShareConfig {
  /*
Defines the machine path and storage class for the LVP Share.
Structure is documented below.
*/
  LvpConfig?: BareMetalAdminClusterStorageLvpShareConfigLvpConfig;

  // The number of subdirectories to create under path.
  SharedPathPvCount?: number;
}
