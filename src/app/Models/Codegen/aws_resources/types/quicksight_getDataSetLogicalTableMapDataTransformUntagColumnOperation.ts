import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface quicksight_getDataSetLogicalTableMapDataTransformUntagColumnOperation {
  //
  columnName?: string;

  //
  tagNames?: Array<string>;
}

export function quicksight_getDataSetLogicalTableMapDataTransformUntagColumnOperation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "columnName", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "tagNames",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
