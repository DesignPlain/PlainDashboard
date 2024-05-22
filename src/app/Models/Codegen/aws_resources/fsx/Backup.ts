import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface BackupArgs {
  // The ID of the file system to back up. Required if backing up Lustre or Windows file systems.
  fileSystemId?: string;

  // A map of tags to assign to the file system. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level. If you have set `copy_tags_to_backups` to true, and you specify one or more tags, no existing file system tags are copied from the file system to the backup.
  tags?: Map<string, string>;

  // The ID of the volume to back up. Required if backing up a ONTAP Volume.
  volumeId?: string;
}
export class Backup extends Resource {
  // The ID of the volume to back up. Required if backing up a ONTAP Volume.
  public volumeId?: string;

  // Amazon Resource Name of the backup.
  public arn?: string;

  // The ID of the file system to back up. Required if backing up Lustre or Windows file systems.
  public fileSystemId?: string;

  // The ID of the AWS Key Management Service (AWS KMS) key used to encrypt the backup of the Amazon FSx file system's data at rest.
  public kmsKeyId?: string;

  // AWS account identifier that created the file system.
  public ownerId?: string;

  // A map of tags to assign to the file system. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level. If you have set `copy_tags_to_backups` to true, and you specify one or more tags, no existing file system tags are copied from the file system to the backup.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The type of the file system backup.
  public type?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "volumeId",
        "The ID of the volume to back up. Required if backing up a ONTAP Volume.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "fileSystemId",
        "The ID of the file system to back up. Required if backing up Lustre or Windows file systems.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the file system. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level. If you have set `copy_tags_to_backups` to true, and you specify one or more tags, no existing file system tags are copied from the file system to the backup.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
