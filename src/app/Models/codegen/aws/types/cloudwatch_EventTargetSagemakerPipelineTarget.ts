import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudwatch_EventTargetSagemakerPipelineTargetPipelineParameterList,
  cloudwatch_EventTargetSagemakerPipelineTargetPipelineParameterList_GetTypes,
} from './cloudwatch_EventTargetSagemakerPipelineTargetPipelineParameterList';

export interface cloudwatch_EventTargetSagemakerPipelineTarget {
  // List of Parameter names and values for SageMaker Model Building Pipeline execution.
  pipelineParameterLists?: Array<cloudwatch_EventTargetSagemakerPipelineTargetPipelineParameterList>;
}

export function cloudwatch_EventTargetSagemakerPipelineTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'pipelineParameterLists',
      'List of Parameter names and values for SageMaker Model Building Pipeline execution.',
      () =>
        cloudwatch_EventTargetSagemakerPipelineTargetPipelineParameterList_GetTypes(),
      false,
      false,
    ),
  ];
}
