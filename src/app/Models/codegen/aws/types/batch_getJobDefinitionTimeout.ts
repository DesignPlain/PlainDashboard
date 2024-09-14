import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface batch_getJobDefinitionTimeout {
  // The job timeout time (in seconds) that's measured from the job attempt's startedAt timestamp.
  attemptDurationSeconds?: number;
}

export function batch_getJobDefinitionTimeout_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "attemptDurationSeconds",
      "The job timeout time (in seconds) that's measured from the job attempt's startedAt timestamp.",
      () => [],
      true,
      false,
    ),
  ];
}
