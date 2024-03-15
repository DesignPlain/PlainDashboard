import { EntryBigqueryTableSpecTableSpec } from "./EntryBigqueryTableSpecTableSpec";
import { EntryBigqueryTableSpecViewSpec } from "./EntryBigqueryTableSpecViewSpec";

export interface EntryBigqueryTableSpec {
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
  TableSpecs?: Array<EntryBigqueryTableSpecTableSpec>;

  /*
(Output)
Table view specification. This field should only be populated if tableSourceType is BIGQUERY_VIEW.
Structure is documented below.
*/
  ViewSpecs?: Array<EntryBigqueryTableSpecViewSpec>;
}
