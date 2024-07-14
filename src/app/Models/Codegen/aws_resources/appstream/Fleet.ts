import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appstream_FleetVpcConfig,
  appstream_FleetVpcConfig_GetTypes,
} from "../types/appstream_FleetVpcConfig";
import {
  appstream_FleetDomainJoinInfo,
  appstream_FleetDomainJoinInfo_GetTypes,
} from "../types/appstream_FleetDomainJoinInfo";
import {
  appstream_FleetComputeCapacity,
  appstream_FleetComputeCapacity_GetTypes,
} from "../types/appstream_FleetComputeCapacity";

export interface FleetArgs {
  // Enables or disables default internet access for the fleet.
  enableDefaultInternetAccess?: boolean;

  // ARN of the public, private, or shared image to use.
  imageArn?: string;

  // Instance type to use when launching fleet instances.
  instanceType?: string;

  // Maximum amount of time that a streaming session can remain active, in seconds.
  maxUserDurationInSeconds?: number;

  // Configuration block for the VPC configuration for the image builder. See below.
  vpcConfig?: appstream_FleetVpcConfig;

  // Amount of time that a streaming session remains active after users disconnect.
  disconnectTimeoutInSeconds?: number;

  // AppStream 2.0 view that is displayed to your users when they stream from the fleet. When `APP` is specified, only the windows of applications opened by users display. When `DESKTOP` is specified, the standard desktop that is provided by the operating system displays. If not specified, defaults to `APP`.
  streamView?: string;

  // Map of tags to attach to AppStream instances.
  tags?: Map<string, string>;

  /*
Unique name for the fleet.

The following arguments are optional:
*/
  name?: string;

  // Amount of time that users can be idle (inactive) before they are disconnected from their streaming session and the `disconnect_timeout_in_seconds` time interval begins. Defaults to 60 seconds.
  idleDisconnectTimeoutInSeconds?: number;

  // Human-readable friendly name for the AppStream fleet.
  displayName?: string;

  // Description to display.
  description?: string;

  // Configuration block for the name of the directory and organizational unit (OU) to use to join the fleet to a Microsoft Active Directory domain. See below.
  domainJoinInfo?: appstream_FleetDomainJoinInfo;

  // Fleet type. Valid values are: `ON_DEMAND`, `ALWAYS_ON`
  fleetType?: string;

  // ARN of the IAM role to apply to the fleet.
  iamRoleArn?: string;

  // Name of the image used to create the fleet.
  imageName?: string;

  // Configuration block for the desired capacity of the fleet. See below.
  computeCapacity?: appstream_FleetComputeCapacity;
}
export class Fleet extends Resource {
  // State of the fleet. Can be `STARTING`, `RUNNING`, `STOPPING` or `STOPPED`
  public state?: string;

  // Configuration block for the desired capacity of the fleet. See below.
  public computeCapacity?: appstream_FleetComputeCapacity;

  // Description to display.
  public description?: string;

  // Name of the image used to create the fleet.
  public imageName?: string;

  // Instance type to use when launching fleet instances.
  public instanceType?: string;

  // Maximum amount of time that a streaming session can remain active, in seconds.
  public maxUserDurationInSeconds?: number;

  // Human-readable friendly name for the AppStream fleet.
  public displayName?: string;

  // Configuration block for the name of the directory and organizational unit (OU) to use to join the fleet to a Microsoft Active Directory domain. See below.
  public domainJoinInfo?: appstream_FleetDomainJoinInfo;

  // Enables or disables default internet access for the fleet.
  public enableDefaultInternetAccess?: boolean;

  // ARN of the IAM role to apply to the fleet.
  public iamRoleArn?: string;

  // Configuration block for the VPC configuration for the image builder. See below.
  public vpcConfig?: appstream_FleetVpcConfig;

  // ARN of the appstream fleet.
  public arn?: string;

  // Amount of time that a streaming session remains active after users disconnect.
  public disconnectTimeoutInSeconds?: number;

  // ARN of the public, private, or shared image to use.
  public imageArn?: string;

  /*
Unique name for the fleet.

The following arguments are optional:
*/
  public name?: string;

  //
  public tagsAll?: Map<string, string>;

  // Date and time, in UTC and extended RFC 3339 format, when the fleet was created.
  public createdTime?: string;

  // Fleet type. Valid values are: `ON_DEMAND`, `ALWAYS_ON`
  public fleetType?: string;

  // Amount of time that users can be idle (inactive) before they are disconnected from their streaming session and the `disconnect_timeout_in_seconds` time interval begins. Defaults to 60 seconds.
  public idleDisconnectTimeoutInSeconds?: number;

  // AppStream 2.0 view that is displayed to your users when they stream from the fleet. When `APP` is specified, only the windows of applications opened by users display. When `DESKTOP` is specified, the standard desktop that is provided by the operating system displays. If not specified, defaults to `APP`.
  public streamView?: string;

  // Map of tags to attach to AppStream instances.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "vpcConfig",
        "Configuration block for the VPC configuration for the image builder. See below.",
        appstream_FleetVpcConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableDefaultInternetAccess",
        "Enables or disables default internet access for the fleet.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "imageArn",
        "ARN of the public, private, or shared image to use.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "maxUserDurationInSeconds",
        "Maximum amount of time that a streaming session can remain active, in seconds.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Unique name for the fleet.\n\nThe following arguments are optional:",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "Human-readable friendly name for the AppStream fleet.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "iamRoleArn",
        "ARN of the IAM role to apply to the fleet.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "computeCapacity",
        "Configuration block for the desired capacity of the fleet. See below.",
        appstream_FleetComputeCapacity_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "streamView",
        "AppStream 2.0 view that is displayed to your users when they stream from the fleet. When `APP` is specified, only the windows of applications opened by users display. When `DESKTOP` is specified, the standard desktop that is provided by the operating system displays. If not specified, defaults to `APP`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description to display.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceType",
        "Instance type to use when launching fleet instances.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "disconnectTimeoutInSeconds",
        "Amount of time that a streaming session remains active after users disconnect.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to attach to AppStream instances.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "idleDisconnectTimeoutInSeconds",
        "Amount of time that users can be idle (inactive) before they are disconnected from their streaming session and the `disconnect_timeout_in_seconds` time interval begins. Defaults to 60 seconds.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "domainJoinInfo",
        "Configuration block for the name of the directory and organizational unit (OU) to use to join the fleet to a Microsoft Active Directory domain. See below.",
        appstream_FleetDomainJoinInfo_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "fleetType",
        "Fleet type. Valid values are: `ON_DEMAND`, `ALWAYS_ON`",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "imageName",
        "Name of the image used to create the fleet.",
        [],
        false,
        false,
      ),
    ];
  }
}
