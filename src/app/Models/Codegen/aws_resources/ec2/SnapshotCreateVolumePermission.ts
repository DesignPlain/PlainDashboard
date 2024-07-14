import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface SnapshotCreateVolumePermissionArgs {
  // An AWS Account ID to add create volume permissions. The AWS Account cannot be the snapshot's owner
  accountId?: string;

  // A snapshot ID
  snapshotId?: string;
}
export class SnapshotCreateVolumePermission extends Resource {
  // An AWS Account ID to add create volume permissions. The AWS Account cannot be the snapshot's owner
  public accountId?: string;

  // A snapshot ID
  public snapshotId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "snapshotId",
        "A snapshot ID",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "accountId",
        "An AWS Account ID to add create volume permissions. The AWS Account cannot be the snapshot's owner",
        [],
        true,
        true,
      ),
    ];
  }
}
