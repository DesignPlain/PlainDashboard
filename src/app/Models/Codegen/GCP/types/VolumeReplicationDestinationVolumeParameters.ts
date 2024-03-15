export interface VolumeReplicationDestinationVolumeParameters {
  // Description for the destination volume.
  Description?: string;

  // Share name for destination volume. If not specified, name of source volume's share name will be used.
  ShareName?: string;

  // Name of an existing storage pool for the destination volume with format: `projects/{{project}}/locations/{{location}}/storagePools/{{poolId}}`
  StoragePool?: string;

  // Name for the destination volume to be created. If not specified, the name of the source volume will be used.
  VolumeId?: string;
}
