import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface quicksight_getDataSetLogicalTableMapDataTransformFilterOperation {
  //
  conditionExpression?: string;
}

export function quicksight_getDataSetLogicalTableMapDataTransformFilterOperation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "conditionExpression",
      "",
      [],
      true,
      false,
    ),
  ];
}
