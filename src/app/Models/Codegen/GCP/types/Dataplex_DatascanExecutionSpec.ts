import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataplex_DatascanExecutionSpecTrigger,
  Dataplex_DatascanExecutionSpecTrigger_GetTypes,
} from "./Dataplex_DatascanExecutionSpecTrigger";

export interface Dataplex_DatascanExecutionSpec {
  // The unnested field (of type Date or Timestamp) that contains values which monotonically increase over time. If not specified, a data scan will run for all data in the table.
  Field?: string;

  /*
Spec related to how often and when a scan should be triggered.
Structure is documented below.
*/
  Trigger?: Dataplex_DatascanExecutionSpecTrigger;
}

export function Dataplex_DatascanExecutionSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Field",
      "The unnested field (of type Date or Timestamp) that contains values which monotonically increase over time. If not specified, a data scan will run for all data in the table.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Trigger",
      "Spec related to how often and when a scan should be triggered.\nStructure is documented below.",
      Dataplex_DatascanExecutionSpecTrigger_GetTypes(),
      true,
      false,
    ),
  ];
}
