import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appsync_DataSourceDynamodbConfigDeltaSyncConfig,
  appsync_DataSourceDynamodbConfigDeltaSyncConfig_GetTypes,
} from './appsync_DataSourceDynamodbConfigDeltaSyncConfig';

export interface appsync_DataSourceDynamodbConfig {
  // Detects Conflict Detection and Resolution with this data source.
  versioned?: boolean;

  // The DeltaSyncConfig for a versioned data source. See `delta_sync_config` Block for details.
  deltaSyncConfig?: appsync_DataSourceDynamodbConfigDeltaSyncConfig;

  // AWS region of the DynamoDB table. Defaults to current region.
  region?: string;

  // Name of the DynamoDB table.
  tableName?: string;

  // Set to `true` to use Amazon Cognito credentials with this data source.
  useCallerCredentials?: boolean;
}

export function appsync_DataSourceDynamodbConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'versioned',
      'Detects Conflict Detection and Resolution with this data source.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'deltaSyncConfig',
      'The DeltaSyncConfig for a versioned data source. See `delta_sync_config` Block for details.',
      () => appsync_DataSourceDynamodbConfigDeltaSyncConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'region',
      'AWS region of the DynamoDB table. Defaults to current region.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'tableName',
      'Name of the DynamoDB table.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'useCallerCredentials',
      'Set to `true` to use Amazon Cognito credentials with this data source.',
      () => [],
      false,
      false,
    ),
  ];
}
