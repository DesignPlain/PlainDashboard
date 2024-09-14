import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  sagemaker_DeviceFleetOutputConfig,
  sagemaker_DeviceFleetOutputConfig_GetTypes,
} from "../types/sagemaker_DeviceFleetOutputConfig";

export interface DeviceFleetArgs {
  // The Amazon Resource Name (ARN) that has access to AWS Internet of Things (IoT).
  roleArn?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // A description of the fleet.
  description?: string;

  // The name of the Device Fleet (must be unique).
  deviceFleetName?: string;

  // Whether to create an AWS IoT Role Alias during device fleet creation. The name of the role alias generated will match this pattern: "SageMakerEdge-{DeviceFleetName}".
  enableIotRoleAlias?: boolean;

  // Specifies details about the repository. see Output Config details below.
  outputConfig?: sagemaker_DeviceFleetOutputConfig;
}
export class DeviceFleet extends DS_Resource {
  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The Amazon Resource Name (ARN) assigned by AWS to this Device Fleet.
  public arn?: string;

  // A description of the fleet.
  public description?: string;

  // Whether to create an AWS IoT Role Alias during device fleet creation. The name of the role alias generated will match this pattern: "SageMakerEdge-{DeviceFleetName}".
  public enableIotRoleAlias?: boolean;

  //
  public iotRoleAlias?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The name of the Device Fleet (must be unique).
  public deviceFleetName?: string;

  // Specifies details about the repository. see Output Config details below.
  public outputConfig?: sagemaker_DeviceFleetOutputConfig;

  // The Amazon Resource Name (ARN) that has access to AWS Internet of Things (IoT).
  public roleArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description of the fleet.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "deviceFleetName",
        "The name of the Device Fleet (must be unique).",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableIotRoleAlias",
        'Whether to create an AWS IoT Role Alias during device fleet creation. The name of the role alias generated will match this pattern: "SageMakerEdge-{DeviceFleetName}".',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "outputConfig",
        "Specifies details about the repository. see Output Config details below.",
        () => sagemaker_DeviceFleetOutputConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "The Amazon Resource Name (ARN) that has access to AWS Internet of Things (IoT).",
        () => [],
        true,
        false,
      ),
    ];
  }
}
