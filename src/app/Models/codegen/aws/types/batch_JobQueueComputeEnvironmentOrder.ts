import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface batch_JobQueueComputeEnvironmentOrder {
  // The Amazon Resource Name (ARN) of the compute environment.
  computeEnvironment?: string;

  // The order of the compute environment. Compute environments are tried in ascending order. For example, if two compute environments are associated with a job queue, the compute environment with a lower order integer value is tried for job placement first.
  order?: number;
}

export function batch_JobQueueComputeEnvironmentOrder_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'computeEnvironment',
      'The Amazon Resource Name (ARN) of the compute environment.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'order',
      'The order of the compute environment. Compute environments are tried in ascending order. For example, if two compute environments are associated with a job queue, the compute environment with a lower order integer value is tried for job placement first.',
      () => [],
      true,
      false,
    ),
  ];
}
