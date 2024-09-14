import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface LocationFsxLustreArgs {
  // Subdirectory to perform actions as source or destination.
  subdirectory?: string;

  // Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The Amazon Resource Name (ARN) for the FSx for Lustre file system.
  fsxFilesystemArn?: string;

  // The Amazon Resource Names (ARNs) of the security groups that are to use to configure the FSx for Lustre file system.
  securityGroupArns?: Array<string>;
}
export class LocationFsxLustre extends DS_Resource {
  // The Amazon Resource Names (ARNs) of the security groups that are to use to configure the FSx for Lustre file system.
  public securityGroupArns?: Array<string>;

  // Subdirectory to perform actions as source or destination.
  public subdirectory?: string;

  // Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The URL of the FSx for Lustre location that was described.
  public uri?: string;

  // Amazon Resource Name (ARN) of the DataSync Location.
  public arn?: string;

  // The time that the FSx for Lustre location was created.
  public creationTime?: string;

  // The Amazon Resource Name (ARN) for the FSx for Lustre file system.
  public fsxFilesystemArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "subdirectory",
        "Subdirectory to perform actions as source or destination.",
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
      new DynamicUIProps(
        InputType.String,
        "fsxFilesystemArn",
        "The Amazon Resource Name (ARN) for the FSx for Lustre file system.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "securityGroupArns",
        "The Amazon Resource Names (ARNs) of the security groups that are to use to configure the FSx for Lustre file system.",
        () => InputType_String_GetTypes(),
        true,
        true,
      ),
    ];
  }
}
