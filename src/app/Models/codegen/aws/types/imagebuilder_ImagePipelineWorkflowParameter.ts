import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface imagebuilder_ImagePipelineWorkflowParameter {
  // The name of the Workflow parameter.
  name?: string;

  // The value of the Workflow parameter.
  value?: string;
}

export function imagebuilder_ImagePipelineWorkflowParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the Workflow parameter.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'value',
      'The value of the Workflow parameter.',
      () => [],
      true,
      false,
    ),
  ];
}
