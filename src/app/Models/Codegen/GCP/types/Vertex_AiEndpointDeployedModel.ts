import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Vertex_AiEndpointDeployedModelDedicatedResource,
  Vertex_AiEndpointDeployedModelDedicatedResource_GetTypes,
} from "./Vertex_AiEndpointDeployedModelDedicatedResource";
import {
  Vertex_AiEndpointDeployedModelPrivateEndpoint,
  Vertex_AiEndpointDeployedModelPrivateEndpoint_GetTypes,
} from "./Vertex_AiEndpointDeployedModelPrivateEndpoint";
import {
  Vertex_AiEndpointDeployedModelAutomaticResource,
  Vertex_AiEndpointDeployedModelAutomaticResource_GetTypes,
} from "./Vertex_AiEndpointDeployedModelAutomaticResource";

export interface Vertex_AiEndpointDeployedModel {
  /*
(Output)
The service account that the DeployedModel's container runs as. Specify the email address of the service account. If this service account is not specified, the container runs as a service account that doesn't have access to the resource project. Users deploying the Model must have the `iam.serviceAccounts.actAs` permission on this service account.
*/
  ServiceAccount?: string;

  /*
(Output)
Output only. Timestamp when the DeployedModel was created.
*/
  CreateTime?: string;

  // Required. The display name of the Endpoint. The name can be up to 128 characters long and can consist of any UTF-8 characters.
  DisplayName?: string;

  /*
(Output)
The ID of the DeployedModel. If not provided upon deployment, Vertex AI will generate a value for this ID. This value should be 1-10 characters, and valid characters are /[0-9]/.
*/
  Id?: string;

  /*
(Output)
Output only. The version ID of the model that is deployed.
*/
  ModelVersionId?: string;

  /*
(Output)
The name of the Model that this is the deployment of. Note that the Model may be in a different location than the DeployedModel's Endpoint.
*/
  Model?: string;

  /*
(Output)
Output only. Provide paths for users to send predict/explain/health requests directly to the deployed model services running on Cloud via private services access. This field is populated if network is configured.
Structure is documented below.
*/
  PrivateEndpoints?: Array<Vertex_AiEndpointDeployedModelPrivateEndpoint>;

  /*
(Output)
The resource name of the shared DeploymentResourcePool to deploy on. Format: projects/{project}/locations/{location}/deploymentResourcePools/{deployment_resource_pool}
*/
  SharedResources?: string;

  /*
(Output)
A description of resources that to large degree are decided by Vertex AI, and require only a modest additional configuration.
Structure is documented below.
*/
  AutomaticResources?: Array<Vertex_AiEndpointDeployedModelAutomaticResource>;

  /*
(Output)
A description of resources that are dedicated to the DeployedModel, and that need a higher degree of manual configuration.
Structure is documented below.
*/
  DedicatedResources?: Array<Vertex_AiEndpointDeployedModelDedicatedResource>;

  /*
(Output)
These logs are like standard server access logs, containing information like timestamp and latency for each prediction request. Note that Stackdriver logs may incur a cost, especially if your project receives prediction requests at a high queries per second rate (QPS). Estimate your costs before enabling this option.
*/
  EnableAccessLogging?: boolean;

  /*
(Output)
If true, the container of the DeployedModel instances will send `stderr` and `stdout` streams to Stackdriver Logging. Only supported for custom-trained Models and AutoML Tabular Models.
*/
  EnableContainerLogging?: boolean;
}

export function Vertex_AiEndpointDeployedModel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Id",
      "(Output)\nThe ID of the DeployedModel. If not provided upon deployment, Vertex AI will generate a value for this ID. This value should be 1-10 characters, and valid characters are /[0-9]/.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Model",
      "(Output)\nThe name of the Model that this is the deployment of. Note that the Model may be in a different location than the DeployedModel's Endpoint.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SharedResources",
      "(Output)\nThe resource name of the shared DeploymentResourcePool to deploy on. Format: projects/{project}/locations/{location}/deploymentResourcePools/{deployment_resource_pool}",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableAccessLogging",
      "(Output)\nThese logs are like standard server access logs, containing information like timestamp and latency for each prediction request. Note that Stackdriver logs may incur a cost, especially if your project receives prediction requests at a high queries per second rate (QPS). Estimate your costs before enabling this option.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableContainerLogging",
      "(Output)\nIf true, the container of the DeployedModel instances will send `stderr` and `stdout` streams to Stackdriver Logging. Only supported for custom-trained Models and AutoML Tabular Models.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServiceAccount",
      "(Output)\nThe service account that the DeployedModel's container runs as. Specify the email address of the service account. If this service account is not specified, the container runs as a service account that doesn't have access to the resource project. Users deploying the Model must have the `iam.serviceAccounts.actAs` permission on this service account.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DisplayName",
      "Required. The display name of the Endpoint. The name can be up to 128 characters long and can consist of any UTF-8 characters.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "PrivateEndpoints",
      "(Output)\nOutput only. Provide paths for users to send predict/explain/health requests directly to the deployed model services running on Cloud via private services access. This field is populated if network is configured.\nStructure is documented below.",
      Vertex_AiEndpointDeployedModelPrivateEndpoint_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AutomaticResources",
      "(Output)\nA description of resources that to large degree are decided by Vertex AI, and require only a modest additional configuration.\nStructure is documented below.",
      Vertex_AiEndpointDeployedModelAutomaticResource_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "DedicatedResources",
      "(Output)\nA description of resources that are dedicated to the DeployedModel, and that need a higher degree of manual configuration.\nStructure is documented below.",
      Vertex_AiEndpointDeployedModelDedicatedResource_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CreateTime",
      "(Output)\nOutput only. Timestamp when the DeployedModel was created.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ModelVersionId",
      "(Output)\nOutput only. The version ID of the model that is deployed.",
      [],
      false,
      false,
    ),
  ];
}
