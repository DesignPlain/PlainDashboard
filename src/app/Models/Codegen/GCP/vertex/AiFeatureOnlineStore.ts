import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Vertex_AiFeatureOnlineStoreEmbeddingManagement,
  Vertex_AiFeatureOnlineStoreEmbeddingManagement_GetTypes,
} from "../types/Vertex_AiFeatureOnlineStoreEmbeddingManagement";
import {
  Vertex_AiFeatureOnlineStoreOptimized,
  Vertex_AiFeatureOnlineStoreOptimized_GetTypes,
} from "../types/Vertex_AiFeatureOnlineStoreOptimized";
import {
  Vertex_AiFeatureOnlineStoreBigtable,
  Vertex_AiFeatureOnlineStoreBigtable_GetTypes,
} from "../types/Vertex_AiFeatureOnlineStoreBigtable";
import {
  Vertex_AiFeatureOnlineStoreDedicatedServingEndpoint,
  Vertex_AiFeatureOnlineStoreDedicatedServingEndpoint_GetTypes,
} from "../types/Vertex_AiFeatureOnlineStoreDedicatedServingEndpoint";

export interface AiFeatureOnlineStoreArgs {
  /*
The settings for embedding management in FeatureOnlineStore. Embedding management can only be used with BigTable.
Structure is documented below.
*/
  EmbeddingManagement?: Vertex_AiFeatureOnlineStoreEmbeddingManagement;

  // If set to true, any FeatureViews and Features for this FeatureOnlineStore will also be deleted.
  ForceDestroy?: boolean;

  // Settings for the Optimized store that will be created to serve featureValues for all FeatureViews under this FeatureOnlineStore
  Optimized?: Vertex_AiFeatureOnlineStoreOptimized;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The region of feature online store. eg us-central1
  Region?: string;

  /*
Settings for Cloud Bigtable instance that will be created to serve featureValues for all FeatureViews under this FeatureOnlineStore.
Structure is documented below.
*/
  Bigtable?: Vertex_AiFeatureOnlineStoreBigtable;

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
The dedicated serving endpoint for this FeatureOnlineStore, which is different from common vertex service endpoint. Only need to set when you choose Optimized storage type or enable EmbeddingManagement. Will use public endpoint by default.
Structure is documented below.
*/
  DedicatedServingEndpoint?: Vertex_AiFeatureOnlineStoreDedicatedServingEndpoint;
}
export class AiFeatureOnlineStore extends Resource {
  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The timestamp of when the feature online store was last updated in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public UpdateTime?: string;

  // The region of feature online store. eg us-central1
  public Region?: string;

  // The timestamp of when the feature online store was created in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public CreateTime?: string;

  /*
The dedicated serving endpoint for this FeatureOnlineStore, which is different from common vertex service endpoint. Only need to set when you choose Optimized storage type or enable EmbeddingManagement. Will use public endpoint by default.
Structure is documented below.
*/
  public DedicatedServingEndpoint?: Vertex_AiFeatureOnlineStoreDedicatedServingEndpoint;

  /*
The settings for embedding management in FeatureOnlineStore. Embedding management can only be used with BigTable.
Structure is documented below.
*/
  public EmbeddingManagement?: Vertex_AiFeatureOnlineStoreEmbeddingManagement;

  // If set to true, any FeatureViews and Features for this FeatureOnlineStore will also be deleted.
  public ForceDestroy?: boolean;

  /*
Settings for Cloud Bigtable instance that will be created to serve featureValues for all FeatureViews under this FeatureOnlineStore.
Structure is documented below.
*/
  public Bigtable?: Vertex_AiFeatureOnlineStoreBigtable;

  // Used to perform consistent read-modify-write updates.
  public Etag?: string;

  // Settings for the Optimized store that will be created to serve featureValues for all FeatureViews under this FeatureOnlineStore
  public Optimized?: Vertex_AiFeatureOnlineStoreOptimized;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
The labels with user-defined metadata to organize your feature online stores.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The resource name of the Feature Online Store. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.


- - -
*/
  public Name?: string;

  // The state of the Feature Online Store. See the possible states in [this link](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.featureOnlineStores#state).
  public State?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "EmbeddingManagement",
        "The settings for embedding management in FeatureOnlineStore. Embedding management can only be used with BigTable.\nStructure is documented below.",
        Vertex_AiFeatureOnlineStoreEmbeddingManagement_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "ForceDestroy",
        "If set to true, any FeatureViews and Features for this FeatureOnlineStore will also be deleted.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Optimized",
        "Settings for the Optimized store that will be created to serve featureValues for all FeatureViews under this FeatureOnlineStore",
        Vertex_AiFeatureOnlineStoreOptimized_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The region of feature online store. eg us-central1",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Bigtable",
        "Settings for Cloud Bigtable instance that will be created to serve featureValues for all FeatureViews under this FeatureOnlineStore.\nStructure is documented below.",
        Vertex_AiFeatureOnlineStoreBigtable_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "DedicatedServingEndpoint",
        "The dedicated serving endpoint for this FeatureOnlineStore, which is different from common vertex service endpoint. Only need to set when you choose Optimized storage type or enable EmbeddingManagement. Will use public endpoint by default.\nStructure is documented below.",
        Vertex_AiFeatureOnlineStoreDedicatedServingEndpoint_GetTypes(),
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
        InputType.Map,
        "Labels",
        "The labels with user-defined metadata to organize your feature online stores.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The resource name of the Feature Online Store. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.\n\n\n- - -",
        [],
        false,
        true,
      ),
    ];
  }
}
