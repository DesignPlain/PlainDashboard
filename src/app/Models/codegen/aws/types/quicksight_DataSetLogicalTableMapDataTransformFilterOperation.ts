import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface quicksight_DataSetLogicalTableMapDataTransformFilterOperation {
  // An expression that must evaluate to a Boolean value. Rows for which the expression evaluates to true are kept in the dataset.
  conditionExpression?: string;
}

export function quicksight_DataSetLogicalTableMapDataTransformFilterOperation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "conditionExpression",
      "An expression that must evaluate to a Boolean value. Rows for which the expression evaluates to true are kept in the dataset.",
      () => [],
      true,
      false,
    ),
  ];
}
