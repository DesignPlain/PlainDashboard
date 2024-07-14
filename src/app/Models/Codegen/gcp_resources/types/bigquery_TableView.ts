import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface bigquery_TableView {
  // A query that BigQuery executes when the view is referenced.
  query?: string;

  /*
Specifies whether to use BigQuery's legacy SQL for this view.
The default value is true. If set to false, the view will use BigQuery's standard SQL.
*/
  useLegacySql?: boolean;
}

export function bigquery_TableView_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "query",
      "A query that BigQuery executes when the view is referenced.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "useLegacySql",
      "Specifies whether to use BigQuery's legacy SQL for this view.\nThe default value is true. If set to false, the view will use BigQuery's standard SQL.",
      [],
      false,
      false,
    ),
  ];
}
