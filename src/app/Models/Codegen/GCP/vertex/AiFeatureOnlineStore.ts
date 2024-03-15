import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { AiFeatureOnlineStoreOptimized } from "../types/AiFeatureOnlineStoreOptimized";
import { AiFeatureOnlineStoreEmbeddingManagement } from "../types/AiFeatureOnlineStoreEmbeddingManagement";
import { AiFeatureOnlineStoreDedicatedServingEndpoint } from "../types/AiFeatureOnlineStoreDedicatedServingEndpoint";
import { AiFeatureOnlineStoreBigtable } from "../types/AiFeatureOnlineStoreBigtable";

export interface AiFeatureOnlineStoreArgs {
  // Settings for the Optimized store that will be created to serve featureValues for all FeatureViews under this FeatureOnlineStore
  Optimized?: AiFeatureOnlineStoreOptimized;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The region of feature online store. eg us-central1
  Region?: string;

  /*
The settings for embedding management in FeatureOnlineStore. Embedding management can only be used with BigTable.
Structure is documented below.
*/
  EmbeddingManagement?: AiFeatureOnlineStoreEmbeddingManagement;

  /*
The dedicated serving endpoint for this FeatureOnlineStore, which is different from common vertex service endpoint. Only need to set when you choose Optimized storage type or enable EmbeddingManagement. Will use public endpoint by default.
Structure is documented below.
*/
  DedicatedServingEndpoint?: AiFeatureOnlineStoreDedicatedServingEndpoint;

  // If set to true, any FeatureViews and Features for this FeatureOnlineStore will also be deleted.
  ForceDestroy?: boolean;

  /*
The labels with user-defined metadata to organize your feature online stores.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The resource name of the Feature Online Store. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.


- - -
*/
  Name?: string;

  /*
Settings for Cloud Bigtable instance that will be created to serve featureValues for all FeatureViews under this FeatureOnlineStore.
Structure is documented below.
*/
  Bigtable?: AiFeatureOnlineStoreBigtable;
}
export class AiFeatureOnlineStore extends Resource {
  // Used to perform consistent read-modify-write updates.
  public Etag?: string;

  /*
The resource name of the Feature Online Store. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.


- - -
*/
  public Name?: string;

  // Settings for the Optimized store that will be created to serve featureValues for all FeatureViews under this FeatureOnlineStore
  public Optimized?: AiFeatureOnlineStoreOptimized;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Settings for Cloud Bigtable instance that will be created to serve featureValues for all FeatureViews under this FeatureOnlineStore.
Structure is documented below.
*/
  public Bigtable?: AiFeatureOnlineStoreBigtable;

  /*
The settings for embedding management in FeatureOnlineStore. Embedding management can only be used with BigTable.
Structure is documented below.
*/
  public EmbeddingManagement?: AiFeatureOnlineStoreEmbeddingManagement;

  // If set to true, any FeatureViews and Features for this FeatureOnlineStore will also be deleted.
  public ForceDestroy?: boolean;

  // The region of feature online store. eg us-central1
  public Region?: string;

  // The timestamp of when the feature online store was last updated in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public UpdateTime?: string;

  // The state of the Feature Online Store. See the possible states in [this link](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.featureOnlineStores#state).
  public State?: string;

  // The timestamp of when the feature online store was created in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public CreateTime?: string;

  /*
The dedicated serving endpoint for this FeatureOnlineStore, which is different from common vertex service endpoint. Only need to set when you choose Optimized storage type or enable EmbeddingManagement. Will use public endpoint by default.
Structure is documented below.
*/
  public DedicatedServingEndpoint?: AiFeatureOnlineStoreDedicatedServingEndpoint;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
The labels with user-defined metadata to organize your feature online stores.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The resource name of the Feature Online Store. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Optimized",
        "Settings for the Optimized store that will be created to serve featureValues for all FeatureViews under this FeatureOnlineStore",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The region of feature online store. eg us-central1",
      ),
      new DynamicUIProps(
        InputType.String,
        "EmbeddingManagement",
        "The settings for embedding management in FeatureOnlineStore. Embedding management can only be used with BigTable.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "ForceDestroy",
        "If set to true, any FeatureViews and Features for this FeatureOnlineStore will also be deleted.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "The labels with user-defined metadata to organize your feature online stores.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DedicatedServingEndpoint",
        "The dedicated serving endpoint for this FeatureOnlineStore, which is different from common vertex service endpoint. Only need to set when you choose Optimized storage type or enable EmbeddingManagement. Will use public endpoint by default.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Bigtable",
        "Settings for Cloud Bigtable instance that will be created to serve featureValues for all FeatureViews under this FeatureOnlineStore.\nStructure is documented below.",
      ),
    ];
  }
}
