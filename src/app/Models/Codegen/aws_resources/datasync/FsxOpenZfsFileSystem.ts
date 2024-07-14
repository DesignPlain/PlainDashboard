import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  datasync_FsxOpenZfsFileSystemProtocol,
  datasync_FsxOpenZfsFileSystemProtocol_GetTypes,
} from "../types/datasync_FsxOpenZfsFileSystemProtocol";

export interface FsxOpenZfsFileSystemArgs {
  // The Amazon Resource Name (ARN) for the FSx for OpenZfs file system.
  fsxFilesystemArn?: string;

  // The type of protocol that DataSync uses to access your file system. See below.
  protocol?: datasync_FsxOpenZfsFileSystemProtocol;

  // The Amazon Resource Names (ARNs) of the security groups that are to use to configure the FSx for openzfs file system.
  securityGroupArns?: Array<string>;

  // Subdirectory to perform actions as source or destination. Must start with `/fsx`.
  subdirectory?: string;

  // Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class FsxOpenZfsFileSystem extends Resource {
  // The type of protocol that DataSync uses to access your file system. See below.
  public protocol?: datasync_FsxOpenZfsFileSystemProtocol;

  // Subdirectory to perform actions as source or destination. Must start with `/fsx`.
  public subdirectory?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Amazon Resource Name (ARN) of the DataSync Location.
  public arn?: string;

  // The time that the FSx for openzfs location was created.
  public creationTime?: string;

  // The Amazon Resource Name (ARN) for the FSx for OpenZfs file system.
  public fsxFilesystemArn?: string;

  // The Amazon Resource Names (ARNs) of the security groups that are to use to configure the FSx for openzfs file system.
  public securityGroupArns?: Array<string>;

  // Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The URL of the FSx for openzfs location that was described.
  public uri?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "fsxFilesystemArn",
        "The Amazon Resource Name (ARN) for the FSx for OpenZfs file system.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "protocol",
        "The type of protocol that DataSync uses to access your file system. See below.",
        datasync_FsxOpenZfsFileSystemProtocol_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "securityGroupArns",
        "The Amazon Resource Names (ARNs) of the security groups that are to use to configure the FSx for openzfs file system.",
        InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "subdirectory",
        "Subdirectory to perform actions as source or destination. Must start with `/fsx`.",
        [],
        false,
        true,
      ),
    ];
  }
}
