import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface docdb_ClusterRestoreToPointInTime {
  // The identifier of the source DB cluster from which to restore. Must match the identifier of an existing DB cluster.
  sourceClusterIdentifier?: string;

  // A boolean value that indicates whether the DB cluster is restored from the latest backup time. Defaults to `false`. Cannot be specified with `restore_to_time`.
  useLatestRestorableTime?: boolean;

  // The date and time to restore from. Value must be a time in Universal Coordinated Time (UTC) format and must be before the latest restorable time for the DB instance. Cannot be specified with `use_latest_restorable_time`.
  restoreToTime?: string;

  // The type of restore to be performed. Valid values are `full-copy`, `copy-on-write`.
  restoreType?: string;
}

export function docdb_ClusterRestoreToPointInTime_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "sourceClusterIdentifier",
      "The identifier of the source DB cluster from which to restore. Must match the identifier of an existing DB cluster.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "useLatestRestorableTime",
      "A boolean value that indicates whether the DB cluster is restored from the latest backup time. Defaults to `false`. Cannot be specified with `restore_to_time`.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "restoreToTime",
      "The date and time to restore from. Value must be a time in Universal Coordinated Time (UTC) format and must be before the latest restorable time for the DB instance. Cannot be specified with `use_latest_restorable_time`.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "restoreType",
      "The type of restore to be performed. Valid values are `full-copy`, `copy-on-write`.",
      () => [],
      false,
      true,
    ),
  ];
}
