import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionJobTriggerInspectJobActionSaveFindingsOutputConfig,
  Dataloss_PreventionJobTriggerInspectJobActionSaveFindingsOutputConfig_GetTypes,
} from "./Dataloss_PreventionJobTriggerInspectJobActionSaveFindingsOutputConfig";

export interface Dataloss_PreventionJobTriggerInspectJobActionSaveFindings {
  /*
Information on where to store output
Structure is documented below.
*/
  OutputConfig?: Dataloss_PreventionJobTriggerInspectJobActionSaveFindingsOutputConfig;
}

export function Dataloss_PreventionJobTriggerInspectJobActionSaveFindings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "OutputConfig",
      "Information on where to store output\nStructure is documented below.",
      Dataloss_PreventionJobTriggerInspectJobActionSaveFindingsOutputConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
