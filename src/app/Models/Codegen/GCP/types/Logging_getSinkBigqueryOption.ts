import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Logging_getSinkBigqueryOption {
  // Whether [BigQuery's partition tables](https://cloud.google.com/bigquery/docs/partitioned-tables) are used.
  UsePartitionedTables?: boolean;
}

export function Logging_getSinkBigqueryOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "UsePartitionedTables",
      "Whether [BigQuery's partition tables](https://cloud.google.com/bigquery/docs/partitioned-tables) are used.",
      [],
      true,
      false,
    ),
  ];
}
