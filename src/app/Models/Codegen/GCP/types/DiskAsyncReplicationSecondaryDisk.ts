export interface DiskAsyncReplicationSecondaryDisk {
  // The secondary disk.
  Disk?: string;

  /*
Output-only. Status of replication on the secondary disk.

- - -
*/
  State?: string;
}
