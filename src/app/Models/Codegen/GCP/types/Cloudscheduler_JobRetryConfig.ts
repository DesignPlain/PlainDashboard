import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudscheduler_JobRetryConfig {
  /*
The time limit for retrying a failed job, measured from time when an execution was first attempted.
If specified with retryCount, the job will be retried until both limits are reached.
A duration in seconds with up to nine fractional digits, terminated by 's'.
*/
  maxRetryDuration?: string;

  /*
The minimum amount of time to wait before retrying a job after it fails.
A duration in seconds with up to nine fractional digits, terminated by 's'.
*/
  minBackoffDuration?: string;

  /*
The number of attempts that the system will make to run a
job using the exponential backoff procedure described by maxDoublings.
Values greater than 5 and negative values are not allowed.
*/
  retryCount?: number;

  /*
The maximum amount of time to wait before retrying a job after it fails.
A duration in seconds with up to nine fractional digits, terminated by 's'.
*/
  maxBackoffDuration?: string;

  /*
The time between retries will double maxDoublings times.
A job's retry interval starts at minBackoffDuration,
then doubles maxDoublings times, then increases linearly,
and finally retries retries at intervals of maxBackoffDuration up to retryCount times.
*/
  maxDoublings?: number;
}

export function cloudscheduler_JobRetryConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "maxRetryDuration",
      "The time limit for retrying a failed job, measured from time when an execution was first attempted.\nIf specified with retryCount, the job will be retried until both limits are reached.\nA duration in seconds with up to nine fractional digits, terminated by 's'.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "minBackoffDuration",
      "The minimum amount of time to wait before retrying a job after it fails.\nA duration in seconds with up to nine fractional digits, terminated by 's'.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "retryCount",
      "The number of attempts that the system will make to run a\njob using the exponential backoff procedure described by maxDoublings.\nValues greater than 5 and negative values are not allowed.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "maxBackoffDuration",
      "The maximum amount of time to wait before retrying a job after it fails.\nA duration in seconds with up to nine fractional digits, terminated by 's'.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxDoublings",
      "The time between retries will double maxDoublings times.\nA job's retry interval starts at minBackoffDuration,\nthen doubles maxDoublings times, then increases linearly,\nand finally retries retries at intervals of maxBackoffDuration up to retryCount times.",
      [],
      false,
      false,
    ),
  ];
}
