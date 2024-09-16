import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dataplex_ZoneAssetStatus,
  dataplex_ZoneAssetStatus_GetTypes,
} from '../types/dataplex_ZoneAssetStatus';
import {
  dataplex_ZoneDiscoverySpec,
  dataplex_ZoneDiscoverySpec_GetTypes,
} from '../types/dataplex_ZoneDiscoverySpec';
import {
  dataplex_ZoneResourceSpec,
  dataplex_ZoneResourceSpec_GetTypes,
} from '../types/dataplex_ZoneResourceSpec';

export interface ZoneArgs {
  // Optional. User friendly display name.
  displayName?: string;

  // The name of the zone.
  name?: string;

  // The project for the resource
  project?: string;

  // Required. Immutable. The type of the zone. Possible values: TYPE_UNSPECIFIED, RAW, CURATED
  type?: string;

  // Optional. Description of the zone.
  description?: string;

  // Required. Specification of the discovery feature applied to data in this zone.
  discoverySpec?: dataplex_ZoneDiscoverySpec;

  /*
Optional. User defined labels for the zone.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The lake for the resource
  lake?: string;

  // The location for the resource
  location?: string;

  // Required. Immutable. Specification of the resources that are referenced by the assets within this zone.
  resourceSpec?: dataplex_ZoneResourceSpec;
}
export class Zone extends DS_Resource {
  // The name of the zone.
  public name?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public pulumiLabels?: Map<string, string>;

  // Required. Immutable. Specification of the resources that are referenced by the assets within this zone.
  public resourceSpec?: dataplex_ZoneResourceSpec;

  // Output only. Aggregated status of the underlying assets of the zone.
  public assetStatuses?: Array<dataplex_ZoneAssetStatus>;

  // Output only. Current state of the zone. Possible values: STATE_UNSPECIFIED, ACTIVE, CREATING, DELETING, ACTION_REQUIRED
  public state?: string;

  // Output only. The time when the zone was last updated.
  public updateTime?: string;

  // Optional. Description of the zone.
  public description?: string;

  // Optional. User friendly display name.
  public displayName?: string;

  // The lake for the resource
  public lake?: string;

  // Required. Immutable. The type of the zone. Possible values: TYPE_UNSPECIFIED, RAW, CURATED
  public type?: string;

  // Output only. System generated globally unique ID for the zone. This ID will be different if the zone is deleted and re-created with the same name.
  public uid?: string;

  // The project for the resource
  public project?: string;

  // Output only. The time when the zone was created.
  public createTime?: string;

  // Required. Specification of the discovery feature applied to data in this zone.
  public discoverySpec?: dataplex_ZoneDiscoverySpec;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
Optional. User defined labels for the zone.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // The location for the resource
  public location?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        'labels',
        'Optional. User defined labels for the zone.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'lake',
        'The lake for the resource',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'resourceSpec',
        'Required. Immutable. Specification of the resources that are referenced by the assets within this zone.',
        () => dataplex_ZoneResourceSpec_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'displayName',
        'Optional. User friendly display name.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the zone.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The project for the resource',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'discoverySpec',
        'Required. Specification of the discovery feature applied to data in this zone.',
        () => dataplex_ZoneDiscoverySpec_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'type',
        'Required. Immutable. The type of the zone. Possible values: TYPE_UNSPECIFIED, RAW, CURATED',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Optional. Description of the zone.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'location',
        'The location for the resource',
        () => [],
        true,
        true,
      ),
    ];
  }
}
