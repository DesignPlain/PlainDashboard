import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  datasync_LocationFsxOntapFileSystemProtocol,
  datasync_LocationFsxOntapFileSystemProtocol_GetTypes,
} from "../types/datasync_LocationFsxOntapFileSystemProtocol";

export interface LocationFsxOntapFileSystemArgs {
  // The data transfer protocol that DataSync uses to access your Amazon FSx file system. See Protocol below.
  protocol?: datasync_LocationFsxOntapFileSystemProtocol;

  /*
The security groups that provide access to your file system's preferred subnet. The security groups must allow outbbound traffic on the following ports (depending on the protocol you use):
- Network File System (NFS): TCP ports 111, 635, and 2049
- Server Message Block (SMB): TCP port 445
*/
  securityGroupArns?: Array<string>;

  /*
The ARN of the SVM in your file system where you want to copy data to of from.

The following arguments are optional:
*/
  storageVirtualMachineArn?: string;

  // Path to the file share in the SVM where you'll copy your data. You can specify a junction path (also known as a mount point), qtree path (for NFS file shares), or share name (for SMB file shares) (e.g. `/vol1`, `/vol1/tree1`, `share1`).
  subdirectory?: string;

  // Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class LocationFsxOntapFileSystem extends DS_Resource {
  /*
The ARN of the SVM in your file system where you want to copy data to of from.

The following arguments are optional:
*/
  public storageVirtualMachineArn?: string;

  //
  public tagsAll?: Map<string, string>;

  // URI of the FSx ONTAP file system location
  public uri?: string;

  /*
The security groups that provide access to your file system's preferred subnet. The security groups must allow outbbound traffic on the following ports (depending on the protocol you use):
- Network File System (NFS): TCP ports 111, 635, and 2049
- Server Message Block (SMB): TCP port 445
*/
  public securityGroupArns?: Array<string>;

  // Path to the file share in the SVM where you'll copy your data. You can specify a junction path (also known as a mount point), qtree path (for NFS file shares), or share name (for SMB file shares) (e.g. `/vol1`, `/vol1/tree1`, `share1`).
  public subdirectory?: string;

  // Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // ARN of the DataSync Location for the FSx Ontap File System.
  public arn?: string;

  //
  public creationTime?: string;

  // ARN of the FSx Ontap File System.
  public fsxFilesystemArn?: string;

  // The data transfer protocol that DataSync uses to access your Amazon FSx file system. See Protocol below.
  public protocol?: datasync_LocationFsxOntapFileSystemProtocol;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "protocol",
        "The data transfer protocol that DataSync uses to access your Amazon FSx file system. See Protocol below.",
        () => datasync_LocationFsxOntapFileSystemProtocol_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "securityGroupArns",
        "The security groups that provide access to your file system's preferred subnet. The security groups must allow outbbound traffic on the following ports (depending on the protocol you use):\n* Network File System (NFS): TCP ports 111, 635, and 2049\n* Server Message Block (SMB): TCP port 445",
        () => InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "storageVirtualMachineArn",
        "The ARN of the SVM in your file system where you want to copy data to of from.\n\nThe following arguments are optional:",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "subdirectory",
        "Path to the file share in the SVM where you'll copy your data. You can specify a junction path (also known as a mount point), qtree path (for NFS file shares), or share name (for SMB file shares) (e.g. `/vol1`, `/vol1/tree1`, `share1`).",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
