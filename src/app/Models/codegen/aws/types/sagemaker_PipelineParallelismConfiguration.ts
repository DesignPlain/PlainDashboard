import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface sagemaker_PipelineParallelismConfiguration {
  // The max number of steps that can be executed in parallel.
  maxParallelExecutionSteps?: number;
}

export function sagemaker_PipelineParallelismConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'maxParallelExecutionSteps',
      'The max number of steps that can be executed in parallel.',
      () => [],
      true,
      false,
    ),
  ];
}
