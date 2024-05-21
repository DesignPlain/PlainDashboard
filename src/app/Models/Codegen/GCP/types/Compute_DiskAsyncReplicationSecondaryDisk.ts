import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

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
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "state",
      "Output-only. Status of replication on the secondary disk.\n\n- - -",
      [],
      false,
      false,
    ),
  ];
}
