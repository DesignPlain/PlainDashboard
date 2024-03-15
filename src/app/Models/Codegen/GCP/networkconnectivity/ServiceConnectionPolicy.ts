import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ServiceConnectionPolicyPscConfig } from "../types/ServiceConnectionPolicyPscConfig";
import { ServiceConnectionPolicyPscConnection } from "../types/ServiceConnectionPolicyPscConnection";

export interface ServiceConnectionPolicyArgs {
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
  PscConfig?: ServiceConnectionPolicyPscConfig;

  /*
The service class identifier for which this ServiceConnectionPolicy is for. The service class identifier is a unique, symbolic representation of a ServiceClass.
It is provided by the Service Producer. Google services have a prefix of gcp. For example, gcp-cloud-sql. 3rd party services do not. For example, test-service-a3dfcx.
*/
  ServiceClass?: string;

  // Free-text description of the resource.
  Description?: string;
}
export class ServiceConnectionPolicy extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Configuration used for Private Service Connect connections. Used when Infrastructure is PSC.
Structure is documented below.
*/
  public PscConfig?: ServiceConnectionPolicyPscConfig;

  // The timestamp when the resource was updated.
  public UpdateTime?: string;

  // The name of a ServiceConnectionPolicy. Format: projects/{project}/locations/{location}/serviceConnectionPolicies/{service_connection_policy} See: https://google.aip.dev/122#fields-representing-resource-names
  public Name?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
  public Etag?: string;

  /*
The location of the ServiceConnectionPolicy.


- - -
*/
  public Location?: string;

  // Free-text description of the resource.
  public Description?: string;

  // The resource path of the consumer network. Example: - projects/{projectNumOrId}/global/networks/{resourceId}.
  public Network?: string;

  /*
Information about each Private Service Connect connection.
Structure is documented below.
*/
  public PscConnections?: Array<ServiceConnectionPolicyPscConnection>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
The service class identifier for which this ServiceConnectionPolicy is for. The service class identifier is a unique, symbolic representation of a ServiceClass.
It is provided by the Service Producer. Google services have a prefix of gcp. For example, gcp-cloud-sql. 3rd party services do not. For example, test-service-a3dfcx.
*/
  public ServiceClass?: string;

  // The timestamp when the resource was created.
  public CreateTime?: string;

  // The type of underlying resources used to create the connection.
  public Infrastructure?: string;

  /*
User-defined labels.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Free-text description of the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "User-defined labels.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the ServiceConnectionPolicy.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of a ServiceConnectionPolicy. Format: projects/{project}/locations/{location}/serviceConnectionPolicies/{service_connection_policy} See: https://google.aip.dev/122#fields-representing-resource-names",
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        "The resource path of the consumer network. Example: - projects/{projectNumOrId}/global/networks/{resourceId}.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PscConfig",
        "Configuration used for Private Service Connect connections. Used when Infrastructure is PSC.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceClass",
        "The service class identifier for which this ServiceConnectionPolicy is for. The service class identifier is a unique, symbolic representation of a ServiceClass.\nIt is provided by the Service Producer. Google services have a prefix of gcp. For example, gcp-cloud-sql. 3rd party services do not. For example, test-service-a3dfcx.",
      ),
    ];
  }
}
