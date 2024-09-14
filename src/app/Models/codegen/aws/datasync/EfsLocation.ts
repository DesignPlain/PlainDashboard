import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  datasync_EfsLocationEc2Config,
  datasync_EfsLocationEc2Config_GetTypes,
} from "../types/datasync_EfsLocationEc2Config";

export interface EfsLocationArgs {
  // Configuration block containing EC2 configurations for connecting to the EFS File System.
  ec2Config?: datasync_EfsLocationEc2Config;

  // Amazon Resource Name (ARN) of EFS File System.
  efsFileSystemArn?: string;

  // Specifies an Identity and Access Management (IAM) role that DataSync assumes when mounting the Amazon EFS file system.
  fileSystemAccessRoleArn?: string;

  // Specifies whether you want DataSync to use TLS encryption when transferring data to or from your Amazon EFS file system. Valid values are `NONE` and `TLS1_2`.
  inTransitEncryption?: string;

  // Subdirectory to perform actions as source or destination. Default `/`.
  subdirectory?: string;

  // Key-value pairs of resource tags to assign to the DataSync Location. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Specifies the Amazon Resource Name (ARN) of the access point that DataSync uses to access the Amazon EFS file system.
  accessPointArn?: string;
}
export class EfsLocation extends DS_Resource {
  // Specifies the Amazon Resource Name (ARN) of the access point that DataSync uses to access the Amazon EFS file system.
  public accessPointArn?: string;

  // Amazon Resource Name (ARN) of the DataSync Location.
  public arn?: string;

  // Configuration block containing EC2 configurations for connecting to the EFS File System.
  public ec2Config?: datasync_EfsLocationEc2Config;

  // Subdirectory to perform actions as source or destination. Default `/`.
  public subdirectory?: string;

  // Key-value pairs of resource tags to assign to the DataSync Location. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Amazon Resource Name (ARN) of EFS File System.
  public efsFileSystemArn?: string;

  // Specifies an Identity and Access Management (IAM) role that DataSync assumes when mounting the Amazon EFS file system.
  public fileSystemAccessRoleArn?: string;

  // Specifies whether you want DataSync to use TLS encryption when transferring data to or from your Amazon EFS file system. Valid values are `NONE` and `TLS1_2`.
  public inTransitEncryption?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  //
  public uri?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "efsFileSystemArn",
        "Amazon Resource Name (ARN) of EFS File System.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "fileSystemAccessRoleArn",
        "Specifies an Identity and Access Management (IAM) role that DataSync assumes when mounting the Amazon EFS file system.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "inTransitEncryption",
        "Specifies whether you want DataSync to use TLS encryption when transferring data to or from your Amazon EFS file system. Valid values are `NONE` and `TLS1_2`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "subdirectory",
        "Subdirectory to perform actions as source or destination. Default `/`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value pairs of resource tags to assign to the DataSync Location. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "accessPointArn",
        "Specifies the Amazon Resource Name (ARN) of the access point that DataSync uses to access the Amazon EFS file system.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ec2Config",
        "Configuration block containing EC2 configurations for connecting to the EFS File System.",
        () => datasync_EfsLocationEc2Config_GetTypes(),
        true,
        true,
      ),
    ];
  }
}
