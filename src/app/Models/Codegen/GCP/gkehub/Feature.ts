import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkehub_FeatureSpec,
  Gkehub_FeatureSpec_GetTypes,
} from "../types/Gkehub_FeatureSpec";
import {
  Gkehub_FeatureFleetDefaultMemberConfig,
  Gkehub_FeatureFleetDefaultMemberConfig_GetTypes,
} from "../types/Gkehub_FeatureFleetDefaultMemberConfig";
import {
  Gkehub_FeatureResourceState,
  Gkehub_FeatureResourceState_GetTypes,
} from "../types/Gkehub_FeatureResourceState";
import {
  Gkehub_FeatureState,
  Gkehub_FeatureState_GetTypes,
} from "../types/Gkehub_FeatureState";

export interface FeatureArgs {
  /*
GCP labels for this Feature.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The location for the resource


- - -
*/
  Location?: string;

  // The full, unique name of this Feature resource
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Optional. Hub-wide Feature configuration. If this Feature does not support any Hub-wide configuration, this field may be unused.
Structure is documented below.
*/
  Spec?: Gkehub_FeatureSpec;

  /*
Optional. Fleet Default Membership Configuration.
Structure is documented below.
*/
  FleetDefaultMemberConfig?: Gkehub_FeatureFleetDefaultMemberConfig;
}
export class Feature extends Resource {
  /*
GCP labels for this Feature.
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
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
State of the Feature resource itself.
Structure is documented below.
*/
  public ResourceStates?: Array<Gkehub_FeatureResourceState>;

  /*
(Output)
The time this status and any related Feature-specific details were updated. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z"
*/
  public UpdateTime?: string;

  // The full, unique name of this Feature resource
  public Name?: string;

  /*
Optional. Hub-wide Feature configuration. If this Feature does not support any Hub-wide configuration, this field may be unused.
Structure is documented below.
*/
  public Spec?: Gkehub_FeatureSpec;

  /*
(Output)
Output only. The "running state" of the Feature in this Hub.
Structure is documented below.
*/
  public States?: Array<Gkehub_FeatureState>;

  // Output only. When the Feature resource was created.
  public CreateTime?: string;

  // Output only. When the Feature resource was deleted.
  public DeleteTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Optional. Fleet Default Membership Configuration.
Structure is documented below.
*/
  public FleetDefaultMemberConfig?: Gkehub_FeatureFleetDefaultMemberConfig;

  /*
The location for the resource


- - -
*/
  public Location?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "GCP labels for this Feature.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The full, unique name of this Feature resource",
        [],
        false,
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
        "Spec",
        "Optional. Hub-wide Feature configuration. If this Feature does not support any Hub-wide configuration, this field may be unused.\nStructure is documented below.",
        Gkehub_FeatureSpec_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "FleetDefaultMemberConfig",
        "Optional. Fleet Default Membership Configuration.\nStructure is documented below.",
        Gkehub_FeatureFleetDefaultMemberConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
