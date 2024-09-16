import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface transfer_WorkflowStepCustomStepDetails {
  // Timeout, in seconds, for the step.
  timeoutSeconds?: number;

  // The name of the step, used as an identifier.
  name?: string;

  // Specifies which file to use as input to the workflow step: either the output from the previous step, or the originally uploaded file for the workflow. Enter ${previous.file} to use the previous file as the input. In this case, this workflow step uses the output file from the previous workflow step as input. This is the default value. Enter ${original.file} to use the originally-uploaded file location as input for this step.
  sourceFileLocation?: string;

  // The ARN for the lambda function that is being called.
  target?: string;
}

export function transfer_WorkflowStepCustomStepDetails_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'timeoutSeconds',
      'Timeout, in seconds, for the step.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the step, used as an identifier.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'sourceFileLocation',
      'Specifies which file to use as input to the workflow step: either the output from the previous step, or the originally uploaded file for the workflow. Enter ${previous.file} to use the previous file as the input. In this case, this workflow step uses the output file from the previous workflow step as input. This is the default value. Enter ${original.file} to use the originally-uploaded file location as input for this step.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'target',
      'The ARN for the lambda function that is being called.',
      () => [],
      false,
      true,
    ),
  ];
}
