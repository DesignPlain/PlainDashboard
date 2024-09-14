import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface codepipeline_PipelineStageAction {
  // The action declaration's name.
  name?: string;

  // The namespace all output variables will be accessed from.
  namespace?: string;

  // A list of artifact names to output. Output artifact names must be unique within a pipeline.
  outputArtifacts?: Array<string>;

  // The order in which actions are run.
  runOrder?: number;

  //
  timeoutInMinutes?: number;

  // A category defines what kind of action can be taken in the stage, and constrains the provider type for the action. Possible values are `Approval`, `Build`, `Deploy`, `Invoke`, `Source` and `Test`.
  category?: string;

  // A map of the action declaration's configuration. Configurations options for action types and providers can be found in the [Pipeline Structure Reference](http://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#action-requirements) and [Action Structure Reference](https://docs.aws.amazon.com/codepipeline/latest/userguide/action-reference.html) documentation. Note: The `DetectChanges` parameter (optional, default value is true) in the `configuration` section causes CodePipeline to automatically start your pipeline upon new commits. Please refer to AWS Documentation for more details: https://docs.aws.amazon.com/codepipeline/latest/userguide/action-reference-CodestarConnectionSource.html#action-reference-CodestarConnectionSource-config.
  configuration?: Map<string, string>;

  // A list of artifact names to be worked on.
  inputArtifacts?: Array<string>;

  // The creator of the action being called. Possible values are `AWS`, `Custom` and `ThirdParty`.
  owner?: string;

  // The provider of the service being called by the action. Valid providers are determined by the action category. Provider names are listed in the [Action Structure Reference](https://docs.aws.amazon.com/codepipeline/latest/userguide/action-reference.html) documentation.
  provider?: string;

  // The region in which to run the action.
  region?: string;

  // The ARN of the IAM service role that will perform the declared action. This is assumed through the roleArn for the pipeline.
  roleArn?: string;

  // A string that identifies the action type.
  version?: string;
}

export function codepipeline_PipelineStageAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "region",
      "The region in which to run the action.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "version",
      "A string that identifies the action type.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "namespace",
      "The namespace all output variables will be accessed from.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "timeoutInMinutes",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "configuration",
      "A map of the action declaration's configuration. Configurations options for action types and providers can be found in the [Pipeline Structure Reference](http://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#action-requirements) and [Action Structure Reference](https://docs.aws.amazon.com/codepipeline/latest/userguide/action-reference.html) documentation. Note: The `DetectChanges` parameter (optional, default value is true) in the `configuration` section causes CodePipeline to automatically start your pipeline upon new commits. Please refer to AWS Documentation for more details: https://docs.aws.amazon.com/codepipeline/latest/userguide/action-reference-CodestarConnectionSource.html#action-reference-CodestarConnectionSource-config.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "inputArtifacts",
      "A list of artifact names to be worked on.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "owner",
      "The creator of the action being called. Possible values are `AWS`, `Custom` and `ThirdParty`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The ARN of the IAM service role that will perform the declared action. This is assumed through the roleArn for the pipeline.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The action declaration's name.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "outputArtifacts",
      "A list of artifact names to output. Output artifact names must be unique within a pipeline.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "runOrder",
      "The order in which actions are run.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "category",
      "A category defines what kind of action can be taken in the stage, and constrains the provider type for the action. Possible values are `Approval`, `Build`, `Deploy`, `Invoke`, `Source` and `Test`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "provider",
      "The provider of the service being called by the action. Valid providers are determined by the action category. Provider names are listed in the [Action Structure Reference](https://docs.aws.amazon.com/codepipeline/latest/userguide/action-reference.html) documentation.",
      () => [],
      true,
      false,
    ),
  ];
}
