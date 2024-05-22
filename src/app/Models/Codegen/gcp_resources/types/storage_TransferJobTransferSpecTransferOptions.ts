import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface storage_TransferJobTransferSpecTransferOptions {
  // Whether objects should be deleted from the source after they are transferred to the sink. Note that this option and `delete_objects_unique_in_sink` are mutually exclusive.
  deleteObjectsFromSourceAfterTransfer?: boolean;

  /*
Whether objects that exist only in the sink should be deleted. Note that this option and
`delete_objects_from_source_after_transfer` are mutually exclusive.
*/
  deleteObjectsUniqueInSink?: boolean;

  // Whether overwriting objects that already exist in the sink is allowed.
  overwriteObjectsAlreadyExistingInSink?: boolean;

  // When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by `overwrite_objects_already_existing_in_sink`. Possible values: ALWAYS, DIFFERENT, NEVER.
  overwriteWhen?: string;
}

export function storage_TransferJobTransferSpecTransferOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "overwriteWhen",
      "When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by `overwrite_objects_already_existing_in_sink`. Possible values: ALWAYS, DIFFERENT, NEVER.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "deleteObjectsFromSourceAfterTransfer",
      "Whether objects should be deleted from the source after they are transferred to the sink. Note that this option and `delete_objects_unique_in_sink` are mutually exclusive.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "deleteObjectsUniqueInSink",
      "Whether objects that exist only in the sink should be deleted. Note that this option and\n`delete_objects_from_source_after_transfer` are mutually exclusive.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "overwriteObjectsAlreadyExistingInSink",
      "Whether overwriting objects that already exist in the sink is allowed.",
      [],
      false,
      false,
    ),
  ];
}
