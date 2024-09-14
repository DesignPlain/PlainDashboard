import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface SnapshotCopyArgs {
  // Identifier of the source cluster.
  clusterIdentifier?: string;

  /*
AWS Region to copy snapshots to.

The following arguments are optional:
*/
  destinationRegion?: string;

  // Number of days to retain newly copied snapshots in the destination AWS Region after they are copied from the source AWS Region. If the value is `-1`, the manual snapshot is retained indefinitely.
  manualSnapshotRetentionPeriod?: number;

  // Number of days to retain automated snapshots in the destination region after they are copied from the source region.
  retentionPeriod?: number;

  // Name of the snapshot copy grant to use when snapshots of an AWS KMS-encrypted cluster are copied to the destination region.
  snapshotCopyGrantName?: string;
}
export class SnapshotCopy extends DS_Resource {
  // Name of the snapshot copy grant to use when snapshots of an AWS KMS-encrypted cluster are copied to the destination region.
  public snapshotCopyGrantName?: string;

  // Identifier of the source cluster.
  public clusterIdentifier?: string;

  /*
AWS Region to copy snapshots to.

The following arguments are optional:
*/
  public destinationRegion?: string;

  // Number of days to retain newly copied snapshots in the destination AWS Region after they are copied from the source AWS Region. If the value is `-1`, the manual snapshot is retained indefinitely.
  public manualSnapshotRetentionPeriod?: number;

  // Number of days to retain automated snapshots in the destination region after they are copied from the source region.
  public retentionPeriod?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "snapshotCopyGrantName",
        "Name of the snapshot copy grant to use when snapshots of an AWS KMS-encrypted cluster are copied to the destination region.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "clusterIdentifier",
        "Identifier of the source cluster.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "destinationRegion",
        "AWS Region to copy snapshots to.\n\nThe following arguments are optional:",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "manualSnapshotRetentionPeriod",
        "Number of days to retain newly copied snapshots in the destination AWS Region after they are copied from the source AWS Region. If the value is `-1`, the manual snapshot is retained indefinitely.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "retentionPeriod",
        "Number of days to retain automated snapshots in the destination region after they are copied from the source region.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
