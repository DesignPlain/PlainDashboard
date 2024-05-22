import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  vertex_AiFeatureOnlineStoreFeatureviewSyncConfig,
  vertex_AiFeatureOnlineStoreFeatureviewSyncConfig_GetTypes,
} from "../types/vertex_AiFeatureOnlineStoreFeatureviewSyncConfig";
import {
  vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfig,
  vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfig_GetTypes,
} from "../types/vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfig";
import {
  vertex_AiFeatureOnlineStoreFeatureviewFeatureRegistrySource,
  vertex_AiFeatureOnlineStoreFeatureviewFeatureRegistrySource_GetTypes,
} from "../types/vertex_AiFeatureOnlineStoreFeatureviewFeatureRegistrySource";
import {
  vertex_AiFeatureOnlineStoreFeatureviewBigQuerySource,
  vertex_AiFeatureOnlineStoreFeatureviewBigQuerySource_GetTypes,
} from "../types/vertex_AiFeatureOnlineStoreFeatureviewBigQuerySource";

export interface AiFeatureOnlineStoreFeatureviewArgs {
  // Name of the FeatureView. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.
  name?: string;

  /*
Configures when data is to be synced/updated for this FeatureView. At the end of the sync the latest featureValues for each entityId of this FeatureView are made ready for online serving.
Structure is documented below.
*/
  syncConfig?: vertex_AiFeatureOnlineStoreFeatureviewSyncConfig;

  /*
Configuration for vector search. It contains the required configurations to create an index from source data, so that approximate nearest neighbor (a.k.a ANN) algorithms search can be performed during online serving.
Structure is documented below.
*/
  vectorSearchConfig?: vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfig;

  /*
A set of key/value label pairs to assign to this FeatureView.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The name of the FeatureOnlineStore to use for the featureview.
  featureOnlineStore?: string;

  /*
Configures the features from a Feature Registry source that need to be loaded onto the FeatureOnlineStore.
Structure is documented below.
*/
  featureRegistrySource?: vertex_AiFeatureOnlineStoreFeatureviewFeatureRegistrySource;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The region for the resource. It should be the same as the featureonlinestore region.


- - -
*/
  region?: string;

  /*
Configures how data is supposed to be extracted from a BigQuery source to be loaded onto the FeatureOnlineStore.
Structure is documented below.
*/
  bigQuerySource?: vertex_AiFeatureOnlineStoreFeatureviewBigQuerySource;
}
export class AiFeatureOnlineStoreFeatureview extends Resource {
  /*
Configures how data is supposed to be extracted from a BigQuery source to be loaded onto the FeatureOnlineStore.
Structure is documented below.
*/
  public bigQuerySource?: vertex_AiFeatureOnlineStoreFeatureviewBigQuerySource;

  // The timestamp of when the featureOnlinestore was created in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public createTime?: string;

  // The name of the FeatureOnlineStore to use for the featureview.
  public featureOnlineStore?: string;

  /*
Configures the features from a Feature Registry source that need to be loaded onto the FeatureOnlineStore.
Structure is documented below.
*/
  public featureRegistrySource?: vertex_AiFeatureOnlineStoreFeatureviewFeatureRegistrySource;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
Configures when data is to be synced/updated for this FeatureView. At the end of the sync the latest featureValues for each entityId of this FeatureView are made ready for online serving.
Structure is documented below.
*/
  public syncConfig?: vertex_AiFeatureOnlineStoreFeatureviewSyncConfig;

  /*
Configuration for vector search. It contains the required configurations to create an index from source data, so that approximate nearest neighbor (a.k.a ANN) algorithms search can be performed during online serving.
Structure is documented below.
*/
  public vectorSearchConfig?: vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfig;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
A set of key/value label pairs to assign to this FeatureView.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // Name of the FeatureView. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The region for the resource. It should be the same as the featureonlinestore region.


- - -
*/
  public region?: string;

  // The timestamp of when the featureOnlinestore was last updated in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public updateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "syncConfig",
        "Configures when data is to be synced/updated for this FeatureView. At the end of the sync the latest featureValues for each entityId of this FeatureView are made ready for online serving.\nStructure is documented below.",
        vertex_AiFeatureOnlineStoreFeatureviewSyncConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "vectorSearchConfig",
        "Configuration for vector search. It contains the required configurations to create an index from source data, so that approximate nearest neighbor (a.k.a ANN) algorithms search can be performed during online serving.\nStructure is documented below.",
        vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "A set of key/value label pairs to assign to this FeatureView.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "featureRegistrySource",
        "Configures the features from a Feature Registry source that need to be loaded onto the FeatureOnlineStore.\nStructure is documented below.",
        vertex_AiFeatureOnlineStoreFeatureviewFeatureRegistrySource_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "The region for the resource. It should be the same as the featureonlinestore region.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "bigQuerySource",
        "Configures how data is supposed to be extracted from a BigQuery source to be loaded onto the FeatureOnlineStore.\nStructure is documented below.",
        vertex_AiFeatureOnlineStoreFeatureviewBigQuerySource_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the FeatureView. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "featureOnlineStore",
        "The name of the FeatureOnlineStore to use for the featureview.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
