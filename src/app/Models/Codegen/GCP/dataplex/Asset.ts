import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { AssetDiscoverySpec } from "../types/AssetDiscoverySpec";
import { AssetResourceSpec } from "../types/AssetResourceSpec";
import { AssetDiscoveryStatus } from "../types/AssetDiscoveryStatus";
import { AssetResourceStatus } from "../types/AssetResourceStatus";
import { AssetSecurityStatus } from "../types/AssetSecurityStatus";

export interface AssetArgs {
  // Optional. User friendly display name.
  DisplayName?: string;

  // The lake for the resource
  Lake?: string;

  // The location for the resource
  Location?: string;

  // The project for the resource
  Project?: string;

  // The zone for the resource
  DataplexZone?: string;

  // Required. Specification of the discovery feature applied to data referenced by this asset. When this spec is left unset, the asset will use the spec set on the parent zone.
  DiscoverySpec?: AssetDiscoverySpec;

  /*
Optional. User defined labels for the asset.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The name of the asset.
  Name?: string;

  // Required. Immutable. Specification of the resource that is referenced by this asset.
  ResourceSpec?: AssetResourceSpec;

  // Optional. Description of the asset.
  Description?: string;
}
export class Asset extends Resource {
  // Optional. Description of the asset.
  public Description?: string;

  // Output only. Status of the discovery feature applied to data referenced by this asset.
  public DiscoveryStatuses?: Array<AssetDiscoveryStatus>;

  /*
Optional. User defined labels for the asset.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The lake for the resource
  public Lake?: string;

  // Optional. User friendly display name.
  public DisplayName?: string;

  // The location for the resource
  public Location?: string;

  // The name of the asset.
  public Name?: string;

  // The project for the resource
  public Project?: string;

  // Output only. Status of the resource referenced by this asset.
  public ResourceStatuses?: Array<AssetResourceStatus>;

  // Output only. The time when the asset was last updated.
  public UpdateTime?: string;

  // Required. Immutable. Specification of the resource that is referenced by this asset.
  public ResourceSpec?: AssetResourceSpec;

  // Output only. Status of the security policy applied to resource referenced by this asset.
  public SecurityStatuses?: Array<AssetSecurityStatus>;

  // Output only. Current state of the asset. Possible values: STATE_UNSPECIFIED, ACTIVE, CREATING, DELETING, ACTION_REQUIRED
  public State?: string;

  // Output only. System generated globally unique ID for the asset. This ID will be different if the asset is deleted and re-created with the same name.
  public Uid?: string;

  // Output only. The time when the asset was created.
  public CreateTime?: string;

  // The zone for the resource
  public DataplexZone?: string;

  // Required. Specification of the discovery feature applied to data referenced by this asset. When this spec is left unset, the asset will use the spec set on the parent zone.
  public DiscoverySpec?: AssetDiscoverySpec;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Optional. User friendly display name.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project for the resource",
      ),
      new DynamicUIProps(
        InputType.String,
        "DataplexZone",
        "The zone for the resource",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Optional. User defined labels for the asset.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ResourceSpec",
        "Required. Immutable. Specification of the resource that is referenced by this asset.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Optional. Description of the asset.",
      ),
      new DynamicUIProps(InputType.String, "Lake", "The lake for the resource"),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource",
      ),
      new DynamicUIProps(
        InputType.String,
        "DiscoverySpec",
        "Required. Specification of the discovery feature applied to data referenced by this asset. When this spec is left unset, the asset will use the spec set on the parent zone.",
      ),
      new DynamicUIProps(InputType.String, "Name", "The name of the asset."),
    ];
  }
}
