import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField,
  Dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField_GetTypes,
} from "./Dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField";
import {
  Dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable,
  Dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable_GetTypes,
} from "./Dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable";

export interface Dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryField {
  /*
Designated field in the BigQuery table.
Structure is documented below.
*/
  Field?: Dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField;

  /*
Field in a BigQuery table where each cell represents a dictionary phrase.
Structure is documented below.
*/
  Table?: Dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable;
}

export function Dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryField_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Field",
      "Designated field in the BigQuery table.\nStructure is documented below.",
      Dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Table",
      "Field in a BigQuery table where each cell represents a dictionary phrase.\nStructure is documented below.",
      Dataloss_PreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable_GetTypes(),
      true,
      false,
    ),
  ];
}
