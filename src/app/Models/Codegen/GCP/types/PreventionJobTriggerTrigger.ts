import { PreventionJobTriggerTriggerSchedule } from "./PreventionJobTriggerTriggerSchedule";
import { PreventionJobTriggerTriggerManual } from "./PreventionJobTriggerTriggerManual";

export interface PreventionJobTriggerTrigger {
  /*
Schedule for triggered jobs
Structure is documented below.
*/
  Schedule?: PreventionJobTriggerTriggerSchedule;

  // For use with hybrid jobs. Jobs must be manually created and finished.
  Manual?: PreventionJobTriggerTriggerManual;
}
