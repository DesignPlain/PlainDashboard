import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  vertex_AiFeatureStoreEncryptionSpec,
  vertex_AiFeatureStoreEncryptionSpec_GetTypes,
} from "../types/vertex_AiFeatureStoreEncryptionSpec";
import {
  vertex_AiFeatureStoreOnlineServingConfig,
  vertex_AiFeatureStoreOnlineServingConfig_GetTypes,
} from "../types/vertex_AiFeatureStoreOnlineServingConfig";

export interface AiFeatureStoreArgs {
  // TTL in days for feature values that will be stored in online serving storage. The Feature Store online storage periodically removes obsolete feature values older than onlineStorageTtlDays since the feature generation time. Note that onlineStorageTtlDays should be less than or equal to offlineStorageTtlDays for each EntityType under a featurestore. If not set, default to 4000 days
  onlineStorageTtlDays?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The region of the dataset. eg us-central1
  region?: string;

  /*
If set, both of the online and offline data storage will be secured by this key.
Structure is documented below.
*/
  encryptionSpec?: vertex_AiFeatureStoreEncryptionSpec;

  // If set to true, any EntityTypes and Features for this Featurestore will also be deleted
  forceDestroy?: boolean;

  /*
A set of key/value label pairs to assign to this Featurestore.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The name of the Featurestore. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.
  name?: string;

  /*
Config for online serving resources.
Structure is documented below.
*/
  onlineServingConfig?: vertex_AiFeatureStoreOnlineServingConfig;
}
export class AiFeatureStore extends Resource {
  // The region of the dataset. eg us-central1
  public region?: string;

  // The timestamp of when the featurestore was created in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public createTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
If set, both of the online and offline data storage will be secured by this key.
Structure is documented below.
*/
  public encryptionSpec?: vertex_AiFeatureStoreEncryptionSpec;

  // Used to perform consistent read-modify-write updates.
  public etag?: string;

  // If set to true, any EntityTypes and Features for this Featurestore will also be deleted
  public forceDestroy?: boolean;

  /*
A set of key/value label pairs to assign to this Featurestore.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // The name of the Featurestore. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.
  public name?: string;

  /*
Config for online serving resources.
Structure is documented below.
*/
  public onlineServingConfig?: vertex_AiFeatureStoreOnlineServingConfig;

  // TTL in days for feature values that will be stored in online serving storage. The Feature Store online storage periodically removes obsolete feature values older than onlineStorageTtlDays since the feature generation time. Note that onlineStorageTtlDays should be less than or equal to offlineStorageTtlDays for each EntityType under a featurestore. If not set, default to 4000 days
  public onlineStorageTtlDays?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // The timestamp of when the featurestore was last updated in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public updateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "forceDestroy",
        "If set to true, any EntityTypes and Features for this Featurestore will also be deleted",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "A set of key/value label pairs to assign to this Featurestore.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the Featurestore. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "onlineServingConfig",
        "Config for online serving resources.\nStructure is documented below.",
        vertex_AiFeatureStoreOnlineServingConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "onlineStorageTtlDays",
        "TTL in days for feature values that will be stored in online serving storage. The Feature Store online storage periodically removes obsolete feature values older than onlineStorageTtlDays since the feature generation time. Note that onlineStorageTtlDays should be less than or equal to offlineStorageTtlDays for each EntityType under a featurestore. If not set, default to 4000 days",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "The region of the dataset. eg us-central1",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "encryptionSpec",
        "If set, both of the online and offline data storage will be secured by this key.\nStructure is documented below.",
        vertex_AiFeatureStoreEncryptionSpec_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
