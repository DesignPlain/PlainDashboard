import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  quicksight_DataSetLogicalTableMapDataTransformTagColumnOperationTag,
  quicksight_DataSetLogicalTableMapDataTransformTagColumnOperationTag_GetTypes,
} from "./quicksight_DataSetLogicalTableMapDataTransformTagColumnOperationTag";

export interface quicksight_DataSetLogicalTableMapDataTransformTagColumnOperation {
  // Column name.
  columnName?: string;

  // The dataset column tag, currently only used for geospatial type tagging. See tags.
  tags?: Array<quicksight_DataSetLogicalTableMapDataTransformTagColumnOperationTag>;
}

export function quicksight_DataSetLogicalTableMapDataTransformTagColumnOperation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "columnName",
      "Column name.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tags",
      "The dataset column tag, currently only used for geospatial type tagging. See tags.",
      () =>
        quicksight_DataSetLogicalTableMapDataTransformTagColumnOperationTag_GetTypes(),
      true,
      false,
    ),
  ];
}
