import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  pipes_PipeTargetParametersSagemakerPipelineParametersPipelineParameter,
  pipes_PipeTargetParametersSagemakerPipelineParametersPipelineParameter_GetTypes,
} from "./pipes_PipeTargetParametersSagemakerPipelineParametersPipelineParameter";

export interface pipes_PipeTargetParametersSagemakerPipelineParameters {
  // List of Parameter names and values for SageMaker Model Building Pipeline execution. Detailed below.
  pipelineParameters?: Array<pipes_PipeTargetParametersSagemakerPipelineParametersPipelineParameter>;
}

export function pipes_PipeTargetParametersSagemakerPipelineParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "pipelineParameters",
      "List of Parameter names and values for SageMaker Model Building Pipeline execution. Detailed below.",
      () =>
        pipes_PipeTargetParametersSagemakerPipelineParametersPipelineParameter_GetTypes(),
      false,
      false,
    ),
  ];
}
