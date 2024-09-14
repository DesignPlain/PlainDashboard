import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dataloss_PreventionJobTriggerTriggerManual,
  dataloss_PreventionJobTriggerTriggerManual_GetTypes,
} from "./dataloss_PreventionJobTriggerTriggerManual";
import {
  dataloss_PreventionJobTriggerTriggerSchedule,
  dataloss_PreventionJobTriggerTriggerSchedule_GetTypes,
} from "./dataloss_PreventionJobTriggerTriggerSchedule";

export interface dataloss_PreventionJobTriggerTrigger {
  // For use with hybrid jobs. Jobs must be manually created and finished.
  manual?: dataloss_PreventionJobTriggerTriggerManual;

  /*
Schedule for triggered jobs
Structure is documented below.
*/
  schedule?: dataloss_PreventionJobTriggerTriggerSchedule;
}

export function dataloss_PreventionJobTriggerTrigger_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "manual",
      "For use with hybrid jobs. Jobs must be manually created and finished.",
      () => dataloss_PreventionJobTriggerTriggerManual_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "schedule",
      "Schedule for triggered jobs\nStructure is documented below.",
      () => dataloss_PreventionJobTriggerTriggerSchedule_GetTypes(),
      false,
      false,
    ),
  ];
}
