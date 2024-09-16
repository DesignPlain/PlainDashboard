import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  gkehub_FeatureResourceState,
  gkehub_FeatureResourceState_GetTypes,
} from '../types/gkehub_FeatureResourceState';
import {
  gkehub_FeatureState,
  gkehub_FeatureState_GetTypes,
} from '../types/gkehub_FeatureState';
import {
  gkehub_FeatureFleetDefaultMemberConfig,
  gkehub_FeatureFleetDefaultMemberConfig_GetTypes,
} from '../types/gkehub_FeatureFleetDefaultMemberConfig';
import {
  gkehub_FeatureSpec,
  gkehub_FeatureSpec_GetTypes,
} from '../types/gkehub_FeatureSpec';

export interface FeatureArgs {
  /*
Optional. Fleet Default Membership Configuration.
Structure is documented below.
*/
  fleetDefaultMemberConfig?: gkehub_FeatureFleetDefaultMemberConfig;

  /*
GCP labels for this Feature.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
The location for the resource


- - -
*/
  location?: string;

  // The full, unique name of this Feature resource
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Optional. Hub-wide Feature configuration. If this Feature does not support any Hub-wide configuration, this field may be unused.
Structure is documented below.
*/
  spec?: gkehub_FeatureSpec;
}
export class Feature extends DS_Resource {
  /*
State of the Feature resource itself.
Structure is documented below.
*/
  public resourceStates?: Array<gkehub_FeatureResourceState>;

  /*
(Output)
The time this status and any related Feature-specific details were updated. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z"
*/
  public updateTime?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // Output only. When the Feature resource was deleted.
  public deleteTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
Optional. Fleet Default Membership Configuration.
Structure is documented below.
*/
  public fleetDefaultMemberConfig?: gkehub_FeatureFleetDefaultMemberConfig;

  /*
GCP labels for this Feature.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
The location for the resource


- - -
*/
  public location?: string;

  // The full, unique name of this Feature resource
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Output only. When the Feature resource was created.
  public createTime?: string;

  /*
(Output)
Output only. The "running state" of the Feature in this Hub.
Structure is documented below.
*/
  public states?: Array<gkehub_FeatureState>;

  /*
Optional. Hub-wide Feature configuration. If this Feature does not support any Hub-wide configuration, this field may be unused.
Structure is documented below.
*/
  public spec?: gkehub_FeatureSpec;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        'labels',
        'GCP labels for this Feature.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'location',
        'The location for the resource\n\n\n- - -',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The full, unique name of this Feature resource',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'spec',
        'Optional. Hub-wide Feature configuration. If this Feature does not support any Hub-wide configuration, this field may be unused.\nStructure is documented below.',
        () => gkehub_FeatureSpec_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'fleetDefaultMemberConfig',
        'Optional. Fleet Default Membership Configuration.\nStructure is documented below.',
        () => gkehub_FeatureFleetDefaultMemberConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
