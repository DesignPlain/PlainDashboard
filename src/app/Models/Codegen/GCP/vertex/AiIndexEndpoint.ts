import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Vertex_AiIndexEndpointPrivateServiceConnectConfig,
  Vertex_AiIndexEndpointPrivateServiceConnectConfig_GetTypes,
} from "../types/Vertex_AiIndexEndpointPrivateServiceConnectConfig";

export interface AiIndexEndpointArgs {
  /*
Optional. Configuration for private service connect. `network` and `privateServiceConnectConfig` are mutually exclusive.
Structure is documented below.
*/
  PrivateServiceConnectConfig?: Vertex_AiIndexEndpointPrivateServiceConnectConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // If true, the deployed index will be accessible through public endpoint.
  PublicEndpointEnabled?: boolean;

  // The region of the index endpoint. eg us-central1
  Region?: string;

  // The description of the Index.
  Description?: string;

  /*
The display name of the Index. The name can be up to 128 characters long and can consist of any UTF-8 characters.


- - -
*/
  DisplayName?: string;

  /*
The labels with user-defined metadata to organize your Indexes.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the index endpoint should be peered.
Private services access must already be configured for the network. If left unspecified, the index endpoint is not peered with any network.
[Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): `projects/{project}/global/networks/{network}`.
Where `{project}` is a project number, as in `12345`, and `{network}` is network name.
*/
  Network?: string;
}
export class AiIndexEndpoint extends Resource {
  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // If true, the deployed index will be accessible through public endpoint.
  public PublicEndpointEnabled?: boolean;

  // The timestamp of when the Index was last updated in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public UpdateTime?: string;

  // If publicEndpointEnabled is true, this field will be populated with the domain name to use for this index endpoint.
  public PublicEndpointDomainName?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // The timestamp of when the Index was created in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public CreateTime?: string;

  /*
The display name of the Index. The name can be up to 128 characters long and can consist of any UTF-8 characters.


- - -
*/
  public DisplayName?: string;

  /*
Optional. Configuration for private service connect. `network` and `privateServiceConnectConfig` are mutually exclusive.
Structure is documented below.
*/
  public PrivateServiceConnectConfig?: Vertex_AiIndexEndpointPrivateServiceConnectConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the index endpoint should be peered.
Private services access must already be configured for the network. If left unspecified, the index endpoint is not peered with any network.
[Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): `projects/{project}/global/networks/{network}`.
Where `{project}` is a project number, as in `12345`, and `{network}` is network name.
*/
  public Network?: string;

  // The region of the index endpoint. eg us-central1
  public Region?: string;

  // The description of the Index.
  public Description?: string;

  // Used to perform consistent read-modify-write updates.
  public Etag?: string;

  /*
The labels with user-defined metadata to organize your Indexes.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The resource name of the Index.
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "PrivateServiceConnectConfig",
        "Optional. Configuration for private service connect. `network` and `privateServiceConnectConfig` are mutually exclusive.\nStructure is documented below.",
        Vertex_AiIndexEndpointPrivateServiceConnectConfig_GetTypes(),
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
        InputType.Bool,
        "PublicEndpointEnabled",
        "If true, the deployed index will be accessible through public endpoint.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The region of the index endpoint. eg us-central1",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "The description of the Index.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The display name of the Index. The name can be up to 128 characters long and can consist of any UTF-8 characters.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "The labels with user-defined metadata to organize your Indexes.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        "The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the index endpoint should be peered.\nPrivate services access must already be configured for the network. If left unspecified, the index endpoint is not peered with any network.\n[Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): `projects/{project}/global/networks/{network}`.\nWhere `{project}` is a project number, as in `12345`, and `{network}` is network name.",
        [],
        false,
        true,
      ),
    ];
  }
}
