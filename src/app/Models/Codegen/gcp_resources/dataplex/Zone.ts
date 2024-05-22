import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataplex_ZoneDiscoverySpec,
  dataplex_ZoneDiscoverySpec_GetTypes,
} from "../types/dataplex_ZoneDiscoverySpec";
import {
  dataplex_ZoneResourceSpec,
  dataplex_ZoneResourceSpec_GetTypes,
} from "../types/dataplex_ZoneResourceSpec";
import {
  dataplex_ZoneAssetStatus,
  dataplex_ZoneAssetStatus_GetTypes,
} from "../types/dataplex_ZoneAssetStatus";

export interface ZoneArgs {
  // Required. Specification of the discovery feature applied to data in this zone.
  discoverySpec?: dataplex_ZoneDiscoverySpec;

  // Optional. User friendly display name.
  displayName?: string;

  /*
Optional. User defined labels for the zone.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The location for the resource
  location?: string;

  // Required. Immutable. Specification of the resources that are referenced by the assets within this zone.
  resourceSpec?: dataplex_ZoneResourceSpec;

  // Optional. Description of the zone.
  description?: string;

  // The lake for the resource
  lake?: string;

  // The name of the zone.
  name?: string;

  // The project for the resource
  project?: string;

  // Required. Immutable. The type of the zone. Possible values: TYPE_UNSPECIFIED, RAW, CURATED
  type?: string;
}
export class Zone extends Resource {
  // The lake for the resource
  public lake?: string;

  // The location for the resource
  public location?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public pulumiLabels?: Map<string, string>;

  // Output only. Current state of the zone. Possible values: STATE_UNSPECIFIED, ACTIVE, CREATING, DELETING, ACTION_REQUIRED
  public state?: string;

  // Optional. User friendly display name.
  public displayName?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // The name of the zone.
  public name?: string;

  // The project for the resource
  public project?: string;

  // Required. Immutable. Specification of the resources that are referenced by the assets within this zone.
  public resourceSpec?: dataplex_ZoneResourceSpec;

  // Output only. System generated globally unique ID for the zone. This ID will be different if the zone is deleted and re-created with the same name.
  public uid?: string;

  // Output only. The time when the zone was created.
  public createTime?: string;

  // Optional. Description of the zone.
  public description?: string;

  // Required. Specification of the discovery feature applied to data in this zone.
  public discoverySpec?: dataplex_ZoneDiscoverySpec;

  // Required. Immutable. The type of the zone. Possible values: TYPE_UNSPECIFIED, RAW, CURATED
  public type?: string;

  // Output only. The time when the zone was last updated.
  public updateTime?: string;

  // Output only. Aggregated status of the underlying assets of the zone.
  public assetStatuses?: Array<dataplex_ZoneAssetStatus>;

  /*
Optional. User defined labels for the zone.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "resourceSpec",
        "Required. Immutable. Specification of the resources that are referenced by the assets within this zone.",
        dataplex_ZoneResourceSpec_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Optional. Description of the zone.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "discoverySpec",
        "Required. Specification of the discovery feature applied to data in this zone.",
        dataplex_ZoneDiscoverySpec_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "Optional. User friendly display name.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "lake",
        "The lake for the resource",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the zone.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The project for the resource",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "Required. Immutable. The type of the zone. Possible values: TYPE_UNSPECIFIED, RAW, CURATED",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Optional. User defined labels for the zone.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location for the resource",
        [],
        true,
        true,
      ),
    ];
  }
}
