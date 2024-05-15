import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionJobTriggerInspectJobAction,
  Dataloss_PreventionJobTriggerInspectJobAction_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobAction";
import {
  Dataloss_PreventionJobTriggerInspectJobInspectConfig,
  Dataloss_PreventionJobTriggerInspectJobInspectConfig_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobInspectConfig";
import {
  Dataloss_PreventionJobTriggerInspectJobStorageConfig,
  Dataloss_PreventionJobTriggerInspectJobStorageConfig_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobStorageConfig";

export interface Dataloss_PreventionJobTriggerInspectJob {
  /*
Configuration block for the actions to execute on the completion of a job. Can be specified multiple times, but only one for each type. Each action block supports fields documented below. This argument is processed in attribute-as-blocks mode.
Structure is documented below.
*/
  Actions?: Array<Dataloss_PreventionJobTriggerInspectJobAction>;

  /*
The core content of the template.
Structure is documented below.
*/
  InspectConfig?: Dataloss_PreventionJobTriggerInspectJobInspectConfig;

  // The name of the template to run when this job is triggered.
  InspectTemplateName?: string;

  /*
Information on where to inspect
Structure is documented below.
*/
  StorageConfig?: Dataloss_PreventionJobTriggerInspectJobStorageConfig;
}

export function Dataloss_PreventionJobTriggerInspectJob_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Actions",
      "Configuration block for the actions to execute on the completion of a job. Can be specified multiple times, but only one for each type. Each action block supports fields documented below. This argument is processed in attribute-as-blocks mode.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "InspectConfig",
      "The core content of the template.\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobInspectConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "InspectTemplateName",
      "The name of the template to run when this job is triggered.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "StorageConfig",
      "Information on where to inspect\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobStorageConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
