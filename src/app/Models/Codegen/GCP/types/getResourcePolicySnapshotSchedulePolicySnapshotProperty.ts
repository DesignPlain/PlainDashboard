export interface getResourcePolicySnapshotSchedulePolicySnapshotProperty {
  /*
Creates the new snapshot in the snapshot chain labeled with the
specified name. The chain name must be 1-63 characters long and comply
with RFC1035.
*/
  ChainName?: string;

  // Whether to perform a 'guest aware' snapshot.
  GuestFlush?: boolean;

  // A set of key-value pairs.
  Labels?: Map<string, string>;

  /*
Cloud Storage bucket location to store the auto snapshot
(regional or multi-regional)
*/
  StorageLocations?: Array<string>;
}
