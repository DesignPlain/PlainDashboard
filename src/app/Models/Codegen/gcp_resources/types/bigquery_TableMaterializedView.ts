import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface bigquery_TableMaterializedView {
  /*
Allow non incremental materialized view definition.
The default value is false.
*/
  allowNonIncrementalDefinition?: boolean;

  /*
Specifies whether to use BigQuery's automatic refresh for this materialized view when the base table is updated.
The default value is true.
*/
  enableRefresh?: boolean;

  // A query whose result is persisted.
  query?: string;

  /*
The maximum frequency at which this materialized view will be refreshed.
The default value is 1800000
*/
  refreshIntervalMs?: number;
}

export function bigquery_TableMaterializedView_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "allowNonIncrementalDefinition",
      "Allow non incremental materialized view definition.\nThe default value is false.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableRefresh",
      "Specifies whether to use BigQuery's automatic refresh for this materialized view when the base table is updated.\nThe default value is true.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "query",
      "A query whose result is persisted.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "refreshIntervalMs",
      "The maximum frequency at which this materialized view will be refreshed.\nThe default value is 1800000",
      [],
      false,
      false,
    ),
  ];
}
