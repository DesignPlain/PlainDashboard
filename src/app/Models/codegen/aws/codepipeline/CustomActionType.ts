import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
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
  //
  providerName?: string;

  //
  settings?: codepipeline_CustomActionTypeSettings;

  //
  tags?: Map<string, string>;

  //
  version?: string;

  // The category of the custom action. Valid values: `Source`, `Build`, `Deploy`, `Test`, `Invoke`, `Approval`
  category?: string;

  // The configuration properties for the custom action. Max 10 items.
  configurationProperties?: Array<codepipeline_CustomActionTypeConfigurationProperty>;

  //
  inputArtifactDetails?: codepipeline_CustomActionTypeInputArtifactDetails;

  //
  outputArtifactDetails?: codepipeline_CustomActionTypeOutputArtifactDetails;
}
export class CustomActionType extends DS_Resource {
  // The creator of the action being called.
  public owner?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  //
  public version?: string;

  // The category of the custom action. Valid values: `Source`, `Build`, `Deploy`, `Test`, `Invoke`, `Approval`
  public category?: string;

  // The configuration properties for the custom action. Max 10 items.
  public configurationProperties?: Array<codepipeline_CustomActionTypeConfigurationProperty>;

  //
  public outputArtifactDetails?: codepipeline_CustomActionTypeOutputArtifactDetails;

  //
  public settings?: codepipeline_CustomActionTypeSettings;

  //
  public tags?: Map<string, string>;

  // The action ARN.
  public arn?: string;

  //
  public inputArtifactDetails?: codepipeline_CustomActionTypeInputArtifactDetails;

  //
  public providerName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "configurationProperties",
        "The configuration properties for the custom action. Max 10 items.",
        () => codepipeline_CustomActionTypeConfigurationProperty_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "inputArtifactDetails",
        "",
        () => codepipeline_CustomActionTypeInputArtifactDetails_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "outputArtifactDetails",
        "",
        () => codepipeline_CustomActionTypeOutputArtifactDetails_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "providerName",
        "",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "settings",
        "",
        () => codepipeline_CustomActionTypeSettings_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(InputType.String, "version", "", () => [], true, true),
      new DynamicUIProps(
        InputType.String,
        "category",
        "The category of the custom action. Valid values: `Source`, `Build`, `Deploy`, `Test`, `Invoke`, `Approval`",
        () => [],
        true,
        true,
      ),
    ];
  }
}
