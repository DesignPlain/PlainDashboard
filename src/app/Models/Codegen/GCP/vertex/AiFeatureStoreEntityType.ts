import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Vertex_AiFeatureStoreEntityTypeMonitoringConfig,
  Vertex_AiFeatureStoreEntityTypeMonitoringConfig_GetTypes,
} from "../types/Vertex_AiFeatureStoreEntityTypeMonitoringConfig";

export interface AiFeatureStoreEntityTypeArgs {
  // Optional. Description of the EntityType.
  Description?: string;

  /*
The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}.


- - -
*/
  Featurestore?: string;

  /*
A set of key/value label pairs to assign to this EntityType.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The default monitoring configuration for all Features under this EntityType.
If this is populated with [FeaturestoreMonitoringConfig.monitoring_interval] specified, snapshot analysis monitoring is enabled. Otherwise, snapshot analysis monitoring is disabled.
Structure is documented below.
*/
  MonitoringConfig?: Vertex_AiFeatureStoreEntityTypeMonitoringConfig;

  // The name of the EntityType. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.
  Name?: string;

  // Config for data retention policy in offline storage. TTL in days for feature values that will be stored in offline storage. The Feature Store offline storage periodically removes obsolete feature values older than offlineStorageTtlDays since the feature generation time. If unset (or explicitly set to 0), default to 4000 days TTL.
  OfflineStorageTtlDays?: number;
}
export class AiFeatureStoreEntityType extends Resource {
  /*
The default monitoring configuration for all Features under this EntityType.
If this is populated with [FeaturestoreMonitoringConfig.monitoring_interval] specified, snapshot analysis monitoring is enabled. Otherwise, snapshot analysis monitoring is disabled.
Structure is documented below.
*/
  public MonitoringConfig?: Vertex_AiFeatureStoreEntityTypeMonitoringConfig;

  // The name of the EntityType. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.
  public Name?: string;

  // Config for data retention policy in offline storage. TTL in days for feature values that will be stored in offline storage. The Feature Store offline storage periodically removes obsolete feature values older than offlineStorageTtlDays since the feature generation time. If unset (or explicitly set to 0), default to 4000 days TTL.
  public OfflineStorageTtlDays?: number;

  // The timestamp of when the featurestore was created in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public CreateTime?: string;

  // Optional. Description of the EntityType.
  public Description?: string;

  /*
A set of key/value label pairs to assign to this EntityType.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // The region of the EntityType.
  public Region?: string;

  // The timestamp of when the featurestore was last updated in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public UpdateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // Used to perform consistent read-modify-write updates.
  public Etag?: string;

  /*
The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}.


- - -
*/
  public Featurestore?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Optional. Description of the EntityType.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Featurestore",
        "The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "A set of key/value label pairs to assign to this EntityType.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "MonitoringConfig",
        "The default monitoring configuration for all Features under this EntityType.\nIf this is populated with [FeaturestoreMonitoringConfig.monitoring_interval] specified, snapshot analysis monitoring is enabled. Otherwise, snapshot analysis monitoring is disabled.\nStructure is documented below.",
        Vertex_AiFeatureStoreEntityTypeMonitoringConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the EntityType. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "OfflineStorageTtlDays",
        "Config for data retention policy in offline storage. TTL in days for feature values that will be stored in offline storage. The Feature Store offline storage periodically removes obsolete feature values older than offlineStorageTtlDays since the feature generation time. If unset (or explicitly set to 0), default to 4000 days TTL.",
        [],
        false,
        false,
      ),
    ];
  }
}
