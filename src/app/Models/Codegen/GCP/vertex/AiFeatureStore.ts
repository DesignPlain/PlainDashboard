import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Vertex_AiFeatureStoreOnlineServingConfig,
  Vertex_AiFeatureStoreOnlineServingConfig_GetTypes,
} from "../types/Vertex_AiFeatureStoreOnlineServingConfig";
import {
  Vertex_AiFeatureStoreEncryptionSpec,
  Vertex_AiFeatureStoreEncryptionSpec_GetTypes,
} from "../types/Vertex_AiFeatureStoreEncryptionSpec";

export interface AiFeatureStoreArgs {
  // If set to true, any EntityTypes and Features for this Featurestore will also be deleted
  ForceDestroy?: boolean;

  /*
A set of key/value label pairs to assign to this Featurestore.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The name of the Featurestore. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.
  Name?: string;

  /*
Config for online serving resources.
Structure is documented below.
*/
  OnlineServingConfig?: Vertex_AiFeatureStoreOnlineServingConfig;

  // TTL in days for feature values that will be stored in online serving storage. The Feature Store online storage periodically removes obsolete feature values older than onlineStorageTtlDays since the feature generation time. Note that onlineStorageTtlDays should be less than or equal to offlineStorageTtlDays for each EntityType under a featurestore. If not set, default to 4000 days
  OnlineStorageTtlDays?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The region of the dataset. eg us-central1
  Region?: string;

  /*
If set, both of the online and offline data storage will be secured by this key.
Structure is documented below.
*/
  EncryptionSpec?: Vertex_AiFeatureStoreEncryptionSpec;
}
export class AiFeatureStore extends Resource {
  // The region of the dataset. eg us-central1
  public Region?: string;

  // The timestamp of when the featurestore was created in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public CreateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
A set of key/value label pairs to assign to this Featurestore.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The name of the Featurestore. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.
  public Name?: string;

  // TTL in days for feature values that will be stored in online serving storage. The Feature Store online storage periodically removes obsolete feature values older than onlineStorageTtlDays since the feature generation time. Note that onlineStorageTtlDays should be less than or equal to offlineStorageTtlDays for each EntityType under a featurestore. If not set, default to 4000 days
  public OnlineStorageTtlDays?: number;

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

  // The timestamp of when the featurestore was last updated in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public UpdateTime?: string;

  /*
If set, both of the online and offline data storage will be secured by this key.
Structure is documented below.
*/
  public EncryptionSpec?: Vertex_AiFeatureStoreEncryptionSpec;

  // Used to perform consistent read-modify-write updates.
  public Etag?: string;

  // If set to true, any EntityTypes and Features for this Featurestore will also be deleted
  public ForceDestroy?: boolean;

  /*
Config for online serving resources.
Structure is documented below.
*/
  public OnlineServingConfig?: Vertex_AiFeatureStoreOnlineServingConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "OnlineServingConfig",
        "Config for online serving resources.\nStructure is documented below.",
        Vertex_AiFeatureStoreOnlineServingConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "OnlineStorageTtlDays",
        "TTL in days for feature values that will be stored in online serving storage. The Feature Store online storage periodically removes obsolete feature values older than onlineStorageTtlDays since the feature generation time. Note that onlineStorageTtlDays should be less than or equal to offlineStorageTtlDays for each EntityType under a featurestore. If not set, default to 4000 days",
        [],
        false,
        false,
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
        InputType.String,
        "Region",
        "The region of the dataset. eg us-central1",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "EncryptionSpec",
        "If set, both of the online and offline data storage will be secured by this key.\nStructure is documented below.",
        Vertex_AiFeatureStoreEncryptionSpec_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "ForceDestroy",
        "If set to true, any EntityTypes and Features for this Featurestore will also be deleted",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "A set of key/value label pairs to assign to this Featurestore.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the Featurestore. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.",
        [],
        false,
        true,
      ),
    ];
  }
}
