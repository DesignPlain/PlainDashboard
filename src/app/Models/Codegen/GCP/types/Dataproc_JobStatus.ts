import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataproc_JobStatus {
  // Output-only. Optional job state details, such as an error description if the state is ERROR
  details?: string;

  // Output-only. A state message specifying the overall job state
  state?: string;

  // Output-only. The time when this state was entered
  stateStartTime?: string;

  // Output-only. Additional state information, which includes status reported by the agent
  substate?: string;
}

export function dataproc_JobStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "details",
      "Output-only. Optional job state details, such as an error description if the state is ERROR",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "state",
      "Output-only. A state message specifying the overall job state",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "stateStartTime",
      "Output-only. The time when this state was entered",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "substate",
      "Output-only. Additional state information, which includes status reported by the agent",
      [],
      false,
      false,
    ),
  ];
}
