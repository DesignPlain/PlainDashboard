import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface AiFeatureGroupFeatureArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The region for the resource. It should be the same as the feature group's region.


- - -
*/
  Region?: string;

  // The name of the BigQuery Table/View column hosting data for this version. If no value is provided, will use featureId.
  VersionColumnName?: string;

  // The description of the FeatureGroup.
  Description?: string;

  // The name of the Feature Group.
  FeatureGroup?: string;

  /*
The labels with user-defined metadata to organize your FeatureGroup.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The resource name of the Feature Group Feature.
  Name?: string;
}
export class AiFeatureGroupFeature extends Resource {
  // The timestamp of when the FeatureGroup was last updated in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public UpdateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
The labels with user-defined metadata to organize your FeatureGroup.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The resource name of the Feature Group Feature.
  public Name?: string;

  /*
The region for the resource. It should be the same as the feature group's region.


- - -
*/
  public Region?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // The name of the BigQuery Table/View column hosting data for this version. If no value is provided, will use featureId.
  public VersionColumnName?: string;

  // The timestamp of when the FeatureGroup was created in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public CreateTime?: string;

  // The description of the FeatureGroup.
  public Description?: string;

  // The name of the Feature Group.
  public FeatureGroup?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The region for the resource. It should be the same as the feature group's region.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "VersionColumnName",
        "The name of the BigQuery Table/View column hosting data for this version. If no value is provided, will use featureId.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "The description of the FeatureGroup.",
      ),
      new DynamicUIProps(
        InputType.String,
        "FeatureGroup",
        "The name of the Feature Group.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "The labels with user-defined metadata to organize your FeatureGroup.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The resource name of the Feature Group Feature.",
      ),
    ];
  }
}
