import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface quicksight_DataSetLogicalTableMapDataTransformProjectOperation {
  // Projected columns.
  projectedColumns?: Array<string>;
}

export function quicksight_DataSetLogicalTableMapDataTransformProjectOperation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "projectedColumns",
      "Projected columns.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
