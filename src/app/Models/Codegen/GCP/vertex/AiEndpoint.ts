import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Vertex_AiEndpointEncryptionSpec,
  Vertex_AiEndpointEncryptionSpec_GetTypes,
} from "../types/Vertex_AiEndpointEncryptionSpec";
import {
  Vertex_AiEndpointDeployedModel,
  Vertex_AiEndpointDeployedModel_GetTypes,
} from "../types/Vertex_AiEndpointDeployedModel";

export interface AiEndpointArgs {
  // The description of the Endpoint.
  Description?: string;

  /*
Customer-managed encryption key spec for an Endpoint. If set, this Endpoint and all sub-resources of this Endpoint will be secured by this key.
Structure is documented below.
*/
  EncryptionSpec?: Vertex_AiEndpointEncryptionSpec;

  // The resource name of the Endpoint. The name must be numeric with no leading zeros and can be at most 10 digits.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // Required. The display name of the Endpoint. The name can be up to 128 characters long and can consist of any UTF-8 characters.
  DisplayName?: string;

  /*
The labels with user-defined metadata to organize your Endpoints. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The location for the resource


- - -
*/
  Location?: string;

  // The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the Endpoint should be peered. Private services access must already be configured for the network. If left unspecified, the Endpoint is not peered with any network. Only one of the fields, network or enable_private_service_connect, can be set. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): `projects/{project}/global/networks/{network}`. Where `{project}` is a project number, as in `12345`, and `{network}` is network name.
  Network?: string;

  // The region for the resource
  Region?: string;
}
export class AiEndpoint extends Resource {
  // Output only. Timestamp when this Endpoint was last updated.
  public UpdateTime?: string;

  /*
(Output)
Output only. Timestamp when the DeployedModel was created.
*/
  public CreateTime?: string;

  /*
Output only. The models deployed in this Endpoint. To add or remove DeployedModels use EndpointService.DeployModel and EndpointService.UndeployModel respectively. Models can also be deployed and undeployed using the [Cloud Console](https://console.cloud.google.com/vertex-ai/).
Structure is documented below.
*/
  public DeployedModels?: Array<Vertex_AiEndpointDeployedModel>;

  /*
Customer-managed encryption key spec for an Endpoint. If set, this Endpoint and all sub-resources of this Endpoint will be secured by this key.
Structure is documented below.
*/
  public EncryptionSpec?: Vertex_AiEndpointEncryptionSpec;

  // Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.
  public Etag?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The region for the resource
  public Region?: string;

  // Required. The display name of the Endpoint. The name can be up to 128 characters long and can consist of any UTF-8 characters.
  public DisplayName?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // Output only. Resource name of the Model Monitoring job associated with this Endpoint if monitoring is enabled by CreateModelDeploymentMonitoringJob. Format: `projects/{project}/locations/{location}/modelDeploymentMonitoringJobs/{model_deployment_monitoring_job}`
  public ModelDeploymentMonitoringJob?: string;

  // The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the Endpoint should be peered. Private services access must already be configured for the network. If left unspecified, the Endpoint is not peered with any network. Only one of the fields, network or enable_private_service_connect, can be set. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): `projects/{project}/global/networks/{network}`. Where `{project}` is a project number, as in `12345`, and `{network}` is network name.
  public Network?: string;

  /*
The location for the resource


- - -
*/
  public Location?: string;

  // The resource name of the Endpoint. The name must be numeric with no leading zeros and can be at most 10 digits.
  public Name?: string;

  // The description of the Endpoint.
  public Description?: string;

  /*
The labels with user-defined metadata to organize your Endpoints. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "EncryptionSpec",
        "Customer-managed encryption key spec for an Endpoint. If set, this Endpoint and all sub-resources of this Endpoint will be secured by this key.\nStructure is documented below.",
        Vertex_AiEndpointEncryptionSpec_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The resource name of the Endpoint. The name must be numeric with no leading zeros and can be at most 10 digits.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "The description of the Endpoint.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Required. The display name of the Endpoint. The name can be up to 128 characters long and can consist of any UTF-8 characters.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "The labels with user-defined metadata to organize your Endpoints. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. See https://goo.gl/xmQnxf for more information and examples of labels.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        "The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the Endpoint should be peered. Private services access must already be configured for the network. If left unspecified, the Endpoint is not peered with any network. Only one of the fields, network or enable_private_service_connect, can be set. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): `projects/{project}/global/networks/{network}`. Where `{project}` is a project number, as in `12345`, and `{network}` is network name.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The region for the resource",
        [],
        false,
        true,
      ),
    ];
  }
}
