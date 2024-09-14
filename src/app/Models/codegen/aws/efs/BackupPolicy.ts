import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  efs_BackupPolicyBackupPolicy,
  efs_BackupPolicyBackupPolicy_GetTypes,
} from "../types/efs_BackupPolicyBackupPolicy";

export interface BackupPolicyArgs {
  // A backup_policy object (documented below).
  backupPolicy?: efs_BackupPolicyBackupPolicy;

  // The ID of the EFS file system.
  fileSystemId?: string;
}
export class BackupPolicy extends DS_Resource {
  // A backup_policy object (documented below).
  public backupPolicy?: efs_BackupPolicyBackupPolicy;

  // The ID of the EFS file system.
  public fileSystemId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "backupPolicy",
        "A backup_policy object (documented below).",
        () => efs_BackupPolicyBackupPolicy_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "fileSystemId",
        "The ID of the EFS file system.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
