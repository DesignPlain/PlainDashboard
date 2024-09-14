import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface gamelift_GameSessionQueuePlayerLatencyPolicy {
  // Maximum latency value that is allowed for any player.
  maximumIndividualPlayerLatencyMilliseconds?: number;

  // Length of time that the policy is enforced while placing a new game session. Absence of value for this attribute means that the policy is enforced until the queue times out.
  policyDurationSeconds?: number;
}

export function gamelift_GameSessionQueuePlayerLatencyPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maximumIndividualPlayerLatencyMilliseconds",
      "Maximum latency value that is allowed for any player.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "policyDurationSeconds",
      "Length of time that the policy is enforced while placing a new game session. Absence of value for this attribute means that the policy is enforced until the queue times out.",
      () => [],
      false,
      false,
    ),
  ];
}
