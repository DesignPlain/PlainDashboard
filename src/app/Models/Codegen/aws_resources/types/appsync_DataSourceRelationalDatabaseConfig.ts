import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appsync_DataSourceRelationalDatabaseConfigHttpEndpointConfig,
  appsync_DataSourceRelationalDatabaseConfigHttpEndpointConfig_GetTypes,
} from "./appsync_DataSourceRelationalDatabaseConfigHttpEndpointConfig";

export interface appsync_DataSourceRelationalDatabaseConfig {
  // Amazon RDS HTTP endpoint configuration. See HTTP Endpoint Config.
  httpEndpointConfig?: appsync_DataSourceRelationalDatabaseConfigHttpEndpointConfig;

  // Source type for the relational database. Valid values: `RDS_HTTP_ENDPOINT`.
  sourceType?: string;
}

export function appsync_DataSourceRelationalDatabaseConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "httpEndpointConfig",
      "Amazon RDS HTTP endpoint configuration. See HTTP Endpoint Config.",
      appsync_DataSourceRelationalDatabaseConfigHttpEndpointConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceType",
      "Source type for the relational database. Valid values: `RDS_HTTP_ENDPOINT`.",
      [],
      false,
      false,
    ),
  ];
}
