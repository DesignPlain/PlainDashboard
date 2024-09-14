import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface logging_BillingAccountSinkBigqueryOptions {
  /*
Whether to use [BigQuery's partition tables](https://cloud.google.com/bigquery/docs/partitioned-tables).
By default, Logging creates dated tables based on the log entries' timestamps, e.g. syslog_20170523. With partitioned
tables, the date suffix is no longer present and [special query syntax](https://cloud.google.com/bigquery/docs/querying-partitioned-tables)
has to be used instead. In both cases, tables are sharded based on UTC timezone.
*/
  usePartitionedTables?: boolean;
}

export function logging_BillingAccountSinkBigqueryOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "usePartitionedTables",
      "Whether to use [BigQuery's partition tables](https://cloud.google.com/bigquery/docs/partitioned-tables).\nBy default, Logging creates dated tables based on the log entries' timestamps, e.g. syslog_20170523. With partitioned\ntables, the date suffix is no longer present and [special query syntax](https://cloud.google.com/bigquery/docs/querying-partitioned-tables)\nhas to be used instead. In both cases, tables are sharded based on UTC timezone.",
      () => [],
      true,
      false,
    ),
  ];
}
