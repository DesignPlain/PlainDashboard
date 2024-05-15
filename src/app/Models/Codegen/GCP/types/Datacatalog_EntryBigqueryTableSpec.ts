import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datacatalog_EntryBigqueryTableSpecViewSpec,
  Datacatalog_EntryBigqueryTableSpecViewSpec_GetTypes,
} from "./Datacatalog_EntryBigqueryTableSpecViewSpec";
import {
  Datacatalog_EntryBigqueryTableSpecTableSpec,
  Datacatalog_EntryBigqueryTableSpecTableSpec_GetTypes,
} from "./Datacatalog_EntryBigqueryTableSpecTableSpec";

export interface Datacatalog_EntryBigqueryTableSpec {
  /*
(Output)
The table source type.
*/
  TableSourceType?: string;

  /*
(Output)
Spec of a BigQuery table. This field should only be populated if tableSourceType is BIGQUERY_TABLE.
Structure is documented below.
*/
  TableSpecs?: Array<Datacatalog_EntryBigqueryTableSpecTableSpec>;

  /*
(Output)
Table view specification. This field should only be populated if tableSourceType is BIGQUERY_VIEW.
Structure is documented below.
*/
  ViewSpecs?: Array<Datacatalog_EntryBigqueryTableSpecViewSpec>;
}

export function Datacatalog_EntryBigqueryTableSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "TableSourceType",
      "(Output)\nThe table source type.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "TableSpecs",
      "(Output)\nSpec of a BigQuery table. This field should only be populated if tableSourceType is BIGQUERY_TABLE.\nStructure is documented below.",
      Datacatalog_EntryBigqueryTableSpecTableSpec_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ViewSpecs",
      "(Output)\nTable view specification. This field should only be populated if tableSourceType is BIGQUERY_VIEW.\nStructure is documented below.",
      Datacatalog_EntryBigqueryTableSpecViewSpec_GetTypes(),
      false,
      false,
    ),
  ];
}
