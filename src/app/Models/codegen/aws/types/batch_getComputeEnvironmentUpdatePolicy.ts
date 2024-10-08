import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface batch_getComputeEnvironmentUpdatePolicy {
  //
  jobExecutionTimeoutMinutes?: number;

  //
  terminateJobsOnUpdate?: boolean;
}

export function batch_getComputeEnvironmentUpdatePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'jobExecutionTimeoutMinutes',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'terminateJobsOnUpdate',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
