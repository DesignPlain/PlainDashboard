import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  networkconnectivity_ServiceConnectionPolicyPscConnection,
  networkconnectivity_ServiceConnectionPolicyPscConnection_GetTypes,
} from "../types/networkconnectivity_ServiceConnectionPolicyPscConnection";
import {
  networkconnectivity_ServiceConnectionPolicyPscConfig,
  networkconnectivity_ServiceConnectionPolicyPscConfig_GetTypes,
} from "../types/networkconnectivity_ServiceConnectionPolicyPscConfig";

export interface ServiceConnectionPolicyArgs {
  /*
The location of the ServiceConnectionPolicy.


- - -
*/
  location?: string;

  // The name of a ServiceConnectionPolicy. Format: projects/{project}/locations/{location}/serviceConnectionPolicies/{service_connection_policy} See: https://google.aip.dev/122#fields-representing-resource-names
  name?: string;

  // The resource path of the consumer network. Example: - projects/{projectNumOrId}/global/networks/{resourceId}.
  network?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Configuration used for Private Service Connect connections. Used when Infrastructure is PSC.
Structure is documented below.
*/
  pscConfig?: networkconnectivity_ServiceConnectionPolicyPscConfig;

  /*
The service class identifier for which this ServiceConnectionPolicy is for. The service class identifier is a unique, symbolic representation of a ServiceClass.
It is provided by the Service Producer. Google services have a prefix of gcp. For example, gcp-cloud-sql. 3rd party services do not. For example, test-service-a3dfcx.
*/
  serviceClass?: string;

  // Free-text description of the resource.
  description?: string;

  /*
User-defined labels.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;
}
export class ServiceConnectionPolicy extends DS_Resource {
  // The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
  public etag?: string;

  // The resource path of the consumer network. Example: - projects/{projectNumOrId}/global/networks/{resourceId}.
  public network?: string;

  /*
Configuration used for Private Service Connect connections. Used when Infrastructure is PSC.
Structure is documented below.
*/
  public pscConfig?: networkconnectivity_ServiceConnectionPolicyPscConfig;

  // The timestamp when the resource was updated.
  public updateTime?: string;

  // Free-text description of the resource.
  public description?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
The location of the ServiceConnectionPolicy.


- - -
*/
  public location?: string;

  /*
Information about each Private Service Connect connection.
Structure is documented below.
*/
  public pscConnections?: Array<networkconnectivity_ServiceConnectionPolicyPscConnection>;

  // The type of underlying resources used to create the connection.
  public infrastructure?: string;

  /*
User-defined labels.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
The service class identifier for which this ServiceConnectionPolicy is for. The service class identifier is a unique, symbolic representation of a ServiceClass.
It is provided by the Service Producer. Google services have a prefix of gcp. For example, gcp-cloud-sql. 3rd party services do not. For example, test-service-a3dfcx.
*/
  public serviceClass?: string;

  // The timestamp when the resource was created.
  public createTime?: string;

  // The name of a ServiceConnectionPolicy. Format: projects/{project}/locations/{location}/serviceConnectionPolicies/{service_connection_policy} See: https://google.aip.dev/122#fields-representing-resource-names
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of a ServiceConnectionPolicy. Format: projects/{project}/locations/{location}/serviceConnectionPolicies/{service_connection_policy} See: https://google.aip.dev/122#fields-representing-resource-names",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "network",
        "The resource path of the consumer network. Example: - projects/{projectNumOrId}/global/networks/{resourceId}.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "pscConfig",
        "Configuration used for Private Service Connect connections. Used when Infrastructure is PSC.\nStructure is documented below.",
        () => networkconnectivity_ServiceConnectionPolicyPscConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceClass",
        "The service class identifier for which this ServiceConnectionPolicy is for. The service class identifier is a unique, symbolic representation of a ServiceClass.\nIt is provided by the Service Producer. Google services have a prefix of gcp. For example, gcp-cloud-sql. 3rd party services do not. For example, test-service-a3dfcx.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Free-text description of the resource.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "User-defined labels.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location of the ServiceConnectionPolicy.\n\n\n- - -",
        () => [],
        true,
        true,
      ),
    ];
  }
}
