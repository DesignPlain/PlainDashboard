import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dataplex_DatascanExecutionSpecTrigger,
  dataplex_DatascanExecutionSpecTrigger_GetTypes,
} from "./dataplex_DatascanExecutionSpecTrigger";

export interface dataplex_DatascanExecutionSpec {
  // The unnested field (of type Date or Timestamp) that contains values which monotonically increase over time. If not specified, a data scan will run for all data in the table.
  field?: string;

  /*
Spec related to how often and when a scan should be triggered.
Structure is documented below.
*/
  trigger?: dataplex_DatascanExecutionSpecTrigger;
}

export function dataplex_DatascanExecutionSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "field",
      "The unnested field (of type Date or Timestamp) that contains values which monotonically increase over time. If not specified, a data scan will run for all data in the table.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "trigger",
      "Spec related to how often and when a scan should be triggered.\nStructure is documented below.",
      () => dataplex_DatascanExecutionSpecTrigger_GetTypes(),
      true,
      false,
    ),
  ];
}
