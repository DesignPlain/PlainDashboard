import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  vertex_AiFeatureOnlineStoreEmbeddingManagement,
  vertex_AiFeatureOnlineStoreEmbeddingManagement_GetTypes,
} from '../types/vertex_AiFeatureOnlineStoreEmbeddingManagement';
import {
  vertex_AiFeatureOnlineStoreOptimized,
  vertex_AiFeatureOnlineStoreOptimized_GetTypes,
} from '../types/vertex_AiFeatureOnlineStoreOptimized';
import {
  vertex_AiFeatureOnlineStoreDedicatedServingEndpoint,
  vertex_AiFeatureOnlineStoreDedicatedServingEndpoint_GetTypes,
} from '../types/vertex_AiFeatureOnlineStoreDedicatedServingEndpoint';
import {
  vertex_AiFeatureOnlineStoreBigtable,
  vertex_AiFeatureOnlineStoreBigtable_GetTypes,
} from '../types/vertex_AiFeatureOnlineStoreBigtable';

export interface AiFeatureOnlineStoreArgs {
  /*
Settings for Cloud Bigtable instance that will be created to serve featureValues for all FeatureViews under this FeatureOnlineStore.
Structure is documented below.
*/
  bigtable?: vertex_AiFeatureOnlineStoreBigtable;

  /*
The settings for embedding management in FeatureOnlineStore. Embedding management can only be used with BigTable.
Structure is documented below.
*/
  embeddingManagement?: vertex_AiFeatureOnlineStoreEmbeddingManagement;

  // If set to true, any FeatureViews and Features for this FeatureOnlineStore will also be deleted.
  forceDestroy?: boolean;

  // Settings for the Optimized store that will be created to serve featureValues for all FeatureViews under this FeatureOnlineStore
  optimized?: vertex_AiFeatureOnlineStoreOptimized;

  // The region of feature online store. eg us-central1
  region?: string;

  /*
The dedicated serving endpoint for this FeatureOnlineStore, which is different from common vertex service endpoint. Only need to set when you choose Optimized storage type or enable EmbeddingManagement. Will use public endpoint by default.
Structure is documented below.
*/
  dedicatedServingEndpoint?: vertex_AiFeatureOnlineStoreDedicatedServingEndpoint;

  /*
The labels with user-defined metadata to organize your feature online stores.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
The resource name of the Feature Online Store. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.


- - -
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class AiFeatureOnlineStore extends DS_Resource {
  /*
The dedicated serving endpoint for this FeatureOnlineStore, which is different from common vertex service endpoint. Only need to set when you choose Optimized storage type or enable EmbeddingManagement. Will use public endpoint by default.
Structure is documented below.
*/
  public dedicatedServingEndpoint?: vertex_AiFeatureOnlineStoreDedicatedServingEndpoint;

  /*
The settings for embedding management in FeatureOnlineStore. Embedding management can only be used with BigTable.
Structure is documented below.
*/
  public embeddingManagement?: vertex_AiFeatureOnlineStoreEmbeddingManagement;

  // Used to perform consistent read-modify-write updates.
  public etag?: string;

  // The state of the Feature Online Store. See the possible states in [this link](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.featureOnlineStores#state).
  public state?: string;

  // Settings for the Optimized store that will be created to serve featureValues for all FeatureViews under this FeatureOnlineStore
  public optimized?: vertex_AiFeatureOnlineStoreOptimized;

  /*
Settings for Cloud Bigtable instance that will be created to serve featureValues for all FeatureViews under this FeatureOnlineStore.
Structure is documented below.
*/
  public bigtable?: vertex_AiFeatureOnlineStoreBigtable;

  // The timestamp of when the feature online store was created in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public createTime?: string;

  // If set to true, any FeatureViews and Features for this FeatureOnlineStore will also be deleted.
  public forceDestroy?: boolean;

  /*
The resource name of the Feature Online Store. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.


- - -
*/
  public name?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
The labels with user-defined metadata to organize your feature online stores.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The region of feature online store. eg us-central1
  public region?: string;

  // The timestamp of when the feature online store was last updated in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public updateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        'forceDestroy',
        'If set to true, any FeatureViews and Features for this FeatureOnlineStore will also be deleted.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The resource name of the Feature Online Store. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.\n\n\n- - -',
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
        InputType.String,
        'region',
        'The region of feature online store. eg us-central1',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'dedicatedServingEndpoint',
        'The dedicated serving endpoint for this FeatureOnlineStore, which is different from common vertex service endpoint. Only need to set when you choose Optimized storage type or enable EmbeddingManagement. Will use public endpoint by default.\nStructure is documented below.',
        () => vertex_AiFeatureOnlineStoreDedicatedServingEndpoint_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'labels',
        'The labels with user-defined metadata to organize your feature online stores.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'bigtable',
        'Settings for Cloud Bigtable instance that will be created to serve featureValues for all FeatureViews under this FeatureOnlineStore.\nStructure is documented below.',
        () => vertex_AiFeatureOnlineStoreBigtable_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'embeddingManagement',
        'The settings for embedding management in FeatureOnlineStore. Embedding management can only be used with BigTable.\nStructure is documented below.',
        () => vertex_AiFeatureOnlineStoreEmbeddingManagement_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'optimized',
        'Settings for the Optimized store that will be created to serve featureValues for all FeatureViews under this FeatureOnlineStore',
        () => vertex_AiFeatureOnlineStoreOptimized_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
