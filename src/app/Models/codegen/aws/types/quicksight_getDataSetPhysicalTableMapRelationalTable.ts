import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  quicksight_getDataSetPhysicalTableMapRelationalTableInputColumn,
  quicksight_getDataSetPhysicalTableMapRelationalTableInputColumn_GetTypes,
} from "./quicksight_getDataSetPhysicalTableMapRelationalTableInputColumn";

export interface quicksight_getDataSetPhysicalTableMapRelationalTable {
  //
  dataSourceArn?: string;

  //
  inputColumns?: Array<quicksight_getDataSetPhysicalTableMapRelationalTableInputColumn>;

  //
  name?: string;

  //
  schema?: string;

  //
  catalog?: string;
}

export function quicksight_getDataSetPhysicalTableMapRelationalTable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "inputColumns",
      "",
      () =>
        quicksight_getDataSetPhysicalTableMapRelationalTableInputColumn_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "name", "", () => [], true, false),
    new DynamicUIProps(InputType.String, "schema", "", () => [], true, false),
    new DynamicUIProps(InputType.String, "catalog", "", () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      "dataSourceArn",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
