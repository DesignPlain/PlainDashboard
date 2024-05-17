import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Bigquery_TableView {
  // A query that BigQuery executes when the view is referenced.
  Query?: string;

  /*
Specifies whether to use BigQuery's legacy SQL for this view.
The default value is true. If set to false, the view will use BigQuery's standard SQL.
*/
  UseLegacySql?: boolean;
}

export function Bigquery_TableView_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Query",
      "A query that BigQuery executes when the view is referenced.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "UseLegacySql",
      "Specifies whether to use BigQuery's legacy SQL for this view.\nThe default value is true. If set to false, the view will use BigQuery's standard SQL.",
      [],
      false,
      false,
    ),
  ];
}
