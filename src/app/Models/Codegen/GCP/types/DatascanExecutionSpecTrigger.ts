import { DatascanExecutionSpecTriggerOnDemand } from "./DatascanExecutionSpecTriggerOnDemand";
import { DatascanExecutionSpecTriggerSchedule } from "./DatascanExecutionSpecTriggerSchedule";

export interface DatascanExecutionSpecTrigger {
  // The scan runs once via dataScans.run API.
  OnDemand?: DatascanExecutionSpecTriggerOnDemand;

  /*
The scan is scheduled to run periodically.
Structure is documented below.
*/
  Schedule?: DatascanExecutionSpecTriggerSchedule;
}
