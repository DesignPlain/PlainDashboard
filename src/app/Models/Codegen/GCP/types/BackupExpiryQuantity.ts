export interface BackupExpiryQuantity {
  /*
(Output)
Output only. The backup's position among its backups with the same source cluster and type, by descending chronological order create time (i.e. newest first).
*/
  RetentionCount?: number;

  /*
(Output)
Output only. The length of the quantity-based queue, specified by the backup's retention policy.
*/
  TotalRetentionCount?: number;
}
