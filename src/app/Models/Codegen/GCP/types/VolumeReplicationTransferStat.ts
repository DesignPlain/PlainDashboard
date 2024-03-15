export interface VolumeReplicationTransferStat {
  /*
(Output)
A message describing the cause of the last transfer failure.
*/
  LastTransferError?: string;

  /*
(Output)
Total time taken so far during current transfer.
*/
  TotalTransferDuration?: string;

  /*
(Output)
Number of bytes transferred so far in current transfer.
*/
  TransferBytes?: string;

  /*
(Output)
Time when progress was updated last. A timestamp in RFC3339 UTC "Zulu" format. Examples: "2023-06-22T09:13:01.617Z".
*/
  UpdateTime?: string;

  /*
(Output)
The elapsed time since the creation of the snapshot on the source volume that was last replicated
to the destination volume. Lag time represents the difference in age of the destination volume
data in relation to the source volume data.
*/
  LagDuration?: string;

  /*
(Output)
Size of last completed transfer in bytes.
*/
  LastTransferBytes?: string;

  /*
(Output)
Time taken during last completed transfer.
*/
  LastTransferDuration?: string;

  /*
(Output)
Time when last transfer completed. A timestamp in RFC3339 UTC "Zulu" format. Examples: "2023-06-22T09:13:01.617Z".
*/
  LastTransferEndTime?: string;
}
