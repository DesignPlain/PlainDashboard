import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ebs_FastSnapshotRestoreTimeouts,
  ebs_FastSnapshotRestoreTimeouts_GetTypes,
} from "../types/ebs_FastSnapshotRestoreTimeouts";

export interface FastSnapshotRestoreArgs {
  // ID of the snapshot.
  snapshotId?: string;

  //
  timeouts?: ebs_FastSnapshotRestoreTimeouts;

  // Availability zone in which to enable fast snapshot restores.
  availabilityZone?: string;
}
export class FastSnapshotRestore extends DS_Resource {
  //
  public timeouts?: ebs_FastSnapshotRestoreTimeouts;

  // Availability zone in which to enable fast snapshot restores.
  public availabilityZone?: string;

  // ID of the snapshot.
  public snapshotId?: string;

  // State of fast snapshot restores. Valid values are `enabling`, `optimizing`, `enabled`, `disabling`, `disabled`.
  public state?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "snapshotId",
        "ID of the snapshot.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        () => ebs_FastSnapshotRestoreTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "availabilityZone",
        "Availability zone in which to enable fast snapshot restores.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
