import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataplex_DatascanExecutionSpecTriggerOnDemand,
  dataplex_DatascanExecutionSpecTriggerOnDemand_GetTypes,
} from "./dataplex_DatascanExecutionSpecTriggerOnDemand";
import {
  dataplex_DatascanExecutionSpecTriggerSchedule,
  dataplex_DatascanExecutionSpecTriggerSchedule_GetTypes,
} from "./dataplex_DatascanExecutionSpecTriggerSchedule";

export interface dataplex_DatascanExecutionSpecTrigger {
  // The scan runs once via dataScans.run API.
  onDemand?: dataplex_DatascanExecutionSpecTriggerOnDemand;

  /*
The scan is scheduled to run periodically.
Structure is documented below.
*/
  schedule?: dataplex_DatascanExecutionSpecTriggerSchedule;
}

export function dataplex_DatascanExecutionSpecTrigger_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "onDemand",
      "The scan runs once via dataScans.run API.",
      dataplex_DatascanExecutionSpecTriggerOnDemand_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "schedule",
      "The scan is scheduled to run periodically.\nStructure is documented below.",
      dataplex_DatascanExecutionSpecTriggerSchedule_GetTypes(),
      false,
      false,
    ),
  ];
}
