import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { AiFeatureOnlineStoreFeatureviewVectorSearchConfig } from "../types/AiFeatureOnlineStoreFeatureviewVectorSearchConfig";
import { AiFeatureOnlineStoreFeatureviewSyncConfig } from "../types/AiFeatureOnlineStoreFeatureviewSyncConfig";
import { AiFeatureOnlineStoreFeatureviewBigQuerySource } from "../types/AiFeatureOnlineStoreFeatureviewBigQuerySource";
import { AiFeatureOnlineStoreFeatureviewFeatureRegistrySource } from "../types/AiFeatureOnlineStoreFeatureviewFeatureRegistrySource";

export interface AiFeatureOnlineStoreFeatureviewArgs {
  // The name of the FeatureOnlineStore to use for the featureview.
  FeatureOnlineStore?: string;

  /*
A set of key/value label pairs to assign to this FeatureView.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The region for the resource. It should be the same as the featureonlinestore region.


- - -
*/
  Region?: string;

  /*
Configures when data is to be synced/updated for this FeatureView. At the end of the sync the latest featureValues for each entityId of this FeatureView are made ready for online serving.
Structure is documented below.
*/
  SyncConfig?: AiFeatureOnlineStoreFeatureviewSyncConfig;

  /*
Configures how data is supposed to be extracted from a BigQuery source to be loaded onto the FeatureOnlineStore.
Structure is documented below.
*/
  BigQuerySource?: AiFeatureOnlineStoreFeatureviewBigQuerySource;

  /*
Configures the features from a Feature Registry source that need to be loaded onto the FeatureOnlineStore.
Structure is documented below.
*/
  FeatureRegistrySource?: AiFeatureOnlineStoreFeatureviewFeatureRegistrySource;

  // Name of the FeatureView. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Configuration for vector search. It contains the required configurations to create an index from source data, so that approximate nearest neighbor (a.k.a ANN) algorithms search can be performed during online serving.
Structure is documented below.
*/
  VectorSearchConfig?: AiFeatureOnlineStoreFeatureviewVectorSearchConfig;
}
export class AiFeatureOnlineStoreFeatureview extends Resource {
  /*
Configures how data is supposed to be extracted from a BigQuery source to be loaded onto the FeatureOnlineStore.
Structure is documented below.
*/
  public BigQuerySource?: AiFeatureOnlineStoreFeatureviewBigQuerySource;

  /*
Configures the features from a Feature Registry source that need to be loaded onto the FeatureOnlineStore.
Structure is documented below.
*/
  public FeatureRegistrySource?: AiFeatureOnlineStoreFeatureviewFeatureRegistrySource;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
Configures when data is to be synced/updated for this FeatureView. At the end of the sync the latest featureValues for each entityId of this FeatureView are made ready for online serving.
Structure is documented below.
*/
  public SyncConfig?: AiFeatureOnlineStoreFeatureviewSyncConfig;

  // The timestamp of when the featureOnlinestore was last updated in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public UpdateTime?: string;

  // The timestamp of when the featureOnlinestore was created in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public CreateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // The name of the FeatureOnlineStore to use for the featureview.
  public FeatureOnlineStore?: string;

  /*
A set of key/value label pairs to assign to this FeatureView.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // Name of the FeatureView. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The region for the resource. It should be the same as the featureonlinestore region.


- - -
*/
  public Region?: string;

  /*
Configuration for vector search. It contains the required configurations to create an index from source data, so that approximate nearest neighbor (a.k.a ANN) algorithms search can be performed during online serving.
Structure is documented below.
*/
  public VectorSearchConfig?: AiFeatureOnlineStoreFeatureviewVectorSearchConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "FeatureOnlineStore",
        "The name of the FeatureOnlineStore to use for the featureview.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The region for the resource. It should be the same as the featureonlinestore region.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "SyncConfig",
        "Configures when data is to be synced/updated for this FeatureView. At the end of the sync the latest featureValues for each entityId of this FeatureView are made ready for online serving.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "BigQuerySource",
        "Configures how data is supposed to be extracted from a BigQuery source to be loaded onto the FeatureOnlineStore.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "A set of key/value label pairs to assign to this FeatureView.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "FeatureRegistrySource",
        "Configures the features from a Feature Registry source that need to be loaded onto the FeatureOnlineStore.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the FeatureView. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.",
      ),
      new DynamicUIProps(
        InputType.String,
        "VectorSearchConfig",
        "Configuration for vector search. It contains the required configurations to create an index from source data, so that approximate nearest neighbor (a.k.a ANN) algorithms search can be performed during online serving.\nStructure is documented below.",
      ),
    ];
  }
}
