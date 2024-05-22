import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  quicksight_getDataSetLogicalTableMapSourceJoinInstruction,
  quicksight_getDataSetLogicalTableMapSourceJoinInstruction_GetTypes,
} from "./quicksight_getDataSetLogicalTableMapSourceJoinInstruction";

export interface quicksight_getDataSetLogicalTableMapSource {
  //
  joinInstructions?: Array<quicksight_getDataSetLogicalTableMapSourceJoinInstruction>;

  //
  physicalTableId?: string;

  //
  dataSetArn?: string;
}

export function quicksight_getDataSetLogicalTableMapSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "physicalTableId",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "dataSetArn", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "joinInstructions",
      "",
      quicksight_getDataSetLogicalTableMapSourceJoinInstruction_GetTypes(),
      true,
      false,
    ),
  ];
}
