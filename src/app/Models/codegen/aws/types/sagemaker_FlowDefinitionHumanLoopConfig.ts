import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  sagemaker_FlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice,
  sagemaker_FlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice_GetTypes,
} from './sagemaker_FlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice';

export interface sagemaker_FlowDefinitionHumanLoopConfig {
  // Defines the amount of money paid to an Amazon Mechanical Turk worker for each task performed. See Public Workforce Task Price details below.
  publicWorkforceTaskPrice?: sagemaker_FlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice;

  // The length of time that a task remains available for review by human workers. Valid value range between `1` and `864000`.
  taskAvailabilityLifetimeInSeconds?: number;

  // A title for the human worker task.
  taskTitle?: string;

  // The Amazon Resource Name (ARN) of the human task user interface. Amazon Resource Name (ARN) of a team of workers. For Public workforces see [AWS Docs](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-management-public.html).
  workteamArn?: string;

  // The amount of time that a worker has to complete a task. The default value is `3600` seconds.
  taskTimeLimitInSeconds?: number;

  // The Amazon Resource Name (ARN) of the human task user interface.
  humanTaskUiArn?: string;

  // The number of distinct workers who will perform the same task on each object. Valid value range between `1` and `3`.
  taskCount?: number;

  // A description for the human worker task.
  taskDescription?: string;

  // An array of keywords used to describe the task so that workers can discover the task.
  taskKeywords?: Array<string>;
}

export function sagemaker_FlowDefinitionHumanLoopConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'taskKeywords',
      'An array of keywords used to describe the task so that workers can discover the task.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'taskTitle',
      'A title for the human worker task.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'workteamArn',
      'The Amazon Resource Name (ARN) of the human task user interface. Amazon Resource Name (ARN) of a team of workers. For Public workforces see [AWS Docs](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-management-public.html).',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      'taskTimeLimitInSeconds',
      'The amount of time that a worker has to complete a task. The default value is `3600` seconds.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'humanTaskUiArn',
      'The Amazon Resource Name (ARN) of the human task user interface.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      'taskCount',
      'The number of distinct workers who will perform the same task on each object. Valid value range between `1` and `3`.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'taskDescription',
      'A description for the human worker task.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'publicWorkforceTaskPrice',
      'Defines the amount of money paid to an Amazon Mechanical Turk worker for each task performed. See Public Workforce Task Price details below.',
      () =>
        sagemaker_FlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      'taskAvailabilityLifetimeInSeconds',
      'The length of time that a task remains available for review by human workers. Valid value range between `1` and `864000`.',
      () => [],
      false,
      true,
    ),
  ];
}
