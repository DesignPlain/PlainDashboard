import { PreventionJobTriggerInspectJobAction } from "./PreventionJobTriggerInspectJobAction";
import { PreventionJobTriggerInspectJobInspectConfig } from "./PreventionJobTriggerInspectJobInspectConfig";
import { PreventionJobTriggerInspectJobStorageConfig } from "./PreventionJobTriggerInspectJobStorageConfig";

export interface PreventionJobTriggerInspectJob {
  /*
Configuration block for the actions to execute on the completion of a job. Can be specified multiple times, but only one for each type. Each action block supports fields documented below. This argument is processed in attribute-as-blocks mode.
Structure is documented below.
*/
  Actions?: Array<PreventionJobTriggerInspectJobAction>;

  /*
The core content of the template.
Structure is documented below.
*/
  InspectConfig?: PreventionJobTriggerInspectJobInspectConfig;

  // The name of the template to run when this job is triggered.
  InspectTemplateName?: string;

  /*
Information on where to inspect
Structure is documented below.
*/
  StorageConfig?: PreventionJobTriggerInspectJobStorageConfig;
}
