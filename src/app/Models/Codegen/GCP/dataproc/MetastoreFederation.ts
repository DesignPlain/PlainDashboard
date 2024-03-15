import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { MetastoreFederationBackendMetastore } from "../types/MetastoreFederationBackendMetastore";

export interface MetastoreFederationArgs {
  // The Apache Hive metastore version of the federation. All backend metastore versions must be compatible with the federation version.
  Version?: string;

  /*
A map from BackendMetastore rank to BackendMetastores from which the federation service serves metadata at query time. The map key represents the order in which BackendMetastores should be evaluated to resolve database names at query time and should be greater than or equal to zero. A BackendMetastore with a lower number will be evaluated before a BackendMetastore with a higher number.
Structure is documented below.
*/
  BackendMetastores?: Array<MetastoreFederationBackendMetastore>;

  /*
The ID of the metastore federation. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 63 characters.
*/
  FederationId?: string;

  /*
User-defined labels for the metastore federation.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The location where the metastore federation should reside.
  Location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class MetastoreFederation extends Resource {
  // The location where the metastore federation should reside.
  public Location?: string;

  // The relative resource name of the metastore that is being federated. The formats of the relative resource names for the currently supported metastores are listed below: Dataplex: projects/{projectId}/locations/{location}/lakes/{lake_id} BigQuery: projects/{projectId} Dataproc Metastore: projects/{projectId}/locations/{location}/services/{serviceId}
  public Name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // The current state of the metastore federation.
  public State?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // The URI of the endpoint used to access the metastore federation.
  public EndpointUri?: string;

  /*
User-defined labels for the metastore federation.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Additional information about the current state of the metastore federation, if available.
  public StateMessage?: string;

  // The globally unique resource identifier of the metastore federation.
  public Uid?: string;

  // The Apache Hive metastore version of the federation. All backend metastore versions must be compatible with the federation version.
  public Version?: string;

  /*
A map from BackendMetastore rank to BackendMetastores from which the federation service serves metadata at query time. The map key represents the order in which BackendMetastores should be evaluated to resolve database names at query time and should be greater than or equal to zero. A BackendMetastore with a lower number will be evaluated before a BackendMetastore with a higher number.
Structure is documented below.
*/
  public BackendMetastores?: Array<MetastoreFederationBackendMetastore>;

  /*
The ID of the metastore federation. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 63 characters.
*/
  public FederationId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Version",
        "The Apache Hive metastore version of the federation. All backend metastore versions must be compatible with the federation version.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "BackendMetastores",
        "A map from BackendMetastore rank to BackendMetastores from which the federation service serves metadata at query time. The map key represents the order in which BackendMetastores should be evaluated to resolve database names at query time and should be greater than or equal to zero. A BackendMetastore with a lower number will be evaluated before a BackendMetastore with a higher number.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "FederationId",
        "The ID of the metastore federation. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),\nand hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between\n3 and 63 characters.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "User-defined labels for the metastore federation.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location where the metastore federation should reside.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
    ];
  }
}