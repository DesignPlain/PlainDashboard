import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudscheduler_JobRetryConfig {
  /*
The maximum amount of time to wait before retrying a job after it fails.
A duration in seconds with up to nine fractional digits, terminated by 's'.
*/
  MaxBackoffDuration?: string;

  /*
The time between retries will double maxDoublings times.
A job's retry interval starts at minBackoffDuration,
then doubles maxDoublings times, then increases linearly,
and finally retries retries at intervals of maxBackoffDuration up to retryCount times.
*/
  MaxDoublings?: number;

  /*
The time limit for retrying a failed job, measured from time when an execution was first attempted.
If specified with retryCount, the job will be retried until both limits are reached.
A duration in seconds with up to nine fractional digits, terminated by 's'.
*/
  MaxRetryDuration?: string;

  /*
The minimum amount of time to wait before retrying a job after it fails.
A duration in seconds with up to nine fractional digits, terminated by 's'.
*/
  MinBackoffDuration?: string;

  /*
The number of attempts that the system will make to run a
job using the exponential backoff procedure described by maxDoublings.
Values greater than 5 and negative values are not allowed.
*/
  RetryCount?: number;
}

export function Cloudscheduler_JobRetryConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "MaxBackoffDuration",
      "The maximum amount of time to wait before retrying a job after it fails.\nA duration in seconds with up to nine fractional digits, terminated by 's'.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxDoublings",
      "The time between retries will double maxDoublings times.\nA job's retry interval starts at minBackoffDuration,\nthen doubles maxDoublings times, then increases linearly,\nand finally retries retries at intervals of maxBackoffDuration up to retryCount times.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MaxRetryDuration",
      "The time limit for retrying a failed job, measured from time when an execution was first attempted.\nIf specified with retryCount, the job will be retried until both limits are reached.\nA duration in seconds with up to nine fractional digits, terminated by 's'.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MinBackoffDuration",
      "The minimum amount of time to wait before retrying a job after it fails.\nA duration in seconds with up to nine fractional digits, terminated by 's'.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "RetryCount",
      "The number of attempts that the system will make to run a\njob using the exponential backoff procedure described by maxDoublings.\nValues greater than 5 and negative values are not allowed.",
      [],
      false,
      false,
    ),
  ];
}
