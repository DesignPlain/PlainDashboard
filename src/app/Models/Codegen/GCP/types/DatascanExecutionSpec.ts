import { DatascanExecutionSpecTrigger } from "./DatascanExecutionSpecTrigger";

export interface DatascanExecutionSpec {
  // The unnested field (of type Date or Timestamp) that contains values which monotonically increase over time. If not specified, a data scan will run for all data in the table.
  Field?: string;

  /*
Spec related to how often and when a scan should be triggered.
Structure is documented below.
*/
  Trigger?: DatascanExecutionSpecTrigger;
}
