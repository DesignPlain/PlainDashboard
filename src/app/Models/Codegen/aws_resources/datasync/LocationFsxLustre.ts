import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface LocationFsxLustreArgs {
  // Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The Amazon Resource Name (ARN) for the FSx for Lustre file system.
  fsxFilesystemArn?: string;

  // The Amazon Resource Names (ARNs) of the security groups that are to use to configure the FSx for Lustre file system.
  securityGroupArns?: Array<string>;

  // Subdirectory to perform actions as source or destination.
  subdirectory?: string;
}
export class LocationFsxLustre extends Resource {
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

  // The Amazon Resource Names (ARNs) of the security groups that are to use to configure the FSx for Lustre file system.
  public securityGroupArns?: Array<string>;

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
        "The Amazon Resource Name (ARN) for the FSx for Lustre file system.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "securityGroupArns",
        "The Amazon Resource Names (ARNs) of the security groups that are to use to configure the FSx for Lustre file system.",
        InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "subdirectory",
        "Subdirectory to perform actions as source or destination.",
        [],
        false,
        true,
      ),
    ];
  }
}
