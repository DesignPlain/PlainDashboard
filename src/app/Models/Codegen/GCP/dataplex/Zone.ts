import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ZoneResourceSpec } from "../types/ZoneResourceSpec";
import { ZoneDiscoverySpec } from "../types/ZoneDiscoverySpec";
import { ZoneAssetStatus } from "../types/ZoneAssetStatus";

export interface ZoneArgs {
  // Optional. User friendly display name.
  DisplayName?: string;

  /*
Optional. User defined labels for the zone.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The lake for the resource
  Lake?: string;

  // The location for the resource
  Location?: string;

  // Required. Immutable. Specification of the resources that are referenced by the assets within this zone.
  ResourceSpec?: ZoneResourceSpec;

  // Optional. Description of the zone.
  Description?: string;

  // Required. Specification of the discovery feature applied to data in this zone.
  DiscoverySpec?: ZoneDiscoverySpec;

  // Required. Immutable. The type of the zone. Possible values: TYPE_UNSPECIFIED, RAW, CURATED
  Type?: string;

  // The name of the zone.
  Name?: string;

  // The project for the resource
  Project?: string;
}
export class Zone extends Resource {
  // Required. Immutable. Specification of the resources that are referenced by the assets within this zone.
  public ResourceSpec?: ZoneResourceSpec;

  // Output only. The time when the zone was created.
  public CreateTime?: string;

  // Optional. User friendly display name.
  public DisplayName?: string;

  /*
Optional. User defined labels for the zone.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // Output only. The time when the zone was last updated.
  public UpdateTime?: string;

  // Required. Specification of the discovery feature applied to data in this zone.
  public DiscoverySpec?: ZoneDiscoverySpec;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // The name of the zone.
  public Name?: string;

  // The lake for the resource
  public Lake?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, string>;

  // The project for the resource
  public Project?: string;

  // Output only. Current state of the zone. Possible values: STATE_UNSPECIFIED, ACTIVE, CREATING, DELETING, ACTION_REQUIRED
  public State?: string;

  // Required. Immutable. The type of the zone. Possible values: TYPE_UNSPECIFIED, RAW, CURATED
  public Type?: string;

  // Output only. System generated globally unique ID for the zone. This ID will be different if the zone is deleted and re-created with the same name.
  public Uid?: string;

  // Output only. Aggregated status of the underlying assets of the zone.
  public AssetStatuses?: Array<ZoneAssetStatus>;

  // Optional. Description of the zone.
  public Description?: string;

  // The location for the resource
  public Location?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DiscoverySpec",
        "Required. Specification of the discovery feature applied to data in this zone.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Optional. User friendly display name.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Optional. User defined labels for the zone.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(InputType.String, "Lake", "The lake for the resource"),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Optional. Description of the zone.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ResourceSpec",
        "Required. Immutable. Specification of the resources that are referenced by the assets within this zone.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "Required. Immutable. The type of the zone. Possible values: TYPE_UNSPECIFIED, RAW, CURATED",
      ),
      new DynamicUIProps(InputType.String, "Name", "The name of the zone."),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project for the resource",
      ),
    ];
  }
}
