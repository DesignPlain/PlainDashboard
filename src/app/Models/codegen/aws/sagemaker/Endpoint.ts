import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  sagemaker_EndpointDeploymentConfig,
  sagemaker_EndpointDeploymentConfig_GetTypes,
} from "../types/sagemaker_EndpointDeploymentConfig";

export interface EndpointArgs {
  // The deployment configuration for an endpoint, which contains the desired deployment strategy and rollback configurations. See Deployment Config.
  deploymentConfig?: sagemaker_EndpointDeploymentConfig;

  // The name of the endpoint configuration to use.
  endpointConfigName?: string;

  // The name of the endpoint. If omitted, the provider will assign a random, unique name.
  name?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Endpoint extends DS_Resource {
  // The Amazon Resource Name (ARN) assigned by AWS to this endpoint.
  public arn?: string;

  // The deployment configuration for an endpoint, which contains the desired deployment strategy and rollback configurations. See Deployment Config.
  public deploymentConfig?: sagemaker_EndpointDeploymentConfig;

  // The name of the endpoint configuration to use.
  public endpointConfigName?: string;

  // The name of the endpoint. If omitted, the provider will assign a random, unique name.
  public name?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

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
        InputType.Object,
        "deploymentConfig",
        "The deployment configuration for an endpoint, which contains the desired deployment strategy and rollback configurations. See Deployment Config.",
        () => sagemaker_EndpointDeploymentConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "endpointConfigName",
        "The name of the endpoint configuration to use.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the endpoint. If omitted, the provider will assign a random, unique name.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
