import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface batch_getJobDefinitionRetryStrategy {
  // The number of times to move a job to the RUNNABLE status.
  attempts?: number;

  // Array of up to 5 objects that specify the conditions where jobs are retried or failed.
  evaluateOnExits?: Array<string>;
}

export function batch_getJobDefinitionRetryStrategy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "attempts",
      "The number of times to move a job to the RUNNABLE status.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "evaluateOnExits",
      "Array of up to 5 objects that specify the conditions where jobs are retried or failed.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
