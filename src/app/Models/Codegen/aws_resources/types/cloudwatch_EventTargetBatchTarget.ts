import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cloudwatch_EventTargetBatchTarget {
  // The size of the array, if this is an array batch job. Valid values are integers between 2 and 10,000.
  arraySize?: number;

  // The number of times to attempt to retry, if the job fails. Valid values are 1 to 10.
  jobAttempts?: number;

  // The ARN or name of the job definition to use if the event target is an AWS Batch job. This job definition must already exist.
  jobDefinition?: string;

  // The name to use for this execution of the job, if the target is an AWS Batch job.
  jobName?: string;
}

export function cloudwatch_EventTargetBatchTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "arraySize",
      "The size of the array, if this is an array batch job. Valid values are integers between 2 and 10,000.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "jobAttempts",
      "The number of times to attempt to retry, if the job fails. Valid values are 1 to 10.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "jobDefinition",
      "The ARN or name of the job definition to use if the event target is an AWS Batch job. This job definition must already exist.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "jobName",
      "The name to use for this execution of the job, if the target is an AWS Batch job.",
      [],
      true,
      false,
    ),
  ];
}
