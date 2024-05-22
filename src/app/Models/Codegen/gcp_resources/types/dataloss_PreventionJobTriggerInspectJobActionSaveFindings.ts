import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataloss_PreventionJobTriggerInspectJobActionSaveFindingsOutputConfig,
  dataloss_PreventionJobTriggerInspectJobActionSaveFindingsOutputConfig_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobActionSaveFindingsOutputConfig";

export interface dataloss_PreventionJobTriggerInspectJobActionSaveFindings {
  /*
Information on where to store output
Structure is documented below.
*/
  outputConfig?: dataloss_PreventionJobTriggerInspectJobActionSaveFindingsOutputConfig;
}

export function dataloss_PreventionJobTriggerInspectJobActionSaveFindings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "outputConfig",
      "Information on where to store output\nStructure is documented below.",
      dataloss_PreventionJobTriggerInspectJobActionSaveFindingsOutputConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
