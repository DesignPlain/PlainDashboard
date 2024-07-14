import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface logging_getSinkBigqueryOption {
  // Whether [BigQuery's partition tables](https://cloud.google.com/bigquery/docs/partitioned-tables) are used.
  usePartitionedTables?: boolean;
}

export function logging_getSinkBigqueryOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "usePartitionedTables",
      "Whether [BigQuery's partition tables](https://cloud.google.com/bigquery/docs/partitioned-tables) are used.",
      [],
      true,
      false,
    ),
  ];
}
