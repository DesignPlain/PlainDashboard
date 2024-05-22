import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataloss_PreventionJobTriggerInspectJobAction,
  dataloss_PreventionJobTriggerInspectJobAction_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobAction";
import {
  dataloss_PreventionJobTriggerInspectJobInspectConfig,
  dataloss_PreventionJobTriggerInspectJobInspectConfig_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobInspectConfig";
import {
  dataloss_PreventionJobTriggerInspectJobStorageConfig,
  dataloss_PreventionJobTriggerInspectJobStorageConfig_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobStorageConfig";

export interface dataloss_PreventionJobTriggerInspectJob {
  /*
Configuration block for the actions to execute on the completion of a job. Can be specified multiple times, but only one for each type. Each action block supports fields documented below. This argument is processed in attribute-as-blocks mode.
Structure is documented below.
*/
  actions?: Array<dataloss_PreventionJobTriggerInspectJobAction>;

  /*
The core content of the template.
Structure is documented below.
*/
  inspectConfig?: dataloss_PreventionJobTriggerInspectJobInspectConfig;

  // The name of the template to run when this job is triggered.
  inspectTemplateName?: string;

  /*
Information on where to inspect
Structure is documented below.
*/
  storageConfig?: dataloss_PreventionJobTriggerInspectJobStorageConfig;
}

export function dataloss_PreventionJobTriggerInspectJob_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "storageConfig",
      "Information on where to inspect\nStructure is documented below.",
      dataloss_PreventionJobTriggerInspectJobStorageConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "actions",
      "Configuration block for the actions to execute on the completion of a job. Can be specified multiple times, but only one for each type. Each action block supports fields documented below. This argument is processed in attribute-as-blocks mode.\nStructure is documented below.",
      dataloss_PreventionJobTriggerInspectJobAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "inspectConfig",
      "The core content of the template.\nStructure is documented below.",
      dataloss_PreventionJobTriggerInspectJobInspectConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "inspectTemplateName",
      "The name of the template to run when this job is triggered.",
      [],
      false,
      false,
    ),
  ];
}
