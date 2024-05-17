import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Storage_TransferJobTransferSpecTransferOptions {
  /*
Whether objects that exist only in the sink should be deleted. Note that this option and
`delete_objects_from_source_after_transfer` are mutually exclusive.
*/
  DeleteObjectsUniqueInSink?: boolean;

  // Whether overwriting objects that already exist in the sink is allowed.
  OverwriteObjectsAlreadyExistingInSink?: boolean;

  // When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by `overwrite_objects_already_existing_in_sink`. Possible values: ALWAYS, DIFFERENT, NEVER.
  OverwriteWhen?: string;

  // Whether objects should be deleted from the source after they are transferred to the sink. Note that this option and `delete_objects_unique_in_sink` are mutually exclusive.
  DeleteObjectsFromSourceAfterTransfer?: boolean;
}

export function Storage_TransferJobTransferSpecTransferOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "DeleteObjectsUniqueInSink",
      "Whether objects that exist only in the sink should be deleted. Note that this option and\n`delete_objects_from_source_after_transfer` are mutually exclusive.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "OverwriteObjectsAlreadyExistingInSink",
      "Whether overwriting objects that already exist in the sink is allowed.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "OverwriteWhen",
      "When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by `overwrite_objects_already_existing_in_sink`. Possible values: ALWAYS, DIFFERENT, NEVER.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "DeleteObjectsFromSourceAfterTransfer",
      "Whether objects should be deleted from the source after they are transferred to the sink. Note that this option and `delete_objects_unique_in_sink` are mutually exclusive.",
      [],
      false,
      false,
    ),
  ];
}
