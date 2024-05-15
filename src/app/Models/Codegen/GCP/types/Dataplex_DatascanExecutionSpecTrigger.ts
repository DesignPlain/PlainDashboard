import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataplex_DatascanExecutionSpecTriggerOnDemand,
  Dataplex_DatascanExecutionSpecTriggerOnDemand_GetTypes,
} from "./Dataplex_DatascanExecutionSpecTriggerOnDemand";
import {
  Dataplex_DatascanExecutionSpecTriggerSchedule,
  Dataplex_DatascanExecutionSpecTriggerSchedule_GetTypes,
} from "./Dataplex_DatascanExecutionSpecTriggerSchedule";

export interface Dataplex_DatascanExecutionSpecTrigger {
  // The scan runs once via dataScans.run API.
  OnDemand?: Dataplex_DatascanExecutionSpecTriggerOnDemand;

  /*
The scan is scheduled to run periodically.
Structure is documented below.
*/
  Schedule?: Dataplex_DatascanExecutionSpecTriggerSchedule;
}

export function Dataplex_DatascanExecutionSpecTrigger_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "OnDemand",
      "The scan runs once via dataScans.run API.",
      Dataplex_DatascanExecutionSpecTriggerOnDemand_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Schedule",
      "The scan is scheduled to run periodically.\nStructure is documented below.",
      Dataplex_DatascanExecutionSpecTriggerSchedule_GetTypes(),
      false,
      false,
    ),
  ];
}
