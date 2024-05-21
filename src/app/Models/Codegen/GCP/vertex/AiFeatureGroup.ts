import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  vertex_AiFeatureGroupBigQuery,
  vertex_AiFeatureGroupBigQuery_GetTypes,
} from "../types/vertex_AiFeatureGroupBigQuery";

export interface AiFeatureGroupArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The region of feature group. eg us-central1
  region?: string;

  /*
Indicates that features for this group come from BigQuery Table/View. By default treats the source as a sparse time series source, which is required to have an entityId and a feature_timestamp column in the source.
Structure is documented below.
*/
  bigQuery?: vertex_AiFeatureGroupBigQuery;

  // The description of the FeatureGroup.
  description?: string;

  /*
The labels with user-defined metadata to organize your FeatureGroup.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The resource name of the Feature Group.
  name?: string;
}
export class AiFeatureGroup extends Resource {
  // Used to perform consistent read-modify-write updates.
  public etag?: string;

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

  // The timestamp of when the FeatureGroup was created in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public createTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
The labels with user-defined metadata to organize your FeatureGroup.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // The resource name of the Feature Group.
  public name?: string;

  // The region of feature group. eg us-central1
  public region?: string;

  // The timestamp of when the FeatureGroup was last updated in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public updateTime?: string;

  /*
Indicates that features for this group come from BigQuery Table/View. By default treats the source as a sparse time series source, which is required to have an entityId and a feature_timestamp column in the source.
Structure is documented below.
*/
  public bigQuery?: vertex_AiFeatureGroupBigQuery;

  // The description of the FeatureGroup.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description of the FeatureGroup.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "The labels with user-defined metadata to organize your FeatureGroup.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The resource name of the Feature Group.",
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
        "The region of feature group. eg us-central1",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "bigQuery",
        "Indicates that features for this group come from BigQuery Table/View. By default treats the source as a sparse time series source, which is required to have an entityId and a feature_timestamp column in the source.\nStructure is documented below.",
        vertex_AiFeatureGroupBigQuery_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
