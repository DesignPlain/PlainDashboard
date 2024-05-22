import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  quicksight_DataSetLogicalTableMapSourceJoinInstruction,
  quicksight_DataSetLogicalTableMapSourceJoinInstruction_GetTypes,
} from "./quicksight_DataSetLogicalTableMapSourceJoinInstruction";

export interface quicksight_DataSetLogicalTableMapSource {
  // Specifies the result of a join of two logical tables. See join_instruction.
  joinInstruction?: quicksight_DataSetLogicalTableMapSourceJoinInstruction;

  // Physical table ID.
  physicalTableId?: string;

  // ARN of the parent data set.
  dataSetArn?: string;
}

export function quicksight_DataSetLogicalTableMapSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "joinInstruction",
      "Specifies the result of a join of two logical tables. See join_instruction.",
      quicksight_DataSetLogicalTableMapSourceJoinInstruction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "physicalTableId",
      "Physical table ID.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dataSetArn",
      "ARN of the parent data set.",
      [],
      false,
      false,
    ),
  ];
}
