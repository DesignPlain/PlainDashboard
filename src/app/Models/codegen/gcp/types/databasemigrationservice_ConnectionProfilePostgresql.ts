import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  databasemigrationservice_ConnectionProfilePostgresqlSsl,
  databasemigrationservice_ConnectionProfilePostgresqlSsl_GetTypes,
} from './databasemigrationservice_ConnectionProfilePostgresqlSsl';

export interface databasemigrationservice_ConnectionProfilePostgresql {
  // If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source.
  cloudSqlId?: string;

  // Required. The IP or hostname of the source MySQL database.
  host?: string;

  /*
(Output)
Output only. If the source is a Cloud SQL database, this field indicates the network architecture it's associated with.
*/
  networkArchitecture?: string;

  /*
Required. Input only. The password for the user that Database Migration Service will be using to connect to the database.
This field is not returned on request, and the value is encrypted when stored in Database Migration Service.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  password?: string;

  /*
(Output)
Output only. Indicates If this connection profile password is stored.
*/
  passwordSet?: boolean;

  // Required. The network port of the source MySQL database.
  port?: number;

  /*
SSL configuration for the destination to connect to the source database.
Structure is documented below.
*/
  ssl?: databasemigrationservice_ConnectionProfilePostgresqlSsl;

  // Required. The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service.
  username?: string;
}

export function databasemigrationservice_ConnectionProfilePostgresql_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'port',
      'Required. The network port of the source MySQL database.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'ssl',
      'SSL configuration for the destination to connect to the source database.\nStructure is documented below.',
      () => databasemigrationservice_ConnectionProfilePostgresqlSsl_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'username',
      'Required. The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'cloudSqlId',
      'If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'host',
      'Required. The IP or hostname of the source MySQL database.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'networkArchitecture',
      "(Output)\nOutput only. If the source is a Cloud SQL database, this field indicates the network architecture it's associated with.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'password',
      'Required. Input only. The password for the user that Database Migration Service will be using to connect to the database.\nThis field is not returned on request, and the value is encrypted when stored in Database Migration Service.\n**Note**: This property is sensitive and will not be displayed in the plan.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'passwordSet',
      '(Output)\nOutput only. Indicates If this connection profile password is stored.',
      () => [],
      false,
      false,
    ),
  ];
}
