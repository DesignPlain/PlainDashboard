import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface AiFeatureGroupFeatureArgs {
  // The description of the FeatureGroup.
  description?: string;

  // The name of the Feature Group.
  featureGroup?: string;

  /*
The labels with user-defined metadata to organize your FeatureGroup.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The resource name of the Feature Group Feature.
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The region for the resource. It should be the same as the feature group's region.


- - -
*/
  region?: string;

  // The name of the BigQuery Table/View column hosting data for this version. If no value is provided, will use featureId.
  versionColumnName?: string;
}
export class AiFeatureGroupFeature extends Resource {
  // The name of the Feature Group.
  public featureGroup?: string;

  // The resource name of the Feature Group Feature.
  public name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // The timestamp of when the FeatureGroup was last updated in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public updateTime?: string;

  // The timestamp of when the FeatureGroup was created in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public createTime?: string;

  // The description of the FeatureGroup.
  public description?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The region for the resource. It should be the same as the feature group's region.


- - -
*/
  public region?: string;

  // The name of the BigQuery Table/View column hosting data for this version. If no value is provided, will use featureId.
  public versionColumnName?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
The labels with user-defined metadata to organize your FeatureGroup.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "versionColumnName",
        "The name of the BigQuery Table/View column hosting data for this version. If no value is provided, will use featureId.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description of the FeatureGroup.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "featureGroup",
        "The name of the Feature Group.",
        [],
        true,
        true,
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
        "The resource name of the Feature Group Feature.",
        [],
        false,
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
      new DynamicUIProps(
        InputType.String,
        "region",
        "The region for the resource. It should be the same as the feature group's region.\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
