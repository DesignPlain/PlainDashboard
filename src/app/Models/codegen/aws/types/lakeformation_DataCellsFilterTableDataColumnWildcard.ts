import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface lakeformation_DataCellsFilterTableDataColumnWildcard {
  // (Optional) Excludes column names. Any column with this name will be excluded.
  excludedColumnNames?: Array<string>;
}

export function lakeformation_DataCellsFilterTableDataColumnWildcard_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "excludedColumnNames",
      "(Optional) Excludes column names. Any column with this name will be excluded.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
