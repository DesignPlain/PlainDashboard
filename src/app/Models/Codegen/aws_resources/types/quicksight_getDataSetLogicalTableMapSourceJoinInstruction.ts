import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  quicksight_getDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperty,
  quicksight_getDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperty_GetTypes,
} from "./quicksight_getDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperty";
import {
  quicksight_getDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperty,
  quicksight_getDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperty_GetTypes,
} from "./quicksight_getDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperty";

export interface quicksight_getDataSetLogicalTableMapSourceJoinInstruction {
  //
  rightJoinKeyProperties?: Array<quicksight_getDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperty>;

  //
  rightOperand?: string;

  //
  type?: string;

  //
  leftJoinKeyProperties?: Array<quicksight_getDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperty>;

  //
  leftOperand?: string;

  //
  onClause?: string;
}

export function quicksight_getDataSetLogicalTableMapSourceJoinInstruction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "rightJoinKeyProperties",
      "",
      quicksight_getDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperty_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "rightOperand", "", [], true, false),
    new DynamicUIProps(InputType.String, "type", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "leftJoinKeyProperties",
      "",
      quicksight_getDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperty_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "leftOperand", "", [], true, false),
    new DynamicUIProps(InputType.String, "onClause", "", [], true, false),
  ];
}
