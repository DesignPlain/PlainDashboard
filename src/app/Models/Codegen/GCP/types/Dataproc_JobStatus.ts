import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataproc_JobStatus {
  // Output-only. Optional job state details, such as an error description if the state is ERROR
  Details?: string;

  // Output-only. A state message specifying the overall job state
  State?: string;

  // Output-only. The time when this state was entered
  StateStartTime?: string;

  // Output-only. Additional state information, which includes status reported by the agent
  Substate?: string;
}

export function Dataproc_JobStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "State",
      "Output-only. A state message specifying the overall job state",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "StateStartTime",
      "Output-only. The time when this state was entered",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Substate",
      "Output-only. Additional state information, which includes status reported by the agent",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Details",
      "Output-only. Optional job state details, such as an error description if the state is ERROR",
      [],
      false,
      false,
    ),
  ];
}
