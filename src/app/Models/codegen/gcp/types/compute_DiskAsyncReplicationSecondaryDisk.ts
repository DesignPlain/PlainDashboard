import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_DiskAsyncReplicationSecondaryDisk {
  // The secondary disk.
  disk?: string;

  /*
Output-only. Status of replication on the secondary disk.

- - -
*/
  state?: string;
}

export function compute_DiskAsyncReplicationSecondaryDisk_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "disk",
      "The secondary disk.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "state",
      "Output-only. Status of replication on the secondary disk.\n\n- - -",
      () => [],
      false,
      false,
    ),
  ];
}
