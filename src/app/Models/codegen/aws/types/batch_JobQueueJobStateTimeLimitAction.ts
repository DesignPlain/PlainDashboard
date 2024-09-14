import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface batch_JobQueueJobStateTimeLimitAction {
  /*
The action to take when a job is at the head of the job queue in the specified state for the specified period of time. Valid values include `"CANCEL"`
- `job_state_time_limit_action.#.max_time_seconds` - The approximate amount of time, in seconds, that must pass with the job in the specified state before the action is taken. Valid values include integers between `600` & `86400`
*/
  action?: string;

  //
  maxTimeSeconds?: number;

  // The reason to log for the action being taken.
  reason?: string;

  // The state of the job needed to trigger the action. Valid values include `"RUNNABLE"`.
  state?: string;
}

export function batch_JobQueueJobStateTimeLimitAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "reason",
      "The reason to log for the action being taken.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "state",
      'The state of the job needed to trigger the action. Valid values include `"RUNNABLE"`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "action",
      'The action to take when a job is at the head of the job queue in the specified state for the specified period of time. Valid values include `"CANCEL"`\n* `job_state_time_limit_action.#.max_time_seconds` - The approximate amount of time, in seconds, that must pass with the job in the specified state before the action is taken. Valid values include integers between `600` & `86400`',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxTimeSeconds",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
