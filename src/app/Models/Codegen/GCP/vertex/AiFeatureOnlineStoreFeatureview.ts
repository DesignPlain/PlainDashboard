import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfig,
  Vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfig_GetTypes,
} from "../types/Vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfig";
import {
  Vertex_AiFeatureOnlineStoreFeatureviewBigQuerySource,
  Vertex_AiFeatureOnlineStoreFeatureviewBigQuerySource_GetTypes,
} from "../types/Vertex_AiFeatureOnlineStoreFeatureviewBigQuerySource";
import {
  Vertex_AiFeatureOnlineStoreFeatureviewFeatureRegistrySource,
  Vertex_AiFeatureOnlineStoreFeatureviewFeatureRegistrySource_GetTypes,
} from "../types/Vertex_AiFeatureOnlineStoreFeatureviewFeatureRegistrySource";
import {
  Vertex_AiFeatureOnlineStoreFeatureviewSyncConfig,
  Vertex_AiFeatureOnlineStoreFeatureviewSyncConfig_GetTypes,
} from "../types/Vertex_AiFeatureOnlineStoreFeatureviewSyncConfig";

export interface AiFeatureOnlineStoreFeatureviewArgs {
  /*
Configures how data is supposed to be extracted from a BigQuery source to be loaded onto the FeatureOnlineStore.
Structure is documented below.
*/
  BigQuerySource?: Vertex_AiFeatureOnlineStoreFeatureviewBigQuerySource;

  /*
Configures the features from a Feature Registry source that need to be loaded onto the FeatureOnlineStore.
Structure is documented below.
*/
  FeatureRegistrySource?: Vertex_AiFeatureOnlineStoreFeatureviewFeatureRegistrySource;

  // Name of the FeatureView. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The region for the resource. It should be the same as the featureonlinestore region.


- - -
*/
  Region?: string;

  /*
Configures when data is to be synced/updated for this FeatureView. At the end of the sync the latest featureValues for each entityId of this FeatureView are made ready for online serving.
Structure is documented below.
*/
  SyncConfig?: Vertex_AiFeatureOnlineStoreFeatureviewSyncConfig;

  /*
Configuration for vector search. It contains the required configurations to create an index from source data, so that approximate nearest neighbor (a.k.a ANN) algorithms search can be performed during online serving.
Structure is documented below.
*/
  VectorSearchConfig?: Vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfig;

  // The name of the FeatureOnlineStore to use for the featureview.
  FeatureOnlineStore?: string;

  /*
A set of key/value label pairs to assign to this FeatureView.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;
}
export class AiFeatureOnlineStoreFeatureview extends Resource {
  /*
The region for the resource. It should be the same as the featureonlinestore region.


- - -
*/
  public Region?: string;

  // The timestamp of when the featureOnlinestore was last updated in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public UpdateTime?: string;

  /*
Configuration for vector search. It contains the required configurations to create an index from source data, so that approximate nearest neighbor (a.k.a ANN) algorithms search can be performed during online serving.
Structure is documented below.
*/
  public VectorSearchConfig?: Vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfig;

  // The timestamp of when the featureOnlinestore was created in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public CreateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
A set of key/value label pairs to assign to this FeatureView.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // Name of the FeatureView. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.
  public Name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
Configures when data is to be synced/updated for this FeatureView. At the end of the sync the latest featureValues for each entityId of this FeatureView are made ready for online serving.
Structure is documented below.
*/
  public SyncConfig?: Vertex_AiFeatureOnlineStoreFeatureviewSyncConfig;

  /*
Configures how data is supposed to be extracted from a BigQuery source to be loaded onto the FeatureOnlineStore.
Structure is documented below.
*/
  public BigQuerySource?: Vertex_AiFeatureOnlineStoreFeatureviewBigQuerySource;

  // The name of the FeatureOnlineStore to use for the featureview.
  public FeatureOnlineStore?: string;

  /*
Configures the features from a Feature Registry source that need to be loaded onto the FeatureOnlineStore.
Structure is documented below.
*/
  public FeatureRegistrySource?: Vertex_AiFeatureOnlineStoreFeatureviewFeatureRegistrySource;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The region for the resource. It should be the same as the featureonlinestore region.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "FeatureRegistrySource",
        "Configures the features from a Feature Registry source that need to be loaded onto the FeatureOnlineStore.\nStructure is documented below.",
        Vertex_AiFeatureOnlineStoreFeatureviewFeatureRegistrySource_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the FeatureView. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.",
        [],
        false,
        true,
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
        "FeatureOnlineStore",
        "The name of the FeatureOnlineStore to use for the featureview.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "A set of key/value label pairs to assign to this FeatureView.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "BigQuerySource",
        "Configures how data is supposed to be extracted from a BigQuery source to be loaded onto the FeatureOnlineStore.\nStructure is documented below.",
        Vertex_AiFeatureOnlineStoreFeatureviewBigQuerySource_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "SyncConfig",
        "Configures when data is to be synced/updated for this FeatureView. At the end of the sync the latest featureValues for each entityId of this FeatureView are made ready for online serving.\nStructure is documented below.",
        Vertex_AiFeatureOnlineStoreFeatureviewSyncConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "VectorSearchConfig",
        "Configuration for vector search. It contains the required configurations to create an index from source data, so that approximate nearest neighbor (a.k.a ANN) algorithms search can be performed during online serving.\nStructure is documented below.",
        Vertex_AiFeatureOnlineStoreFeatureviewVectorSearchConfig_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
