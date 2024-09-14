import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  vertex_AiEndpointDeployedModelPrivateEndpoint,
  vertex_AiEndpointDeployedModelPrivateEndpoint_GetTypes,
} from "./vertex_AiEndpointDeployedModelPrivateEndpoint";
import {
  vertex_AiEndpointDeployedModelAutomaticResource,
  vertex_AiEndpointDeployedModelAutomaticResource_GetTypes,
} from "./vertex_AiEndpointDeployedModelAutomaticResource";
import {
  vertex_AiEndpointDeployedModelDedicatedResource,
  vertex_AiEndpointDeployedModelDedicatedResource_GetTypes,
} from "./vertex_AiEndpointDeployedModelDedicatedResource";

export interface vertex_AiEndpointDeployedModel {
  /*
(Output)
The ID of the DeployedModel. If not provided upon deployment, Vertex AI will generate a value for this ID. This value should be 1-10 characters, and valid characters are /[0-9]/.
*/
  id?: string;

  /*
(Output)
The name of the Model that this is the deployment of. Note that the Model may be in a different location than the DeployedModel's Endpoint.
*/
  model?: string;

  /*
(Output)
The resource name of the shared DeploymentResourcePool to deploy on. Format: projects/{project}/locations/{location}/deploymentResourcePools/{deployment_resource_pool}
*/
  sharedResources?: string;

  /*
(Output)
A description of resources that to large degree are decided by Vertex AI, and require only a modest additional configuration.
Structure is documented below.
*/
  automaticResources?: Array<vertex_AiEndpointDeployedModelAutomaticResource>;

  /*
(Output)
A description of resources that are dedicated to the DeployedModel, and that need a higher degree of manual configuration.
Structure is documented below.
*/
  dedicatedResources?: Array<vertex_AiEndpointDeployedModelDedicatedResource>;

  // Required. The display name of the Endpoint. The name can be up to 128 characters long and can consist of any UTF-8 characters.
  displayName?: string;

  /*
(Output)
These logs are like standard server access logs, containing information like timestamp and latency for each prediction request. Note that Stackdriver logs may incur a cost, especially if your project receives prediction requests at a high queries per second rate (QPS). Estimate your costs before enabling this option.
*/
  enableAccessLogging?: boolean;

  /*
(Output)
The service account that the DeployedModel's container runs as. Specify the email address of the service account. If this service account is not specified, the container runs as a service account that doesn't have access to the resource project. Users deploying the Model must have the `iam.serviceAccounts.actAs` permission on this service account.
*/
  serviceAccount?: string;

  /*
(Output)
Output only. Timestamp when the DeployedModel was created.
*/
  createTime?: string;

  /*
(Output)
If true, the container of the DeployedModel instances will send `stderr` and `stdout` streams to Stackdriver Logging. Only supported for custom-trained Models and AutoML Tabular Models.
*/
  enableContainerLogging?: boolean;

  /*
(Output)
Output only. The version ID of the model that is deployed.
*/
  modelVersionId?: string;

  /*
(Output)
Output only. Provide paths for users to send predict/explain/health requests directly to the deployed model services running on Cloud via private services access. This field is populated if network is configured.
Structure is documented below.
*/
  privateEndpoints?: Array<vertex_AiEndpointDeployedModelPrivateEndpoint>;
}

export function vertex_AiEndpointDeployedModel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "serviceAccount",
      "(Output)\nThe service account that the DeployedModel's container runs as. Specify the email address of the service account. If this service account is not specified, the container runs as a service account that doesn't have access to the resource project. Users deploying the Model must have the `iam.serviceAccounts.actAs` permission on this service account.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "createTime",
      "(Output)\nOutput only. Timestamp when the DeployedModel was created.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableContainerLogging",
      "(Output)\nIf true, the container of the DeployedModel instances will send `stderr` and `stdout` streams to Stackdriver Logging. Only supported for custom-trained Models and AutoML Tabular Models.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "modelVersionId",
      "(Output)\nOutput only. The version ID of the model that is deployed.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "privateEndpoints",
      "(Output)\nOutput only. Provide paths for users to send predict/explain/health requests directly to the deployed model services running on Cloud via private services access. This field is populated if network is configured.\nStructure is documented below.",
      () => vertex_AiEndpointDeployedModelPrivateEndpoint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "(Output)\nThe ID of the DeployedModel. If not provided upon deployment, Vertex AI will generate a value for this ID. This value should be 1-10 characters, and valid characters are /[0-9]/.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "model",
      "(Output)\nThe name of the Model that this is the deployment of. Note that the Model may be in a different location than the DeployedModel's Endpoint.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sharedResources",
      "(Output)\nThe resource name of the shared DeploymentResourcePool to deploy on. Format: projects/{project}/locations/{location}/deploymentResourcePools/{deployment_resource_pool}",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableAccessLogging",
      "(Output)\nThese logs are like standard server access logs, containing information like timestamp and latency for each prediction request. Note that Stackdriver logs may incur a cost, especially if your project receives prediction requests at a high queries per second rate (QPS). Estimate your costs before enabling this option.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "automaticResources",
      "(Output)\nA description of resources that to large degree are decided by Vertex AI, and require only a modest additional configuration.\nStructure is documented below.",
      () => vertex_AiEndpointDeployedModelAutomaticResource_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dedicatedResources",
      "(Output)\nA description of resources that are dedicated to the DeployedModel, and that need a higher degree of manual configuration.\nStructure is documented below.",
      () => vertex_AiEndpointDeployedModelDedicatedResource_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "displayName",
      "Required. The display name of the Endpoint. The name can be up to 128 characters long and can consist of any UTF-8 characters.",
      () => [],
      false,
      false,
    ),
  ];
}
