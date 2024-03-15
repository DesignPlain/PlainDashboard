import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { DiskAsyncReplicationSecondaryDisk } from "../types/DiskAsyncReplicationSecondaryDisk";

export interface DiskAsyncReplicationArgs {
  // The primary disk (source of replication).
  PrimaryDisk?: string;

  /*
The secondary disk (target of replication). You can specify only one value. Structure is documented below.

The `secondary_disk` block includes:
*/
  SecondaryDisk?: DiskAsyncReplicationSecondaryDisk;
}
export class DiskAsyncReplication extends Resource {
  // The primary disk (source of replication).
  public PrimaryDisk?: string;

  /*
The secondary disk (target of replication). You can specify only one value. Structure is documented below.

The `secondary_disk` block includes:
*/
  public SecondaryDisk?: DiskAsyncReplicationSecondaryDisk;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "PrimaryDisk",
        "The primary disk (source of replication).",
      ),
      new DynamicUIProps(
        InputType.String,
        "SecondaryDisk",
        "The secondary disk (target of replication). You can specify only one value. Structure is documented below.\n\nThe `secondary_disk` block includes:",
      ),
    ];
  }
}
