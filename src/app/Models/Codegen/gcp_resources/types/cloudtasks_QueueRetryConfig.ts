import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cloudtasks_QueueRetryConfig {
  /*
Number of attempts per task.
Cloud Tasks will attempt the task maxAttempts times (that is, if
the first attempt fails, then there will be maxAttempts - 1
retries). Must be >= -1.
If unspecified when the queue is created, Cloud Tasks will pick
the default.
-1 indicates unlimited attempts.
*/
  maxAttempts?: number;

  /*
A task will be scheduled for retry between minBackoff and
maxBackoff duration after it fails, if the queue's RetryConfig
specifies that the task should be retried.
*/
  maxBackoff?: string;

  /*
The time between retries will double maxDoublings times.
A task's retry interval starts at minBackoff, then doubles maxDoublings times,
then increases linearly, and finally retries retries at intervals of maxBackoff
up to maxAttempts times.
*/
  maxDoublings?: number;

  /*
If positive, maxRetryDuration specifies the time limit for
retrying a failed task, measured from when the task was first
attempted. Once maxRetryDuration time has passed and the task has
been attempted maxAttempts times, no further attempts will be
made and the task will be deleted.
If zero, then the task age is unlimited.
*/
  maxRetryDuration?: string;

  /*
A task will be scheduled for retry between minBackoff and
maxBackoff duration after it fails, if the queue's RetryConfig
specifies that the task should be retried.
*/
  minBackoff?: string;
}

export function cloudtasks_QueueRetryConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxDoublings",
      "The time between retries will double maxDoublings times.\nA task's retry interval starts at minBackoff, then doubles maxDoublings times,\nthen increases linearly, and finally retries retries at intervals of maxBackoff\nup to maxAttempts times.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "maxRetryDuration",
      "If positive, maxRetryDuration specifies the time limit for\nretrying a failed task, measured from when the task was first\nattempted. Once maxRetryDuration time has passed and the task has\nbeen attempted maxAttempts times, no further attempts will be\nmade and the task will be deleted.\nIf zero, then the task age is unlimited.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "minBackoff",
      "A task will be scheduled for retry between minBackoff and\nmaxBackoff duration after it fails, if the queue's RetryConfig\nspecifies that the task should be retried.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxAttempts",
      "Number of attempts per task.\nCloud Tasks will attempt the task maxAttempts times (that is, if\nthe first attempt fails, then there will be maxAttempts - 1\nretries). Must be >= -1.\nIf unspecified when the queue is created, Cloud Tasks will pick\nthe default.\n-1 indicates unlimited attempts.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "maxBackoff",
      "A task will be scheduled for retry between minBackoff and\nmaxBackoff duration after it fails, if the queue's RetryConfig\nspecifies that the task should be retried.",
      [],
      false,
      false,
    ),
  ];
}
