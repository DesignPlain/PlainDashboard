import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  quicksight_getDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperty,
  quicksight_getDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperty_GetTypes,
} from './quicksight_getDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperty';
import {
  quicksight_getDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperty,
  quicksight_getDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperty_GetTypes,
} from './quicksight_getDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperty';

export interface quicksight_getDataSetLogicalTableMapSourceJoinInstruction {
  //
  leftOperand?: string;

  //
  onClause?: string;

  //
  rightJoinKeyProperties?: Array<quicksight_getDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperty>;

  //
  rightOperand?: string;

  //
  type?: string;

  //
  leftJoinKeyProperties?: Array<quicksight_getDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperty>;
}

export function quicksight_getDataSetLogicalTableMapSourceJoinInstruction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'leftOperand',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'onClause', '', () => [], true, false),
    new DynamicUIProps(
      InputType.Array,
      'rightJoinKeyProperties',
      '',
      () =>
        quicksight_getDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperty_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'rightOperand',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'type', '', () => [], true, false),
    new DynamicUIProps(
      InputType.Array,
      'leftJoinKeyProperties',
      '',
      () =>
        quicksight_getDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperty_GetTypes(),
      true,
      false,
    ),
  ];
}
