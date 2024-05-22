import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface rds_ClusterRestoreToPointInTime {
  // Set to true to restore the database cluster to the latest restorable backup time. Defaults to false. Conflicts with `restore_to_time`.
  useLatestRestorableTime?: boolean;

  // Date and time in UTC format to restore the database cluster to. Conflicts with `use_latest_restorable_time`.
  restoreToTime?: string;

  /*
Type of restore to be performed.
Valid options are `full-copy` (default) and `copy-on-write`.
*/
  restoreType?: string;

  // Identifier of the source database cluster from which to restore. When restoring from a cluster in another AWS account, the identifier is the ARN of that cluster.
  sourceClusterIdentifier?: string;
}

export function rds_ClusterRestoreToPointInTime_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "useLatestRestorableTime",
      "Set to true to restore the database cluster to the latest restorable backup time. Defaults to false. Conflicts with `restore_to_time`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "restoreToTime",
      "Date and time in UTC format to restore the database cluster to. Conflicts with `use_latest_restorable_time`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "restoreType",
      "Type of restore to be performed.\nValid options are `full-copy` (default) and `copy-on-write`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceClusterIdentifier",
      "Identifier of the source database cluster from which to restore. When restoring from a cluster in another AWS account, the identifier is the ARN of that cluster.",
      [],
      true,
      true,
    ),
  ];
}
