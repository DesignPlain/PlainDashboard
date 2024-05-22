import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  codepipeline_CustomActionTypeSettings,
  codepipeline_CustomActionTypeSettings_GetTypes,
} from "../types/codepipeline_CustomActionTypeSettings";
import {
  codepipeline_CustomActionTypeConfigurationProperty,
  codepipeline_CustomActionTypeConfigurationProperty_GetTypes,
} from "../types/codepipeline_CustomActionTypeConfigurationProperty";
import {
  codepipeline_CustomActionTypeInputArtifactDetails,
  codepipeline_CustomActionTypeInputArtifactDetails_GetTypes,
} from "../types/codepipeline_CustomActionTypeInputArtifactDetails";
import {
  codepipeline_CustomActionTypeOutputArtifactDetails,
  codepipeline_CustomActionTypeOutputArtifactDetails_GetTypes,
} from "../types/codepipeline_CustomActionTypeOutputArtifactDetails";

export interface CustomActionTypeArgs {
  // The category of the custom action. Valid values: `Source`, `Build`, `Deploy`, `Test`, `Invoke`, `Approval`
  category?: string;

  // The configuration properties for the custom action. Max 10 items.
  configurationProperties?: Array<codepipeline_CustomActionTypeConfigurationProperty>;

  // The details of the input artifact for the action.
  inputArtifactDetails?: codepipeline_CustomActionTypeInputArtifactDetails;

  // The details of the output artifact of the action.
  outputArtifactDetails?: codepipeline_CustomActionTypeOutputArtifactDetails;

  // The provider of the service used in the custom action
  providerName?: string;

  // The settings for an action type.
  settings?: codepipeline_CustomActionTypeSettings;

  // Map of tags to assign to this resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The version identifier of the custom action.
  version?: string;
}
export class CustomActionType extends Resource {
  // Map of tags to assign to this resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The version identifier of the custom action.
  public version?: string;

  // The action ARN.
  public arn?: string;

  // The configuration properties for the custom action. Max 10 items.
  public configurationProperties?: Array<codepipeline_CustomActionTypeConfigurationProperty>;

  // The details of the input artifact for the action.
  public inputArtifactDetails?: codepipeline_CustomActionTypeInputArtifactDetails;

  // The creator of the action being called.
  public owner?: string;

  // The provider of the service used in the custom action
  public providerName?: string;

  // The category of the custom action. Valid values: `Source`, `Build`, `Deploy`, `Test`, `Invoke`, `Approval`
  public category?: string;

  // The details of the output artifact of the action.
  public outputArtifactDetails?: codepipeline_CustomActionTypeOutputArtifactDetails;

  // The settings for an action type.
  public settings?: codepipeline_CustomActionTypeSettings;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to this resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "version",
        "The version identifier of the custom action.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "category",
        "The category of the custom action. Valid values: `Source`, `Build`, `Deploy`, `Test`, `Invoke`, `Approval`",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "configurationProperties",
        "The configuration properties for the custom action. Max 10 items.",
        codepipeline_CustomActionTypeConfigurationProperty_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "inputArtifactDetails",
        "The details of the input artifact for the action.",
        codepipeline_CustomActionTypeInputArtifactDetails_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "outputArtifactDetails",
        "The details of the output artifact of the action.",
        codepipeline_CustomActionTypeOutputArtifactDetails_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "providerName",
        "The provider of the service used in the custom action",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "settings",
        "The settings for an action type.",
        codepipeline_CustomActionTypeSettings_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
