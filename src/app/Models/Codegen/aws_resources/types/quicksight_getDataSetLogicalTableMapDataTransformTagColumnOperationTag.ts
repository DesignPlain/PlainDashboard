import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  quicksight_getDataSetLogicalTableMapDataTransformTagColumnOperationTagColumnDescription,
  quicksight_getDataSetLogicalTableMapDataTransformTagColumnOperationTagColumnDescription_GetTypes,
} from "./quicksight_getDataSetLogicalTableMapDataTransformTagColumnOperationTagColumnDescription";

export interface quicksight_getDataSetLogicalTableMapDataTransformTagColumnOperationTag {
  //
  columnDescriptions?: Array<quicksight_getDataSetLogicalTableMapDataTransformTagColumnOperationTagColumnDescription>;

  //
  columnGeographicRole?: string;
}

export function quicksight_getDataSetLogicalTableMapDataTransformTagColumnOperationTag_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "columnDescriptions",
      "",
      quicksight_getDataSetLogicalTableMapDataTransformTagColumnOperationTagColumnDescription_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "columnGeographicRole",
      "",
      [],
      true,
      false,
    ),
  ];
}
