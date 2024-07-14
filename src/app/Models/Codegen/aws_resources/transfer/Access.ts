import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  transfer_AccessHomeDirectoryMapping,
  transfer_AccessHomeDirectoryMapping_GetTypes,
} from "../types/transfer_AccessHomeDirectoryMapping";
import {
  transfer_AccessPosixProfile,
  transfer_AccessPosixProfile_GetTypes,
} from "../types/transfer_AccessPosixProfile";

export interface AccessArgs {
  // The Server ID of the Transfer Server (e.g., `s-12345678`)
  serverId?: string;

  // The SID of a group in the directory connected to the Transfer Server (e.g., `S-1-1-12-1234567890-123456789-1234567890-1234`)
  externalId?: string;

  // The landing directory (folder) for a user when they log in to the server using their SFTP client.  It should begin with a `/`.  The first item in the path is the name of the home bucket (accessible as `${Transfer:HomeBucket}` in the policy) and the rest is the home directory (accessible as `${Transfer:HomeDirectory}` in the policy). For example, `/example-bucket-1234/username` would set the home bucket to `example-bucket-1234` and the home directory to `username`.
  homeDirectory?: string;

  // Logical directory mappings that specify what S3 paths and keys should be visible to your user and how you want to make them visible. See Home Directory Mappings below.
  homeDirectoryMappings?: Array<transfer_AccessHomeDirectoryMapping>;

  // The type of landing directory (folder) you mapped for your users' home directory. Valid values are `PATH` and `LOGICAL`.
  homeDirectoryType?: string;

  // An IAM JSON policy document that scopes down user access to portions of their Amazon S3 bucket. IAM variables you can use inside this policy include `${Transfer:UserName}`, `${Transfer:HomeDirectory}`, and `${Transfer:HomeBucket}`. These are evaluated on-the-fly when navigating the bucket.
  policy?: string;

  // Specifies the full POSIX identity, including user ID (Uid), group ID (Gid), and any secondary groups IDs (SecondaryGids), that controls your users' access to your Amazon EFS file systems. See Posix Profile below.
  posixProfile?: transfer_AccessPosixProfile;

  // Amazon Resource Name (ARN) of an IAM role that allows the service to controls your user’s access to your Amazon S3 bucket.
  role?: string;
}
export class Access extends Resource {
  // The type of landing directory (folder) you mapped for your users' home directory. Valid values are `PATH` and `LOGICAL`.
  public homeDirectoryType?: string;

  // An IAM JSON policy document that scopes down user access to portions of their Amazon S3 bucket. IAM variables you can use inside this policy include `${Transfer:UserName}`, `${Transfer:HomeDirectory}`, and `${Transfer:HomeBucket}`. These are evaluated on-the-fly when navigating the bucket.
  public policy?: string;

  // Specifies the full POSIX identity, including user ID (Uid), group ID (Gid), and any secondary groups IDs (SecondaryGids), that controls your users' access to your Amazon EFS file systems. See Posix Profile below.
  public posixProfile?: transfer_AccessPosixProfile;

  // Amazon Resource Name (ARN) of an IAM role that allows the service to controls your user’s access to your Amazon S3 bucket.
  public role?: string;

  // The Server ID of the Transfer Server (e.g., `s-12345678`)
  public serverId?: string;

  // The SID of a group in the directory connected to the Transfer Server (e.g., `S-1-1-12-1234567890-123456789-1234567890-1234`)
  public externalId?: string;

  // The landing directory (folder) for a user when they log in to the server using their SFTP client.  It should begin with a `/`.  The first item in the path is the name of the home bucket (accessible as `${Transfer:HomeBucket}` in the policy) and the rest is the home directory (accessible as `${Transfer:HomeDirectory}` in the policy). For example, `/example-bucket-1234/username` would set the home bucket to `example-bucket-1234` and the home directory to `username`.
  public homeDirectory?: string;

  // Logical directory mappings that specify what S3 paths and keys should be visible to your user and how you want to make them visible. See Home Directory Mappings below.
  public homeDirectoryMappings?: Array<transfer_AccessHomeDirectoryMapping>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "policy",
        "An IAM JSON policy document that scopes down user access to portions of their Amazon S3 bucket. IAM variables you can use inside this policy include `${Transfer:UserName}`, `${Transfer:HomeDirectory}`, and `${Transfer:HomeBucket}`. These are evaluated on-the-fly when navigating the bucket.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "posixProfile",
        "Specifies the full POSIX identity, including user ID (Uid), group ID (Gid), and any secondary groups IDs (SecondaryGids), that controls your users' access to your Amazon EFS file systems. See Posix Profile below.",
        transfer_AccessPosixProfile_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "role",
        "Amazon Resource Name (ARN) of an IAM role that allows the service to controls your user’s access to your Amazon S3 bucket.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serverId",
        "The Server ID of the Transfer Server (e.g., `s-12345678`)",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "externalId",
        "The SID of a group in the directory connected to the Transfer Server (e.g., `S-1-1-12-1234567890-123456789-1234567890-1234`)",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "homeDirectory",
        "The landing directory (folder) for a user when they log in to the server using their SFTP client.  It should begin with a `/`.  The first item in the path is the name of the home bucket (accessible as `${Transfer:HomeBucket}` in the policy) and the rest is the home directory (accessible as `${Transfer:HomeDirectory}` in the policy). For example, `/example-bucket-1234/username` would set the home bucket to `example-bucket-1234` and the home directory to `username`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "homeDirectoryMappings",
        "Logical directory mappings that specify what S3 paths and keys should be visible to your user and how you want to make them visible. See Home Directory Mappings below.",
        transfer_AccessHomeDirectoryMapping_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "homeDirectoryType",
        "The type of landing directory (folder) you mapped for your users' home directory. Valid values are `PATH` and `LOGICAL`.",
        [],
        false,
        false,
      ),
    ];
  }
}
