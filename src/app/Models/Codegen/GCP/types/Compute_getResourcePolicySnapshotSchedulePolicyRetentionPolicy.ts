import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getResourcePolicySnapshotSchedulePolicyRetentionPolicy {
  // Maximum age of the snapshot that is allowed to be kept.
  MaxRetentionDays?: number;

  /*
Specifies the behavior to apply to scheduled snapshots when
the source disk is deleted. Default value: "KEEP_AUTO_SNAPSHOTS" Possible values: ["KEEP_AUTO_SNAPSHOTS", "APPLY_RETENTION_POLICY"]
*/
  OnSourceDiskDelete?: string;
}

export function Compute_getResourcePolicySnapshotSchedulePolicyRetentionPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "MaxRetentionDays",
      "Maximum age of the snapshot that is allowed to be kept.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "OnSourceDiskDelete",
      'Specifies the behavior to apply to scheduled snapshots when\nthe source disk is deleted. Default value: "KEEP_AUTO_SNAPSHOTS" Possible values: ["KEEP_AUTO_SNAPSHOTS", "APPLY_RETENTION_POLICY"]',
      [],
      true,
      false,
    ),
  ];
}
