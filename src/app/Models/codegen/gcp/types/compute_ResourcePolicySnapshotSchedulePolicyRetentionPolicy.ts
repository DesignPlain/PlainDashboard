import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_ResourcePolicySnapshotSchedulePolicyRetentionPolicy {
  // Maximum age of the snapshot that is allowed to be kept.
  maxRetentionDays?: number;

  /*
Specifies the behavior to apply to scheduled snapshots when
the source disk is deleted.
Default value is `KEEP_AUTO_SNAPSHOTS`.
Possible values are: `KEEP_AUTO_SNAPSHOTS`, `APPLY_RETENTION_POLICY`.
*/
  onSourceDiskDelete?: string;
}

export function compute_ResourcePolicySnapshotSchedulePolicyRetentionPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'onSourceDiskDelete',
      'Specifies the behavior to apply to scheduled snapshots when\nthe source disk is deleted.\nDefault value is `KEEP_AUTO_SNAPSHOTS`.\nPossible values are: `KEEP_AUTO_SNAPSHOTS`, `APPLY_RETENTION_POLICY`.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      'maxRetentionDays',
      'Maximum age of the snapshot that is allowed to be kept.',
      () => [],
      true,
      true,
    ),
  ];
}
