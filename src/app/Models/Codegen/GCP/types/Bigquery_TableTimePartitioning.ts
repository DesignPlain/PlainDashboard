import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Bigquery_TableTimePartitioning {
  /*
Number of milliseconds for which to keep the
storage for a partition.
*/
  ExpirationMs?: number;

  /*
The field used to determine how to create a time-based
partition. If time-based partitioning is enabled without this value, the
table is partitioned based on the load time.
*/
  Field?: string;

  /*
If set to true, queries over this table
require a partition filter that can be used for partition elimination to be
specified. `require_partition_filter` is deprecated and will be removed in
a future major release. Use the top level field with the same name instead.
*/
  RequirePartitionFilter?: boolean;

  /*
The supported types are DAY, HOUR, MONTH, and YEAR,
which will generate one partition per day, hour, month, and year, respectively.
*/
  Type?: string;
}

export function Bigquery_TableTimePartitioning_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Field",
      "The field used to determine how to create a time-based\npartition. If time-based partitioning is enabled without this value, the\ntable is partitioned based on the load time.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "RequirePartitionFilter",
      "If set to true, queries over this table\nrequire a partition filter that can be used for partition elimination to be\nspecified. `require_partition_filter` is deprecated and will be removed in\na future major release. Use the top level field with the same name instead.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "The supported types are DAY, HOUR, MONTH, and YEAR,\nwhich will generate one partition per day, hour, month, and year, respectively.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ExpirationMs",
      "Number of milliseconds for which to keep the\nstorage for a partition.",
      [],
      false,
      false,
    ),
  ];
}
