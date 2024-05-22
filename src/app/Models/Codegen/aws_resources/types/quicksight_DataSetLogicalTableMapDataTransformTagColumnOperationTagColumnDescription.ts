import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface quicksight_DataSetLogicalTableMapDataTransformTagColumnOperationTagColumnDescription {
  // The text of a description for a column.
  text?: string;
}

export function quicksight_DataSetLogicalTableMapDataTransformTagColumnOperationTagColumnDescription_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "text",
      "The text of a description for a column.",
      [],
      false,
      false,
    ),
  ];
}
