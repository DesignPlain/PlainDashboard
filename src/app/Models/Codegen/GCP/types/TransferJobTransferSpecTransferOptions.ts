export interface TransferJobTransferSpecTransferOptions {
  // When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by `overwrite_objects_already_existing_in_sink`. Possible values: ALWAYS, DIFFERENT, NEVER.
  OverwriteWhen?: string;

  // Whether objects should be deleted from the source after they are transferred to the sink. Note that this option and `delete_objects_unique_in_sink` are mutually exclusive.
  DeleteObjectsFromSourceAfterTransfer?: boolean;

  /*
Whether objects that exist only in the sink should be deleted. Note that this option and
`delete_objects_from_source_after_transfer` are mutually exclusive.
*/
  DeleteObjectsUniqueInSink?: boolean;

  // Whether overwriting objects that already exist in the sink is allowed.
  OverwriteObjectsAlreadyExistingInSink?: boolean;
}
