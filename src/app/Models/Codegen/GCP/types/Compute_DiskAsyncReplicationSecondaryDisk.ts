import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_DiskAsyncReplicationSecondaryDisk {
  // The secondary disk.
  Disk?: string;

  /*
Output-only. Status of replication on the secondary disk.

- - -
*/
  State?: string;
}

export function Compute_DiskAsyncReplicationSecondaryDisk_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Disk",
      "The secondary disk.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "State",
      "Output-only. Status of replication on the secondary disk.\n\n- - -",
      [],
      false,
      false,
    ),
  ];
}
