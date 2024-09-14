import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface quicksight_getDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperty {
  //
  uniqueKey?: boolean;
}

export function quicksight_getDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperty_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "uniqueKey", "", () => [], true, false),
  ];
}
