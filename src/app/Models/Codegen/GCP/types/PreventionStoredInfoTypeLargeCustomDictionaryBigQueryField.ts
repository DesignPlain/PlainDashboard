import { PreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField } from "./PreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField";
import { PreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable } from "./PreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable";

export interface PreventionStoredInfoTypeLargeCustomDictionaryBigQueryField {
  /*
Designated field in the BigQuery table.
Structure is documented below.
*/
  Field?: PreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField;

  /*
Field in a BigQuery table where each cell represents a dictionary phrase.
Structure is documented below.
*/
  Table?: PreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable;
}
