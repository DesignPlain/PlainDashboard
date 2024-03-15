export interface AssetDiscoveryStatusStat {
  // The count of table entities within the referenced resource.
  Tables?: number;

  // The count of data items within the referenced resource.
  DataItems?: number;

  // The number of stored data bytes within the referenced resource.
  DataSize?: number;

  // The count of fileset entities within the referenced resource.
  Filesets?: number;
}
