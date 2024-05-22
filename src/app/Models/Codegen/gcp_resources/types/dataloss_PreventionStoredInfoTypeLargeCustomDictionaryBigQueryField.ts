import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField,
  dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField_GetTypes,
} from "./dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField";
import {
  dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable,
  dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable_GetTypes,
} from "./dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable";

export interface dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryField {
  /*
Designated field in the BigQuery table.
Structure is documented below.
*/
  field?: dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField;

  /*
Field in a BigQuery table where each cell represents a dictionary phrase.
Structure is documented below.
*/
  table?: dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable;
}

export function dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryField_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "field",
      "Designated field in the BigQuery table.\nStructure is documented below.",
      dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "table",
      "Field in a BigQuery table where each cell represents a dictionary phrase.\nStructure is documented below.",
      dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable_GetTypes(),
      true,
      false,
    ),
  ];
}
