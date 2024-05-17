import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_ResourcePolicySnapshotSchedulePolicyRetentionPolicy {
  // Maximum age of the snapshot that is allowed to be kept.
  MaxRetentionDays?: number;

  /*
Specifies the behavior to apply to scheduled snapshots when
the source disk is deleted.
Default value is `KEEP_AUTO_SNAPSHOTS`.
Possible values are: `KEEP_AUTO_SNAPSHOTS`, `APPLY_RETENTION_POLICY`.
*/
  OnSourceDiskDelete?: string;
}

export function Compute_ResourcePolicySnapshotSchedulePolicyRetentionPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "MaxRetentionDays",
      "Maximum age of the snapshot that is allowed to be kept.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "OnSourceDiskDelete",
      "Specifies the behavior to apply to scheduled snapshots when\nthe source disk is deleted.\nDefault value is `KEEP_AUTO_SNAPSHOTS`.\nPossible values are: `KEEP_AUTO_SNAPSHOTS`, `APPLY_RETENTION_POLICY`.",
      [],
      false,
      true,
    ),
  ];
}
