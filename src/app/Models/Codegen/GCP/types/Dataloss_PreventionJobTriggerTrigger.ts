import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionJobTriggerTriggerManual,
  Dataloss_PreventionJobTriggerTriggerManual_GetTypes,
} from "./Dataloss_PreventionJobTriggerTriggerManual";
import {
  Dataloss_PreventionJobTriggerTriggerSchedule,
  Dataloss_PreventionJobTriggerTriggerSchedule_GetTypes,
} from "./Dataloss_PreventionJobTriggerTriggerSchedule";

export interface Dataloss_PreventionJobTriggerTrigger {
  // For use with hybrid jobs. Jobs must be manually created and finished.
  Manual?: Dataloss_PreventionJobTriggerTriggerManual;

  /*
Schedule for triggered jobs
Structure is documented below.
*/
  Schedule?: Dataloss_PreventionJobTriggerTriggerSchedule;
}

export function Dataloss_PreventionJobTriggerTrigger_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Manual",
      "For use with hybrid jobs. Jobs must be manually created and finished.",
      Dataloss_PreventionJobTriggerTriggerManual_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Schedule",
      "Schedule for triggered jobs\nStructure is documented below.",
      Dataloss_PreventionJobTriggerTriggerSchedule_GetTypes(),
      false,
      false,
    ),
  ];
}
