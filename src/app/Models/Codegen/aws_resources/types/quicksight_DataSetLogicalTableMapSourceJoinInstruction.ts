import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  quicksight_DataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties,
  quicksight_DataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties_GetTypes,
} from "./quicksight_DataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties";
import {
  quicksight_DataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties,
  quicksight_DataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties_GetTypes,
} from "./quicksight_DataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties";

export interface quicksight_DataSetLogicalTableMapSourceJoinInstruction {
  // Join instructions provided in the ON clause of a join.
  onClause?: string;

  // Join key properties of the right operand. See right_join_key_properties.
  rightJoinKeyProperties?: quicksight_DataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties;

  // Operand on the right side of a join.
  rightOperand?: string;

  // Type of join. Valid values are `INNER`, `OUTER`, `LEFT`, and `RIGHT`.
  type?: string;

  // Join key properties of the left operand. See left_join_key_properties.
  leftJoinKeyProperties?: quicksight_DataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties;

  // Operand on the left side of a join.
  leftOperand?: string;
}

export function quicksight_DataSetLogicalTableMapSourceJoinInstruction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "rightJoinKeyProperties",
      "Join key properties of the right operand. See right_join_key_properties.",
      quicksight_DataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "rightOperand",
      "Operand on the right side of a join.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Type of join. Valid values are `INNER`, `OUTER`, `LEFT`, and `RIGHT`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "leftJoinKeyProperties",
      "Join key properties of the left operand. See left_join_key_properties.",
      quicksight_DataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "leftOperand",
      "Operand on the left side of a join.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "onClause",
      "Join instructions provided in the ON clause of a join.",
      [],
      true,
      false,
    ),
  ];
}
