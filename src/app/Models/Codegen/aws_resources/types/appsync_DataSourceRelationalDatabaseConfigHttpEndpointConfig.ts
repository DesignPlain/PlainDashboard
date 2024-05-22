import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appsync_DataSourceRelationalDatabaseConfigHttpEndpointConfig {
  // AWS secret store ARN for database credentials.
  awsSecretStoreArn?: string;

  // Logical database name.
  databaseName?: string;

  // Amazon RDS cluster identifier.
  dbClusterIdentifier?: string;

  // AWS Region for RDS HTTP endpoint. Defaults to current region.
  region?: string;

  // Logical schema name.
  schema?: string;
}

export function appsync_DataSourceRelationalDatabaseConfigHttpEndpointConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "schema",
      "Logical schema name.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "awsSecretStoreArn",
      "AWS secret store ARN for database credentials.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "databaseName",
      "Logical database name.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dbClusterIdentifier",
      "Amazon RDS cluster identifier.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "region",
      "AWS Region for RDS HTTP endpoint. Defaults to current region.",
      [],
      false,
      false,
    ),
  ];
}
