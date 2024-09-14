import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appstream_ImageBuilderVpcConfig,
  appstream_ImageBuilderVpcConfig_GetTypes,
} from "../types/appstream_ImageBuilderVpcConfig";
import {
  appstream_ImageBuilderDomainJoinInfo,
  appstream_ImageBuilderDomainJoinInfo_GetTypes,
} from "../types/appstream_ImageBuilderDomainJoinInfo";
import {
  appstream_ImageBuilderAccessEndpoint,
  appstream_ImageBuilderAccessEndpoint_GetTypes,
} from "../types/appstream_ImageBuilderAccessEndpoint";

export interface ImageBuilderArgs {
  // Configuration block for the VPC configuration for the image builder. See below.
  vpcConfig?: appstream_ImageBuilderVpcConfig;

  // Configuration block for the name of the directory and organizational unit (OU) to use to join the image builder to a Microsoft Active Directory domain. See below.
  domainJoinInfo?: appstream_ImageBuilderDomainJoinInfo;

  // Enables or disables default internet access for the image builder.
  enableDefaultInternetAccess?: boolean;

  // ARN of the IAM role to apply to the image builder.
  iamRoleArn?: string;

  // Instance type to use when launching the image builder.
  instanceType?: string;

  /*
Unique name for the image builder.

The following arguments are optional:
*/
  name?: string;

  // Map of tags to assign to the instance. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Set of interface VPC endpoint (interface endpoint) objects. Maximum of 4. See below.
  accessEndpoints?: Array<appstream_ImageBuilderAccessEndpoint>;

  // Version of the AppStream 2.0 agent to use for this image builder.
  appstreamAgentVersion?: string;

  // Description to display.
  description?: string;

  // Human-readable friendly name for the AppStream image builder.
  displayName?: string;

  // ARN of the public, private, or shared image to use.
  imageArn?: string;

  // Name of the image used to create the image builder.
  imageName?: string;
}
export class ImageBuilder extends DS_Resource {
  // ARN of the IAM role to apply to the image builder.
  public iamRoleArn?: string;

  // Map of tags to assign to the instance. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Enables or disables default internet access for the image builder.
  public enableDefaultInternetAccess?: boolean;

  // Instance type to use when launching the image builder.
  public instanceType?: string;

  // Version of the AppStream 2.0 agent to use for this image builder.
  public appstreamAgentVersion?: string;

  // Description to display.
  public description?: string;

  // Configuration block for the name of the directory and organizational unit (OU) to use to join the image builder to a Microsoft Active Directory domain. See below.
  public domainJoinInfo?: appstream_ImageBuilderDomainJoinInfo;

  // Human-readable friendly name for the AppStream image builder.
  public displayName?: string;

  // ARN of the public, private, or shared image to use.
  public imageArn?: string;

  /*
Unique name for the image builder.

The following arguments are optional:
*/
  public name?: string;

  // Configuration block for the VPC configuration for the image builder. See below.
  public vpcConfig?: appstream_ImageBuilderVpcConfig;

  // Set of interface VPC endpoint (interface endpoint) objects. Maximum of 4. See below.
  public accessEndpoints?: Array<appstream_ImageBuilderAccessEndpoint>;

  // ARN of the appstream image builder.
  public arn?: string;

  // Date and time, in UTC and extended RFC 3339 format, when the image builder was created.
  public createdTime?: string;

  // Name of the image used to create the image builder.
  public imageName?: string;

  // State of the image builder. For valid values, refer to the [AWS documentation](https://docs.aws.amazon.com/appstream2/latest/APIReference/API_ImageBuilder.html#AppStream2-Type-ImageBuilder-State).
  public state?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "vpcConfig",
        "Configuration block for the VPC configuration for the image builder. See below.",
        () => appstream_ImageBuilderVpcConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableDefaultInternetAccess",
        "Enables or disables default internet access for the image builder.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceType",
        "Instance type to use when launching the image builder.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the instance. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "imageArn",
        "ARN of the public, private, or shared image to use.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "domainJoinInfo",
        "Configuration block for the name of the directory and organizational unit (OU) to use to join the image builder to a Microsoft Active Directory domain. See below.",
        () => appstream_ImageBuilderDomainJoinInfo_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "iamRoleArn",
        "ARN of the IAM role to apply to the image builder.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Unique name for the image builder.\n\nThe following arguments are optional:",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "accessEndpoints",
        "Set of interface VPC endpoint (interface endpoint) objects. Maximum of 4. See below.",
        () => appstream_ImageBuilderAccessEndpoint_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "appstreamAgentVersion",
        "Version of the AppStream 2.0 agent to use for this image builder.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description to display.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "Human-readable friendly name for the AppStream image builder.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "imageName",
        "Name of the image used to create the image builder.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
