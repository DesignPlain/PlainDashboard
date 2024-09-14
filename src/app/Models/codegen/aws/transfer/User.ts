import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  transfer_UserPosixProfile,
  transfer_UserPosixProfile_GetTypes,
} from "../types/transfer_UserPosixProfile";
import {
  transfer_UserHomeDirectoryMapping,
  transfer_UserHomeDirectoryMapping_GetTypes,
} from "../types/transfer_UserHomeDirectoryMapping";

export interface UserArgs {
  // Specifies the full POSIX identity, including user ID (Uid), group ID (Gid), and any secondary groups IDs (SecondaryGids), that controls your users' access to your Amazon EFS file systems. See Posix Profile below.
  posixProfile?: transfer_UserPosixProfile;

  // The Server ID of the Transfer Server (e.g., `s-12345678`)
  serverId?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The name used for log in to your SFTP server.
  userName?: string;

  // The landing directory (folder) for a user when they log in to the server using their SFTP client.  It should begin with a `/`.  The first item in the path is the name of the home bucket (accessible as `${Transfer:HomeBucket}` in the policy) and the rest is the home directory (accessible as `${Transfer:HomeDirectory}` in the policy). For example, `/example-bucket-1234/username` would set the home bucket to `example-bucket-1234` and the home directory to `username`.
  homeDirectory?: string;

  // Logical directory mappings that specify what S3 paths and keys should be visible to your user and how you want to make them visible. See Home Directory Mappings below.
  homeDirectoryMappings?: Array<transfer_UserHomeDirectoryMapping>;

  // The type of landing directory (folder) you mapped for your users' home directory. Valid values are `PATH` and `LOGICAL`.
  homeDirectoryType?: string;

  // An IAM JSON policy document that scopes down user access to portions of their Amazon S3 bucket. IAM variables you can use inside this policy include `${Transfer:UserName}`, `${Transfer:HomeDirectory}`, and `${Transfer:HomeBucket}`. These are evaluated on-the-fly when navigating the bucket.
  policy?: string;

  // Amazon Resource Name (ARN) of an IAM role that allows the service to control your user’s access to your Amazon S3 bucket.
  role?: string;
}
export class User extends DS_Resource {
  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The name used for log in to your SFTP server.
  public userName?: string;

  // The landing directory (folder) for a user when they log in to the server using their SFTP client.  It should begin with a `/`.  The first item in the path is the name of the home bucket (accessible as `${Transfer:HomeBucket}` in the policy) and the rest is the home directory (accessible as `${Transfer:HomeDirectory}` in the policy). For example, `/example-bucket-1234/username` would set the home bucket to `example-bucket-1234` and the home directory to `username`.
  public homeDirectory?: string;

  // Logical directory mappings that specify what S3 paths and keys should be visible to your user and how you want to make them visible. See Home Directory Mappings below.
  public homeDirectoryMappings?: Array<transfer_UserHomeDirectoryMapping>;

  // An IAM JSON policy document that scopes down user access to portions of their Amazon S3 bucket. IAM variables you can use inside this policy include `${Transfer:UserName}`, `${Transfer:HomeDirectory}`, and `${Transfer:HomeBucket}`. These are evaluated on-the-fly when navigating the bucket.
  public policy?: string;

  // Specifies the full POSIX identity, including user ID (Uid), group ID (Gid), and any secondary groups IDs (SecondaryGids), that controls your users' access to your Amazon EFS file systems. See Posix Profile below.
  public posixProfile?: transfer_UserPosixProfile;

  // Amazon Resource Name (ARN) of an IAM role that allows the service to control your user’s access to your Amazon S3 bucket.
  public role?: string;

  // The Server ID of the Transfer Server (e.g., `s-12345678`)
  public serverId?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Amazon Resource Name (ARN) of Transfer User
  public arn?: string;

  // The type of landing directory (folder) you mapped for your users' home directory. Valid values are `PATH` and `LOGICAL`.
  public homeDirectoryType?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "serverId",
        "The Server ID of the Transfer Server (e.g., `s-12345678`)",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "userName",
        "The name used for log in to your SFTP server.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "homeDirectoryType",
        "The type of landing directory (folder) you mapped for your users' home directory. Valid values are `PATH` and `LOGICAL`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "policy",
        "An IAM JSON policy document that scopes down user access to portions of their Amazon S3 bucket. IAM variables you can use inside this policy include `${Transfer:UserName}`, `${Transfer:HomeDirectory}`, and `${Transfer:HomeBucket}`. These are evaluated on-the-fly when navigating the bucket.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "posixProfile",
        "Specifies the full POSIX identity, including user ID (Uid), group ID (Gid), and any secondary groups IDs (SecondaryGids), that controls your users' access to your Amazon EFS file systems. See Posix Profile below.",
        () => transfer_UserPosixProfile_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "homeDirectory",
        "The landing directory (folder) for a user when they log in to the server using their SFTP client.  It should begin with a `/`.  The first item in the path is the name of the home bucket (accessible as `${Transfer:HomeBucket}` in the policy) and the rest is the home directory (accessible as `${Transfer:HomeDirectory}` in the policy). For example, `/example-bucket-1234/username` would set the home bucket to `example-bucket-1234` and the home directory to `username`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "homeDirectoryMappings",
        "Logical directory mappings that specify what S3 paths and keys should be visible to your user and how you want to make them visible. See Home Directory Mappings below.",
        () => transfer_UserHomeDirectoryMapping_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "role",
        "Amazon Resource Name (ARN) of an IAM role that allows the service to control your user’s access to your Amazon S3 bucket.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
