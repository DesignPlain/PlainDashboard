import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  scheduler_ScheduleTargetSagemakerPipelineParametersPipelineParameter,
  scheduler_ScheduleTargetSagemakerPipelineParametersPipelineParameter_GetTypes,
} from "./scheduler_ScheduleTargetSagemakerPipelineParametersPipelineParameter";

export interface scheduler_ScheduleTargetSagemakerPipelineParameters {
  // Set of up to 200 parameter names and values to use when executing the SageMaker Model Building Pipeline. Detailed below.
  pipelineParameters?: Array<scheduler_ScheduleTargetSagemakerPipelineParametersPipelineParameter>;
}

export function scheduler_ScheduleTargetSagemakerPipelineParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "pipelineParameters",
      "Set of up to 200 parameter names and values to use when executing the SageMaker Model Building Pipeline. Detailed below.",
      () =>
        scheduler_ScheduleTargetSagemakerPipelineParametersPipelineParameter_GetTypes(),
      false,
      false,
    ),
  ];
}
