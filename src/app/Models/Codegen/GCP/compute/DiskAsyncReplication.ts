import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_DiskAsyncReplicationSecondaryDisk,
  Compute_DiskAsyncReplicationSecondaryDisk_GetTypes,
} from "../types/Compute_DiskAsyncReplicationSecondaryDisk";

export interface DiskAsyncReplicationArgs {
  // The primary disk (source of replication).
  PrimaryDisk?: string;

  /*
The secondary disk (target of replication). You can specify only one value. Structure is documented below.

The `secondary_disk` block includes:
*/
  SecondaryDisk?: Compute_DiskAsyncReplicationSecondaryDisk;
}
export class DiskAsyncReplication extends Resource {
  // The primary disk (source of replication).
  public PrimaryDisk?: string;

  /*
The secondary disk (target of replication). You can specify only one value. Structure is documented below.

The `secondary_disk` block includes:
*/
  public SecondaryDisk?: Compute_DiskAsyncReplicationSecondaryDisk;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "SecondaryDisk",
        "The secondary disk (target of replication). You can specify only one value. Structure is documented below.\n\nThe `secondary_disk` block includes:",
        Compute_DiskAsyncReplicationSecondaryDisk_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "PrimaryDisk",
        "The primary disk (source of replication).",
        [],
        true,
        true,
      ),
    ];
  }
}
