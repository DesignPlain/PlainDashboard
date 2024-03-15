import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface SourceRepresentationInstanceArgs {
  /*
The externally accessible port for the source database server.
Defaults to 3306.
*/
  Port?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The CA certificate on the external server. Include only if SSL/TLS is used on the external server.
  CaCertificate?: string;

  // The private key file for the client certificate on the external server. Required only for server-client authentication. Include only if SSL/TLS is used on the external server.
  ClientKey?: string;

  /*
The MySQL version running on your source database server.
Possible values are: `MYSQL_5_6`, `MYSQL_5_7`, `MYSQL_8_0`, `POSTGRES_9_6`, `POSTGRES_10`, `POSTGRES_11`, `POSTGRES_12`, `POSTGRES_13`, `POSTGRES_14`.
*/
  DatabaseVersion?: string;

  /*
The IPv4 address and port for the external server, or the the DNS address for the external server. If the external server is hosted on Cloud SQL, the port is 5432.


- - -
*/
  Host?: string;

  // The name of the source representation instance. Use any valid Cloud SQL instance name.
  Name?: string;

  /*
The password for the replication user account.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  Password?: string;

  // The client certificate on the external server. Required only for server-client authentication. Include only if SSL/TLS is used on the external server.
  ClientCertificate?: string;

  // A file in the bucket that contains the data from the external server.
  DumpFilePath?: string;

  /*
The Region in which the created instance should reside.
If it is not provided, the provider region is used.
*/
  Region?: string;

  // The replication user account on the external server.
  Username?: string;
}
export class SourceRepresentationInstance extends Resource {
  /*
The MySQL version running on your source database server.
Possible values are: `MYSQL_5_6`, `MYSQL_5_7`, `MYSQL_8_0`, `POSTGRES_9_6`, `POSTGRES_10`, `POSTGRES_11`, `POSTGRES_12`, `POSTGRES_13`, `POSTGRES_14`.
*/
  public DatabaseVersion?: string;

  /*
The IPv4 address and port for the external server, or the the DNS address for the external server. If the external server is hosted on Cloud SQL, the port is 5432.


- - -
*/
  public Host?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The replication user account on the external server.
  public Username?: string;

  // The client certificate on the external server. Required only for server-client authentication. Include only if SSL/TLS is used on the external server.
  public ClientCertificate?: string;

  // The private key file for the client certificate on the external server. Required only for server-client authentication. Include only if SSL/TLS is used on the external server.
  public ClientKey?: string;

  // A file in the bucket that contains the data from the external server.
  public DumpFilePath?: string;

  // The name of the source representation instance. Use any valid Cloud SQL instance name.
  public Name?: string;

  /*
The password for the replication user account.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  public Password?: string;

  /*
The externally accessible port for the source database server.
Defaults to 3306.
*/
  public Port?: number;

  /*
The Region in which the created instance should reside.
If it is not provided, the provider region is used.
*/
  public Region?: string;

  // The CA certificate on the external server. Include only if SSL/TLS is used on the external server.
  public CaCertificate?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Password",
        "The password for the replication user account.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ClientCertificate",
        "The client certificate on the external server. Required only for server-client authentication. Include only if SSL/TLS is used on the external server.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DumpFilePath",
        "A file in the bucket that contains the data from the external server.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The Region in which the created instance should reside.\nIf it is not provided, the provider region is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Username",
        "The replication user account on the external server.",
      ),
      new DynamicUIProps(
        InputType.String,
        "CaCertificate",
        "The CA certificate on the external server. Include only if SSL/TLS is used on the external server.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ClientKey",
        "The private key file for the client certificate on the external server. Required only for server-client authentication. Include only if SSL/TLS is used on the external server.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DatabaseVersion",
        "The MySQL version running on your source database server.\nPossible values are: `MYSQL_5_6`, `MYSQL_5_7`, `MYSQL_8_0`, `POSTGRES_9_6`, `POSTGRES_10`, `POSTGRES_11`, `POSTGRES_12`, `POSTGRES_13`, `POSTGRES_14`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Host",
        "The IPv4 address and port for the external server, or the the DNS address for the external server. If the external server is hosted on Cloud SQL, the port is 5432.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the source representation instance. Use any valid Cloud SQL instance name.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "Port",
        "The externally accessible port for the source database server.\nDefaults to 3306.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
    ];
  }
}
