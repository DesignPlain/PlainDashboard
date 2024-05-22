import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface workstations_WorkstationConfigPersistentDirectoryGcePd {
  // Type of file system that the disk should be formatted with. The workstation image must support this file system type. Must be empty if `sourceSnapshot` is set. Defaults to `ext4`.
  fsType?: string;

  /*
Whether the persistent disk should be deleted when the workstation is deleted. Valid values are `DELETE` and `RETAIN`. Defaults to `DELETE`.
Possible values are: `DELETE`, `RETAIN`.
*/
  reclaimPolicy?: string;

  /*
The GB capacity of a persistent home directory for each workstation created with this configuration. Must be empty if `sourceSnapshot` is set.
Valid values are `10`, `50`, `100`, `200`, `500`, or `1000`. Defaults to `200`. If less than `200` GB, the `diskType` must be `pd-balanced` or `pd-ssd`.
*/
  sizeGb?: number;

  // Name of the snapshot to use as the source for the disk. This can be the snapshot's `self_link`, `id`, or a string in the format of `projects/{project}/global/snapshots/{snapshot}`. If set, `sizeGb` and `fsType` must be empty. Can only be updated if it has an existing value.
  sourceSnapshot?: string;

  // The type of the persistent disk for the home directory. Defaults to `pd-standard`.
  diskType?: string;
}

export function workstations_WorkstationConfigPersistentDirectoryGcePd_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "fsType",
      "Type of file system that the disk should be formatted with. The workstation image must support this file system type. Must be empty if `sourceSnapshot` is set. Defaults to `ext4`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "reclaimPolicy",
      "Whether the persistent disk should be deleted when the workstation is deleted. Valid values are `DELETE` and `RETAIN`. Defaults to `DELETE`.\nPossible values are: `DELETE`, `RETAIN`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "sizeGb",
      "The GB capacity of a persistent home directory for each workstation created with this configuration. Must be empty if `sourceSnapshot` is set.\nValid values are `10`, `50`, `100`, `200`, `500`, or `1000`. Defaults to `200`. If less than `200` GB, the `diskType` must be `pd-balanced` or `pd-ssd`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceSnapshot",
      "Name of the snapshot to use as the source for the disk. This can be the snapshot's `self_link`, `id`, or a string in the format of `projects/{project}/global/snapshots/{snapshot}`. If set, `sizeGb` and `fsType` must be empty. Can only be updated if it has an existing value.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "diskType",
      "The type of the persistent disk for the home directory. Defaults to `pd-standard`.",
      [],
      false,
      true,
    ),
  ];
}
