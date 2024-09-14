import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_DiskAsyncReplicationSecondaryDisk,
  compute_DiskAsyncReplicationSecondaryDisk_GetTypes,
} from "../types/compute_DiskAsyncReplicationSecondaryDisk";

export interface DiskAsyncReplicationArgs {
  // The primary disk (source of replication).
  primaryDisk?: string;

  /*
The secondary disk (target of replication). You can specify only one value. Structure is documented below.

The `secondary_disk` block includes:
*/
  secondaryDisk?: compute_DiskAsyncReplicationSecondaryDisk;
}
export class DiskAsyncReplication extends DS_Resource {
  /*
The secondary disk (target of replication). You can specify only one value. Structure is documented below.

The `secondary_disk` block includes:
*/
  public secondaryDisk?: compute_DiskAsyncReplicationSecondaryDisk;

  // The primary disk (source of replication).
  public primaryDisk?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "secondaryDisk",
        "The secondary disk (target of replication). You can specify only one value. Structure is documented below.\n\nThe `secondary_disk` block includes:",
        () => compute_DiskAsyncReplicationSecondaryDisk_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "primaryDisk",
        "The primary disk (source of replication).",
        () => [],
        true,
        true,
      ),
    ];
  }
}
