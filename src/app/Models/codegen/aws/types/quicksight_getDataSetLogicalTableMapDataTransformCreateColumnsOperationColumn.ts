import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface quicksight_getDataSetLogicalTableMapDataTransformCreateColumnsOperationColumn {
  //
  columnId?: string;

  //
  columnName?: string;

  //
  expression?: string;
}

export function quicksight_getDataSetLogicalTableMapDataTransformCreateColumnsOperationColumn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "columnId", "", () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      "columnName",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "expression",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
