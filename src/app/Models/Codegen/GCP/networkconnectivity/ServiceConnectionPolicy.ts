import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networkconnectivity_ServiceConnectionPolicyPscConfig,
  Networkconnectivity_ServiceConnectionPolicyPscConfig_GetTypes,
} from "../types/Networkconnectivity_ServiceConnectionPolicyPscConfig";
import {
  Networkconnectivity_ServiceConnectionPolicyPscConnection,
  Networkconnectivity_ServiceConnectionPolicyPscConnection_GetTypes,
} from "../types/Networkconnectivity_ServiceConnectionPolicyPscConnection";

export interface ServiceConnectionPolicyArgs {
  // The resource path of the consumer network. Example: - projects/{projectNumOrId}/global/networks/{resourceId}.
  Network?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Configuration used for Private Service Connect connections. Used when Infrastructure is PSC.
Structure is documented below.
*/
  PscConfig?: Networkconnectivity_ServiceConnectionPolicyPscConfig;

  /*
The service class identifier for which this ServiceConnectionPolicy is for. The service class identifier is a unique, symbolic representation of a ServiceClass.
It is provided by the Service Producer. Google services have a prefix of gcp. For example, gcp-cloud-sql. 3rd party services do not. For example, test-service-a3dfcx.
*/
  ServiceClass?: string;

  // Free-text description of the resource.
  Description?: string;

  /*
User-defined labels.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The location of the ServiceConnectionPolicy.


- - -
*/
  Location?: string;

  // The name of a ServiceConnectionPolicy. Format: projects/{project}/locations/{location}/serviceConnectionPolicies/{service_connection_policy} See: https://google.aip.dev/122#fields-representing-resource-names
  Name?: string;
}
export class ServiceConnectionPolicy extends Resource {
  // The timestamp when the resource was created.
  public CreateTime?: string;

  /*
The service class identifier for which this ServiceConnectionPolicy is for. The service class identifier is a unique, symbolic representation of a ServiceClass.
It is provided by the Service Producer. Google services have a prefix of gcp. For example, gcp-cloud-sql. 3rd party services do not. For example, test-service-a3dfcx.
*/
  public ServiceClass?: string;

  // The type of underlying resources used to create the connection.
  public Infrastructure?: string;

  /*
User-defined labels.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Information about each Private Service Connect connection.
Structure is documented below.
*/
  public PscConnections?: Array<Networkconnectivity_ServiceConnectionPolicyPscConnection>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // The timestamp when the resource was updated.
  public UpdateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
  public Etag?: string;

  /*
The location of the ServiceConnectionPolicy.


- - -
*/
  public Location?: string;

  // The name of a ServiceConnectionPolicy. Format: projects/{project}/locations/{location}/serviceConnectionPolicies/{service_connection_policy} See: https://google.aip.dev/122#fields-representing-resource-names
  public Name?: string;

  // The resource path of the consumer network. Example: - projects/{projectNumOrId}/global/networks/{resourceId}.
  public Network?: string;

  // Free-text description of the resource.
  public Description?: string;

  /*
Configuration used for Private Service Connect connections. Used when Infrastructure is PSC.
Structure is documented below.
*/
  public PscConfig?: Networkconnectivity_ServiceConnectionPolicyPscConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Network",
        "The resource path of the consumer network. Example: - projects/{projectNumOrId}/global/networks/{resourceId}.",
        [],
        true,
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
        InputType.Object,
        "PscConfig",
        "Configuration used for Private Service Connect connections. Used when Infrastructure is PSC.\nStructure is documented below.",
        Networkconnectivity_ServiceConnectionPolicyPscConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceClass",
        "The service class identifier for which this ServiceConnectionPolicy is for. The service class identifier is a unique, symbolic representation of a ServiceClass.\nIt is provided by the Service Producer. Google services have a prefix of gcp. For example, gcp-cloud-sql. 3rd party services do not. For example, test-service-a3dfcx.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Free-text description of the resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "User-defined labels.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the ServiceConnectionPolicy.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of a ServiceConnectionPolicy. Format: projects/{project}/locations/{location}/serviceConnectionPolicies/{service_connection_policy} See: https://google.aip.dev/122#fields-representing-resource-names",
        [],
        false,
        true,
      ),
    ];
  }
}
