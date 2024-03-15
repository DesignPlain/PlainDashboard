export interface BareMetalAdminClusterStorageLvpNodeMountsConfig {
  // The StorageClass name that PVs will be created with.
  StorageClass?: string;

  // The host machine path.
  Path?: string;
}
