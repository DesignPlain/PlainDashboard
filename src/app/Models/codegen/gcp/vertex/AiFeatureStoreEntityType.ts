import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  vertex_AiFeatureStoreEntityTypeMonitoringConfig,
  vertex_AiFeatureStoreEntityTypeMonitoringConfig_GetTypes,
} from "../types/vertex_AiFeatureStoreEntityTypeMonitoringConfig";

export interface AiFeatureStoreEntityTypeArgs {
  // Config for data retention policy in offline storage. TTL in days for feature values that will be stored in offline storage. The Feature Store offline storage periodically removes obsolete feature values older than offlineStorageTtlDays since the feature generation time. If unset (or explicitly set to 0), default to 4000 days TTL.
  offlineStorageTtlDays?: number;

  // Optional. Description of the EntityType.
  description?: string;

  /*
The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}.


- - -
*/
  featurestore?: string;

  /*
A set of key/value label pairs to assign to this EntityType.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
The default monitoring configuration for all Features under this EntityType.
If this is populated with [FeaturestoreMonitoringConfig.monitoring_interval] specified, snapshot analysis monitoring is enabled. Otherwise, snapshot analysis monitoring is disabled.
Structure is documented below.
*/
  monitoringConfig?: vertex_AiFeatureStoreEntityTypeMonitoringConfig;

  // The name of the EntityType. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.
  name?: string;
}
export class AiFeatureStoreEntityType extends DS_Resource {
  // The timestamp of when the featurestore was created in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public createTime?: string;

  // Optional. Description of the EntityType.
  public description?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}.


- - -
*/
  public featurestore?: string;

  // The region of the EntityType.
  public region?: string;

  // The timestamp of when the featurestore was last updated in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public updateTime?: string;

  // Used to perform consistent read-modify-write updates.
  public etag?: string;

  /*
A set of key/value label pairs to assign to this EntityType.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
The default monitoring configuration for all Features under this EntityType.
If this is populated with [FeaturestoreMonitoringConfig.monitoring_interval] specified, snapshot analysis monitoring is enabled. Otherwise, snapshot analysis monitoring is disabled.
Structure is documented below.
*/
  public monitoringConfig?: vertex_AiFeatureStoreEntityTypeMonitoringConfig;

  // The name of the EntityType. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.
  public name?: string;

  // Config for data retention policy in offline storage. TTL in days for feature values that will be stored in offline storage. The Feature Store offline storage periodically removes obsolete feature values older than offlineStorageTtlDays since the feature generation time. If unset (or explicitly set to 0), default to 4000 days TTL.
  public offlineStorageTtlDays?: number;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "A set of key/value label pairs to assign to this EntityType.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "monitoringConfig",
        "The default monitoring configuration for all Features under this EntityType.\nIf this is populated with [FeaturestoreMonitoringConfig.monitoring_interval] specified, snapshot analysis monitoring is enabled. Otherwise, snapshot analysis monitoring is disabled.\nStructure is documented below.",
        () => vertex_AiFeatureStoreEntityTypeMonitoringConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the EntityType. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "offlineStorageTtlDays",
        "Config for data retention policy in offline storage. TTL in days for feature values that will be stored in offline storage. The Feature Store offline storage periodically removes obsolete feature values older than offlineStorageTtlDays since the feature generation time. If unset (or explicitly set to 0), default to 4000 days TTL.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Optional. Description of the EntityType.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "featurestore",
        "The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}.\n\n\n- - -",
        () => [],
        true,
        true,
      ),
    ];
  }
}
