import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface quicksight_getDataSetLogicalTableMapDataTransformCreateColumnsOperationColumn {
  //
  expression?: string;

  //
  columnId?: string;

  //
  columnName?: string;
}

export function quicksight_getDataSetLogicalTableMapDataTransformCreateColumnsOperationColumn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "expression", "", [], true, false),
    new DynamicUIProps(InputType.String, "columnId", "", [], true, false),
    new DynamicUIProps(InputType.String, "columnName", "", [], true, false),
  ];
}
