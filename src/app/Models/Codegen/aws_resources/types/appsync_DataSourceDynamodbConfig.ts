import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appsync_DataSourceDynamodbConfigDeltaSyncConfig,
  appsync_DataSourceDynamodbConfigDeltaSyncConfig_GetTypes,
} from "./appsync_DataSourceDynamodbConfigDeltaSyncConfig";

export interface appsync_DataSourceDynamodbConfig {
  // AWS region of the DynamoDB table. Defaults to current region.
  region?: string;

  // Name of the DynamoDB table.
  tableName?: string;

  // Set to `true` to use Amazon Cognito credentials with this data source.
  useCallerCredentials?: boolean;

  // Detects Conflict Detection and Resolution with this data source.
  versioned?: boolean;

  // The DeltaSyncConfig for a versioned data source. See Delta Sync Config
  deltaSyncConfig?: appsync_DataSourceDynamodbConfigDeltaSyncConfig;
}

export function appsync_DataSourceDynamodbConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "region",
      "AWS region of the DynamoDB table. Defaults to current region.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tableName",
      "Name of the DynamoDB table.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "useCallerCredentials",
      "Set to `true` to use Amazon Cognito credentials with this data source.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "versioned",
      "Detects Conflict Detection and Resolution with this data source.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "deltaSyncConfig",
      "The DeltaSyncConfig for a versioned data source. See Delta Sync Config",
      appsync_DataSourceDynamodbConfigDeltaSyncConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
