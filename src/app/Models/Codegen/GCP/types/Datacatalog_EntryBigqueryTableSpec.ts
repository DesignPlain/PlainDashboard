import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  datacatalog_EntryBigqueryTableSpecTableSpec,
  datacatalog_EntryBigqueryTableSpecTableSpec_GetTypes,
} from "./datacatalog_EntryBigqueryTableSpecTableSpec";
import {
  datacatalog_EntryBigqueryTableSpecViewSpec,
  datacatalog_EntryBigqueryTableSpecViewSpec_GetTypes,
} from "./datacatalog_EntryBigqueryTableSpecViewSpec";

export interface datacatalog_EntryBigqueryTableSpec {
  /*
(Output)
The table source type.
*/
  tableSourceType?: string;

  /*
(Output)
Spec of a BigQuery table. This field should only be populated if tableSourceType is BIGQUERY_TABLE.
Structure is documented below.
*/
  tableSpecs?: Array<datacatalog_EntryBigqueryTableSpecTableSpec>;

  /*
(Output)
Table view specification. This field should only be populated if tableSourceType is BIGQUERY_VIEW.
Structure is documented below.
*/
  viewSpecs?: Array<datacatalog_EntryBigqueryTableSpecViewSpec>;
}

export function datacatalog_EntryBigqueryTableSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "tableSourceType",
      "(Output)\nThe table source type.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tableSpecs",
      "(Output)\nSpec of a BigQuery table. This field should only be populated if tableSourceType is BIGQUERY_TABLE.\nStructure is documented below.",
      datacatalog_EntryBigqueryTableSpecTableSpec_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "viewSpecs",
      "(Output)\nTable view specification. This field should only be populated if tableSourceType is BIGQUERY_VIEW.\nStructure is documented below.",
      datacatalog_EntryBigqueryTableSpecViewSpec_GetTypes(),
      false,
      false,
    ),
  ];
}
