import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sagemaker_PipelineParallelismConfiguration {
  // The max number of steps that can be executed in parallel.
  maxParallelExecutionSteps?: number;
}

export function sagemaker_PipelineParallelismConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxParallelExecutionSteps",
      "The max number of steps that can be executed in parallel.",
      [],
      true,
      false,
    ),
  ];
}
