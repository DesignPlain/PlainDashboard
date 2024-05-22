import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  quicksight_getDataSetLogicalTableMapDataTransformCreateColumnsOperationColumn,
  quicksight_getDataSetLogicalTableMapDataTransformCreateColumnsOperationColumn_GetTypes,
} from "./quicksight_getDataSetLogicalTableMapDataTransformCreateColumnsOperationColumn";

export interface quicksight_getDataSetLogicalTableMapDataTransformCreateColumnsOperation {
  //
  columns?: Array<quicksight_getDataSetLogicalTableMapDataTransformCreateColumnsOperationColumn>;
}

export function quicksight_getDataSetLogicalTableMapDataTransformCreateColumnsOperation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "columns",
      "",
      quicksight_getDataSetLogicalTableMapDataTransformCreateColumnsOperationColumn_GetTypes(),
      true,
      false,
    ),
  ];
}
