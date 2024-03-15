import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { FeatureResourceState } from "../types/FeatureResourceState";
import { FeatureState } from "../types/FeatureState";
import { FeatureSpec } from "../types/FeatureSpec";
import { FeatureFleetDefaultMemberConfig } from "../types/FeatureFleetDefaultMemberConfig";

export interface FeatureArgs {
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
  Spec?: FeatureSpec;

  /*
Optional. Fleet Default Membership Configuration.
Structure is documented below.
*/
  FleetDefaultMemberConfig?: FeatureFleetDefaultMemberConfig;

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
}
export class Feature extends Resource {
  /*
GCP labels for this Feature.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The location for the resource


- - -
*/
  public Location?: string;

  // The full, unique name of this Feature resource
  public Name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
State of the Feature resource itself.
Structure is documented below.
*/
  public ResourceStates?: Array<FeatureResourceState>;

  /*
Optional. Hub-wide Feature configuration. If this Feature does not support any Hub-wide configuration, this field may be unused.
Structure is documented below.
*/
  public Spec?: FeatureSpec;

  /*
(Output)
Output only. The "running state" of the Feature in this Hub.
Structure is documented below.
*/
  public States?: Array<FeatureState>;

  // Output only. When the Feature resource was created.
  public CreateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Optional. Fleet Default Membership Configuration.
Structure is documented below.
*/
  public FleetDefaultMemberConfig?: FeatureFleetDefaultMemberConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
(Output)
The time this status and any related Feature-specific details were updated. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z"
*/
  public UpdateTime?: string;

  // Output only. When the Feature resource was deleted.
  public DeleteTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Spec",
        "Optional. Hub-wide Feature configuration. If this Feature does not support any Hub-wide configuration, this field may be unused.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "FleetDefaultMemberConfig",
        "Optional. Fleet Default Membership Configuration.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "GCP labels for this Feature.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The full, unique name of this Feature resource",
      ),
    ];
  }
}
