import { BareMetalClusterStorageLvpShareConfigLvpConfig } from "./BareMetalClusterStorageLvpShareConfigLvpConfig";

export interface BareMetalClusterStorageLvpShareConfig {
  /*
Defines the machine path and storage class for the LVP Share.
Structure is documented below.
*/
  LvpConfig?: BareMetalClusterStorageLvpShareConfigLvpConfig;

  // The number of subdirectories to create under path.
  SharedPathPvCount?: number;
}
