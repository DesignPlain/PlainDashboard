import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  codepipeline_PipelineStageAction,
  codepipeline_PipelineStageAction_GetTypes,
} from "./codepipeline_PipelineStageAction";

export interface codepipeline_PipelineStage {
  // The action(s) to include in the stage. Defined as an `action` block below
  actions?: Array<codepipeline_PipelineStageAction>;

  // The name of the stage.
  name?: string;
}

export function codepipeline_PipelineStage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "actions",
      "The action(s) to include in the stage. Defined as an `action` block below",
      codepipeline_PipelineStageAction_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the stage.",
      [],
      true,
      false,
    ),
  ];
}
