import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface batch_ComputeEnvironmentUpdatePolicy {
  // Specifies the job timeout (in minutes) when the compute environment infrastructure is updated.
  jobExecutionTimeoutMinutes?: number;

  // Specifies whether jobs are automatically terminated when the computer environment infrastructure is updated.
  terminateJobsOnUpdate?: boolean;
}

export function batch_ComputeEnvironmentUpdatePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "terminateJobsOnUpdate",
      "Specifies whether jobs are automatically terminated when the computer environment infrastructure is updated.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "jobExecutionTimeoutMinutes",
      "Specifies the job timeout (in minutes) when the compute environment infrastructure is updated.",
      () => [],
      true,
      false,
    ),
  ];
}
