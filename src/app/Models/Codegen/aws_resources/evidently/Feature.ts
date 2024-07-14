import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  evidently_FeatureVariation,
  evidently_FeatureVariation_GetTypes,
} from "../types/evidently_FeatureVariation";
import {
  evidently_FeatureEvaluationRule,
  evidently_FeatureEvaluationRule_GetTypes,
} from "../types/evidently_FeatureEvaluationRule";

export interface FeatureArgs {
  // The name for the new feature. Minimum length of `1`. Maximum length of `127`.
  name?: string;

  // The name or ARN of the project that is to contain the new feature.
  project?: string;

  // Tags to apply to the feature. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // One or more blocks that contain the configuration of the feature's different variations. Detailed below
  variations?: Array<evidently_FeatureVariation>;

  // The name of the variation to use as the default variation. The default variation is served to users who are not allocated to any ongoing launches or experiments of this feature. This variation must also be listed in the `variations` structure. If you omit `default_variation`, the first variation listed in the `variations` structure is used as the default variation.
  defaultVariation?: string;

  // Specifies the description of the feature.
  description?: string;

  // Specify users that should always be served a specific variation of a feature. Each user is specified by a key-value pair . For each key, specify a user by entering their user ID, account ID, or some other identifier. For the value, specify the name of the variation that they are to be served.
  entityOverrides?: Map<string, string>;

  // Specify `ALL_RULES` to activate the traffic allocation specified by any ongoing launches or experiments. Specify `DEFAULT_VARIATION` to serve the default variation to all users instead.
  evaluationStrategy?: string;
}
export class Feature extends Resource {
  // One or more blocks that contain the configuration of the feature's different variations. Detailed below
  public variations?: Array<evidently_FeatureVariation>;

  // Specifies the description of the feature.
  public description?: string;

  // Specify users that should always be served a specific variation of a feature. Each user is specified by a key-value pair . For each key, specify a user by entering their user ID, account ID, or some other identifier. For the value, specify the name of the variation that they are to be served.
  public entityOverrides?: Map<string, string>;

  // The date and time that the feature was most recently updated.
  public lastUpdatedTime?: string;

  // Tags to apply to the feature. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Defines the type of value used to define the different feature variations. Valid Values: `STRING`, `LONG`, `DOUBLE`, `BOOLEAN`.
  public valueType?: string;

  // The ARN of the feature.
  public arn?: string;

  // The name of the variation to use as the default variation. The default variation is served to users who are not allocated to any ongoing launches or experiments of this feature. This variation must also be listed in the `variations` structure. If you omit `default_variation`, the first variation listed in the `variations` structure is used as the default variation.
  public defaultVariation?: string;

  // One or more blocks that define the evaluation rules for the feature. Detailed below
  public evaluationRules?: Array<evidently_FeatureEvaluationRule>;

  // Specify `ALL_RULES` to activate the traffic allocation specified by any ongoing launches or experiments. Specify `DEFAULT_VARIATION` to serve the default variation to all users instead.
  public evaluationStrategy?: string;

  // The current state of the feature. Valid values are `AVAILABLE` and `UPDATING`.
  public status?: string;

  // The date and time that the feature is created.
  public createdTime?: string;

  // The name or ARN of the project that is to contain the new feature.
  public project?: string;

  // The name for the new feature. Minimum length of `1`. Maximum length of `127`.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name for the new feature. Minimum length of `1`. Maximum length of `127`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The name or ARN of the project that is to contain the new feature.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Tags to apply to the feature. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "variations",
        "One or more blocks that contain the configuration of the feature's different variations. Detailed below",
        evidently_FeatureVariation_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "defaultVariation",
        "The name of the variation to use as the default variation. The default variation is served to users who are not allocated to any ongoing launches or experiments of this feature. This variation must also be listed in the `variations` structure. If you omit `default_variation`, the first variation listed in the `variations` structure is used as the default variation.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Specifies the description of the feature.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "entityOverrides",
        "Specify users that should always be served a specific variation of a feature. Each user is specified by a key-value pair . For each key, specify a user by entering their user ID, account ID, or some other identifier. For the value, specify the name of the variation that they are to be served.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "evaluationStrategy",
        "Specify `ALL_RULES` to activate the traffic allocation specified by any ongoing launches or experiments. Specify `DEFAULT_VARIATION` to serve the default variation to all users instead.",
        [],
        false,
        false,
      ),
    ];
  }
}
