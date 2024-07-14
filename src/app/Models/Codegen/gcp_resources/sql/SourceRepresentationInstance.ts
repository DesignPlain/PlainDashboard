import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface SourceRepresentationInstanceArgs {
  /*
The IPv4 address and port for the external server, or the the DNS address for the external server. If the external server is hosted on Cloud SQL, the port is 5432.


- - -
*/
  host?: string;

  // The name of the source representation instance. Use any valid Cloud SQL instance name.
  name?: string;

  /*
The externally accessible port for the source database server.
Defaults to 3306.
*/
  port?: number;

  // The replication user account on the external server.
  username?: string;

  /*
The Region in which the created instance should reside.
If it is not provided, the provider region is used.
*/
  region?: string;

  // The CA certificate on the external server. Include only if SSL/TLS is used on the external server.
  caCertificate?: string;

  // The client certificate on the external server. Required only for server-client authentication. Include only if SSL/TLS is used on the external server.
  clientCertificate?: string;

  // The private key file for the client certificate on the external server. Required only for server-client authentication. Include only if SSL/TLS is used on the external server.
  clientKey?: string;

  /*
The MySQL version running on your source database server.
Possible values are: `MYSQL_5_6`, `MYSQL_5_7`, `MYSQL_8_0`, `POSTGRES_9_6`, `POSTGRES_10`, `POSTGRES_11`, `POSTGRES_12`, `POSTGRES_13`, `POSTGRES_14`.
*/
  databaseVersion?: string;

  // A file in the bucket that contains the data from the external server.
  dumpFilePath?: string;

  /*
The password for the replication user account.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  password?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class SourceRepresentationInstance extends Resource {
  // The client certificate on the external server. Required only for server-client authentication. Include only if SSL/TLS is used on the external server.
  public clientCertificate?: string;

  // The private key file for the client certificate on the external server. Required only for server-client authentication. Include only if SSL/TLS is used on the external server.
  public clientKey?: string;

  /*
The password for the replication user account.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  public password?: string;

  /*
The externally accessible port for the source database server.
Defaults to 3306.
*/
  public port?: number;

  // The name of the source representation instance. Use any valid Cloud SQL instance name.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The Region in which the created instance should reside.
If it is not provided, the provider region is used.
*/
  public region?: string;

  // The replication user account on the external server.
  public username?: string;

  // The CA certificate on the external server. Include only if SSL/TLS is used on the external server.
  public caCertificate?: string;

  /*
The MySQL version running on your source database server.
Possible values are: `MYSQL_5_6`, `MYSQL_5_7`, `MYSQL_8_0`, `POSTGRES_9_6`, `POSTGRES_10`, `POSTGRES_11`, `POSTGRES_12`, `POSTGRES_13`, `POSTGRES_14`.
*/
  public databaseVersion?: string;

  // A file in the bucket that contains the data from the external server.
  public dumpFilePath?: string;

  /*
The IPv4 address and port for the external server, or the the DNS address for the external server. If the external server is hosted on Cloud SQL, the port is 5432.


- - -
*/
  public host?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "host",
        "The IPv4 address and port for the external server, or the the DNS address for the external server. If the external server is hosted on Cloud SQL, the port is 5432.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "port",
        "The externally accessible port for the source database server.\nDefaults to 3306.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "clientCertificate",
        "The client certificate on the external server. Required only for server-client authentication. Include only if SSL/TLS is used on the external server.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "clientKey",
        "The private key file for the client certificate on the external server. Required only for server-client authentication. Include only if SSL/TLS is used on the external server.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "dumpFilePath",
        "A file in the bucket that contains the data from the external server.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the source representation instance. Use any valid Cloud SQL instance name.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "username",
        "The replication user account on the external server.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "The Region in which the created instance should reside.\nIf it is not provided, the provider region is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "caCertificate",
        "The CA certificate on the external server. Include only if SSL/TLS is used on the external server.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "databaseVersion",
        "The MySQL version running on your source database server.\nPossible values are: `MYSQL_5_6`, `MYSQL_5_7`, `MYSQL_8_0`, `POSTGRES_9_6`, `POSTGRES_10`, `POSTGRES_11`, `POSTGRES_12`, `POSTGRES_13`, `POSTGRES_14`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "password",
        "The password for the replication user account.\n**Note**: This property is sensitive and will not be displayed in the plan.",
        [],
        false,
        true,
      ),
    ];
  }
}
