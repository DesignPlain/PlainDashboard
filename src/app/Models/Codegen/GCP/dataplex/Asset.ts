import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataplex_AssetDiscoveryStatus,
  Dataplex_AssetDiscoveryStatus_GetTypes,
} from "../types/Dataplex_AssetDiscoveryStatus";
import {
  Dataplex_AssetResourceStatus,
  Dataplex_AssetResourceStatus_GetTypes,
} from "../types/Dataplex_AssetResourceStatus";
import {
  Dataplex_AssetSecurityStatus,
  Dataplex_AssetSecurityStatus_GetTypes,
} from "../types/Dataplex_AssetSecurityStatus";
import {
  Dataplex_AssetDiscoverySpec,
  Dataplex_AssetDiscoverySpec_GetTypes,
} from "../types/Dataplex_AssetDiscoverySpec";
import {
  Dataplex_AssetResourceSpec,
  Dataplex_AssetResourceSpec_GetTypes,
} from "../types/Dataplex_AssetResourceSpec";

export interface AssetArgs {
  /*
Optional. User defined labels for the asset.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The lake for the resource
  Lake?: string;

  // The location for the resource
  Location?: string;

  // The name of the asset.
  Name?: string;

  // The project for the resource
  Project?: string;

  // Optional. User friendly display name.
  DisplayName?: string;

  // Optional. Description of the asset.
  Description?: string;

  // Required. Specification of the discovery feature applied to data referenced by this asset. When this spec is left unset, the asset will use the spec set on the parent zone.
  DiscoverySpec?: Dataplex_AssetDiscoverySpec;

  // Required. Immutable. Specification of the resource that is referenced by this asset.
  ResourceSpec?: Dataplex_AssetResourceSpec;

  // The zone for the resource
  DataplexZone?: string;
}
export class Asset extends Resource {
  // Output only. Status of the discovery feature applied to data referenced by this asset.
  public DiscoveryStatuses?: Array<Dataplex_AssetDiscoveryStatus>;

  // Optional. User friendly display name.
  public DisplayName?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, InputType.String>;

  // The lake for the resource
  public Lake?: string;

  // The location for the resource
  public Location?: string;

  // The project for the resource
  public Project?: string;

  // Output only. The time when the asset was last updated.
  public UpdateTime?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, InputType.String>;

  // Output only. Current state of the asset. Possible values: STATE_UNSPECIFIED, ACTIVE, CREATING, DELETING, ACTION_REQUIRED
  public State?: string;

  // Output only. System generated globally unique ID for the asset. This ID will be different if the asset is deleted and re-created with the same name.
  public Uid?: string;

  // Output only. The time when the asset was created.
  public CreateTime?: string;

  // The zone for the resource
  public DataplexZone?: string;

  // Optional. Description of the asset.
  public Description?: string;

  // Required. Specification of the discovery feature applied to data referenced by this asset. When this spec is left unset, the asset will use the spec set on the parent zone.
  public DiscoverySpec?: Dataplex_AssetDiscoverySpec;

  // Required. Immutable. Specification of the resource that is referenced by this asset.
  public ResourceSpec?: Dataplex_AssetResourceSpec;

  /*
Optional. User defined labels for the asset.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The name of the asset.
  public Name?: string;

  // Output only. Status of the resource referenced by this asset.
  public ResourceStatuses?: Array<Dataplex_AssetResourceStatus>;

  // Output only. Status of the security policy applied to resource referenced by this asset.
  public SecurityStatuses?: Array<Dataplex_AssetSecurityStatus>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project for the resource",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Optional. User friendly display name.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "DiscoverySpec",
        "Required. Specification of the discovery feature applied to data referenced by this asset. When this spec is left unset, the asset will use the spec set on the parent zone.",
        Dataplex_AssetDiscoverySpec_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DataplexZone",
        "The zone for the resource",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Optional. User defined labels for the asset.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the asset.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Lake",
        "The lake for the resource",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Optional. Description of the asset.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ResourceSpec",
        "Required. Immutable. Specification of the resource that is referenced by this asset.",
        Dataplex_AssetResourceSpec_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
