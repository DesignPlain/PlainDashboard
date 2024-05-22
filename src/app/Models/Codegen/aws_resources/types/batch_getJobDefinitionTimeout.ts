import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

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
      [],
      true,
      false,
    ),
  ];
}
