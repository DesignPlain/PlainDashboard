import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dataproc_MetastoreFederationBackendMetastore,
  dataproc_MetastoreFederationBackendMetastore_GetTypes,
} from "../types/dataproc_MetastoreFederationBackendMetastore";

export interface MetastoreFederationArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The Apache Hive metastore version of the federation. All backend metastore versions must be compatible with the federation version.
  version?: string;

  /*
A map from BackendMetastore rank to BackendMetastores from which the federation service serves metadata at query time. The map key represents the order in which BackendMetastores should be evaluated to resolve database names at query time and should be greater than or equal to zero. A BackendMetastore with a lower number will be evaluated before a BackendMetastore with a higher number.
Structure is documented below.
*/
  backendMetastores?: Array<dataproc_MetastoreFederationBackendMetastore>;

  /*
The ID of the metastore federation. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 63 characters.
*/
  federationId?: string;

  /*
User-defined labels for the metastore federation.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The location where the metastore federation should reside.
  location?: string;
}
export class MetastoreFederation extends Resource {
  /*
A map from BackendMetastore rank to BackendMetastores from which the federation service serves metadata at query time. The map key represents the order in which BackendMetastores should be evaluated to resolve database names at query time and should be greater than or equal to zero. A BackendMetastore with a lower number will be evaluated before a BackendMetastore with a higher number.
Structure is documented below.
*/
  public backendMetastores?: Array<dataproc_MetastoreFederationBackendMetastore>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // The location where the metastore federation should reside.
  public location?: string;

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

  // Additional information about the current state of the metastore federation, if available.
  public stateMessage?: string;

  // The URI of the endpoint used to access the metastore federation.
  public endpointUri?: string;

  /*
The ID of the metastore federation. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 63 characters.
*/
  public federationId?: string;

  /*
User-defined labels for the metastore federation.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // The relative resource name of the metastore that is being federated. The formats of the relative resource names for the currently supported metastores are listed below: Dataplex: projects/{projectId}/locations/{location}/lakes/{lake_id} BigQuery: projects/{projectId} Dataproc Metastore: projects/{projectId}/locations/{location}/services/{serviceId}
  public name?: string;

  // The current state of the metastore federation.
  public state?: string;

  // The globally unique resource identifier of the metastore federation.
  public uid?: string;

  // The Apache Hive metastore version of the federation. All backend metastore versions must be compatible with the federation version.
  public version?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "version",
        "The Apache Hive metastore version of the federation. All backend metastore versions must be compatible with the federation version.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "backendMetastores",
        "A map from BackendMetastore rank to BackendMetastores from which the federation service serves metadata at query time. The map key represents the order in which BackendMetastores should be evaluated to resolve database names at query time and should be greater than or equal to zero. A BackendMetastore with a lower number will be evaluated before a BackendMetastore with a higher number.\nStructure is documented below.",
        dataproc_MetastoreFederationBackendMetastore_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "federationId",
        "The ID of the metastore federation. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),\nand hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between\n3 and 63 characters.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "User-defined labels for the metastore federation.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location where the metastore federation should reside.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
