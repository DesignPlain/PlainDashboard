export interface BareMetalClusterStorageLvpNodeMountsConfig {
  // The host machine path.
  Path?: string;

  /*
The StorageClass name that PVs will be created with.

- - -
*/
  StorageClass?: string;
}
