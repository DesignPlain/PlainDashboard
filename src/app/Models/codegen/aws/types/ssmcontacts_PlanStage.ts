import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ssmcontacts_PlanStageTarget,
  ssmcontacts_PlanStageTarget_GetTypes,
} from "./ssmcontacts_PlanStageTarget";

export interface ssmcontacts_PlanStage {
  // The time to wait until beginning the next stage. The duration can only be set to 0 if a target is specified.
  durationInMinutes?: number;

  // One or more configuration blocks for specifying the contacts or contact methods that the escalation plan or engagement plan is engaging. See Target below for more details.
  targets?: Array<ssmcontacts_PlanStageTarget>;
}

export function ssmcontacts_PlanStage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "durationInMinutes",
      "The time to wait until beginning the next stage. The duration can only be set to 0 if a target is specified.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "targets",
      "One or more configuration blocks for specifying the contacts or contact methods that the escalation plan or engagement plan is engaging. See Target below for more details.",
      () => ssmcontacts_PlanStageTarget_GetTypes(),
      false,
      false,
    ),
  ];
}
