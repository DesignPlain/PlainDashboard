import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataplex_ZoneDiscoverySpec,
  Dataplex_ZoneDiscoverySpec_GetTypes,
} from "../types/Dataplex_ZoneDiscoverySpec";
import {
  Dataplex_ZoneResourceSpec,
  Dataplex_ZoneResourceSpec_GetTypes,
} from "../types/Dataplex_ZoneResourceSpec";
import {
  Dataplex_ZoneAssetStatus,
  Dataplex_ZoneAssetStatus_GetTypes,
} from "../types/Dataplex_ZoneAssetStatus";

export interface ZoneArgs {
  // Optional. User friendly display name.
  DisplayName?: string;

  // The name of the zone.
  Name?: string;

  // The project for the resource
  Project?: string;

  // Required. Immutable. The type of the zone. Possible values: TYPE_UNSPECIFIED, RAW, CURATED
  Type?: string;

  // Optional. Description of the zone.
  Description?: string;

  // Required. Specification of the discovery feature applied to data in this zone.
  DiscoverySpec?: Dataplex_ZoneDiscoverySpec;

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
  ResourceSpec?: Dataplex_ZoneResourceSpec;
}
export class Zone extends Resource {
  /*
Optional. User defined labels for the zone.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The lake for the resource
  public Lake?: string;

  // Required. Immutable. Specification of the resources that are referenced by the assets within this zone.
  public ResourceSpec?: Dataplex_ZoneResourceSpec;

  // Output only. The time when the zone was last updated.
  public UpdateTime?: string;

  // Output only. Aggregated status of the underlying assets of the zone.
  public AssetStatuses?: Array<Dataplex_ZoneAssetStatus>;

  // Optional. User friendly display name.
  public DisplayName?: string;

  // The location for the resource
  public Location?: string;

  // Output only. Current state of the zone. Possible values: STATE_UNSPECIFIED, ACTIVE, CREATING, DELETING, ACTION_REQUIRED
  public State?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, InputType.String>;

  // Required. Immutable. The type of the zone. Possible values: TYPE_UNSPECIFIED, RAW, CURATED
  public Type?: string;

  // Output only. System generated globally unique ID for the zone. This ID will be different if the zone is deleted and re-created with the same name.
  public Uid?: string;

  // Output only. The time when the zone was created.
  public CreateTime?: string;

  // The project for the resource
  public Project?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, InputType.String>;

  // The name of the zone.
  public Name?: string;

  // Optional. Description of the zone.
  public Description?: string;

  // Required. Specification of the discovery feature applied to data in this zone.
  public DiscoverySpec?: Dataplex_ZoneDiscoverySpec;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the zone.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Optional. User defined labels for the zone.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "DiscoverySpec",
        "Required. Specification of the discovery feature applied to data in this zone.",
        Dataplex_ZoneDiscoverySpec_GetTypes(),
        true,
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
        "Location",
        "The location for the resource",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ResourceSpec",
        "Required. Immutable. Specification of the resources that are referenced by the assets within this zone.",
        Dataplex_ZoneResourceSpec_GetTypes(),
        true,
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
        InputType.String,
        "Project",
        "The project for the resource",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "Required. Immutable. The type of the zone. Possible values: TYPE_UNSPECIFIED, RAW, CURATED",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Optional. Description of the zone.",
        [],
        false,
        false,
      ),
    ];
  }
}
