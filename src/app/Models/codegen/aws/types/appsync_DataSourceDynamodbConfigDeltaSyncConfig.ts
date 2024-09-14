import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appsync_DataSourceDynamodbConfigDeltaSyncConfig {
  // The number of minutes that an Item is stored in the data source.
  baseTableTtl?: number;

  // The table name.
  deltaSyncTableName?: string;

  // The number of minutes that a Delta Sync log entry is stored in the Delta Sync table.
  deltaSyncTableTtl?: number;
}

export function appsync_DataSourceDynamodbConfigDeltaSyncConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "baseTableTtl",
      "The number of minutes that an Item is stored in the data source.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "deltaSyncTableName",
      "The table name.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "deltaSyncTableTtl",
      "The number of minutes that a Delta Sync log entry is stored in the Delta Sync table.",
      () => [],
      false,
      false,
    ),
  ];
}
