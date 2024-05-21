import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface AiFeatureStoreEntityTypeFeatureArgs {
  /*
The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entitytype}.


- - -
*/
  entitytype?: string;

  /*
A set of key/value label pairs to assign to the feature.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The name of the feature. The feature can be up to 64 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscore(_), and ASCII digits 0-9 starting with a letter. The value will be unique given an entity type.
  name?: string;

  // Type of Feature value. Immutable. https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.featurestores.entityTypes.features#ValueType
  valueType?: string;

  // Description of the feature.
  description?: string;
}
export class AiFeatureStoreEntityTypeFeature extends Resource {
  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entitytype}.


- - -
*/
  public entitytype?: string;

  // Used to perform consistent read-modify-write updates.
  public etag?: string;

  /*
A set of key/value label pairs to assign to the feature.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // The name of the feature. The feature can be up to 64 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscore(_), and ASCII digits 0-9 starting with a letter. The value will be unique given an entity type.
  public name?: string;

  // The timestamp when the entity type was most recently updated in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public updateTime?: string;

  // Type of Feature value. Immutable. https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.featurestores.entityTypes.features#ValueType
  public valueType?: string;

  // The timestamp of when the entity type was created in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public createTime?: string;

  // Description of the feature.
  public description?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // The region of the feature
  public region?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "valueType",
        "Type of Feature value. Immutable. https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.featurestores.entityTypes.features#ValueType",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the feature.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "entitytype",
        "The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entitytype}.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "A set of key/value label pairs to assign to the feature.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the feature. The feature can be up to 64 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscore(_), and ASCII digits 0-9 starting with a letter. The value will be unique given an entity type.",
        [],
        false,
        true,
      ),
    ];
  }
}
