import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ConnectionProfileForwardSshConnectivity } from "../types/ConnectionProfileForwardSshConnectivity";
import { ConnectionProfileGcsProfile } from "../types/ConnectionProfileGcsProfile";
import { ConnectionProfileMysqlProfile } from "../types/ConnectionProfileMysqlProfile";
import { ConnectionProfileBigqueryProfile } from "../types/ConnectionProfileBigqueryProfile";
import { ConnectionProfileOracleProfile } from "../types/ConnectionProfileOracleProfile";
import { ConnectionProfilePostgresqlProfile } from "../types/ConnectionProfilePostgresqlProfile";
import { ConnectionProfilePrivateConnectivity } from "../types/ConnectionProfilePrivateConnectivity";

export interface ConnectionProfileArgs {
  /*
The name of the location this connection profile is located in.


- - -
*/
  Location?: string;

  /*
MySQL database profile.
Structure is documented below.
*/
  MysqlProfile?: ConnectionProfileMysqlProfile;

  // BigQuery warehouse profile.
  BigqueryProfile?: ConnectionProfileBigqueryProfile;

  // Display name.
  DisplayName?: string;

  /*
Labels.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
Oracle database profile.
Structure is documented below.
*/
  OracleProfile?: ConnectionProfileOracleProfile;

  /*
PostgreSQL database profile.
Structure is documented below.
*/
  PostgresqlProfile?: ConnectionProfilePostgresqlProfile;

  /*
Private connectivity.
Structure is documented below.
*/
  PrivateConnectivity?: ConnectionProfilePrivateConnectivity;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The connection profile identifier.
  ConnectionProfileId?: string;

  /*
Forward SSH tunnel connectivity.
Structure is documented below.
*/
  ForwardSshConnectivity?: ConnectionProfileForwardSshConnectivity;

  /*
Cloud Storage bucket profile.
Structure is documented below.
*/
  GcsProfile?: ConnectionProfileGcsProfile;
}
export class ConnectionProfile extends Resource {
  // The resource's name.
  public Name?: string;

  /*
Oracle database profile.
Structure is documented below.
*/
  public OracleProfile?: ConnectionProfileOracleProfile;

  // The connection profile identifier.
  public ConnectionProfileId?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Cloud Storage bucket profile.
Structure is documented below.
*/
  public GcsProfile?: ConnectionProfileGcsProfile;

  /*
PostgreSQL database profile.
Structure is documented below.
*/
  public PostgresqlProfile?: ConnectionProfilePostgresqlProfile;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // BigQuery warehouse profile.
  public BigqueryProfile?: ConnectionProfileBigqueryProfile;

  /*
Labels.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
Private connectivity.
Structure is documented below.
*/
  public PrivateConnectivity?: ConnectionProfilePrivateConnectivity;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // Display name.
  public DisplayName?: string;

  /*
Forward SSH tunnel connectivity.
Structure is documented below.
*/
  public ForwardSshConnectivity?: ConnectionProfileForwardSshConnectivity;

  /*
The name of the location this connection profile is located in.


- - -
*/
  public Location?: string;

  /*
MySQL database profile.
Structure is documented below.
*/
  public MysqlProfile?: ConnectionProfileMysqlProfile;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Labels.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PrivateConnectivity",
        "Private connectivity.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "OracleProfile",
        "Oracle database profile.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PostgresqlProfile",
        "PostgreSQL database profile.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ConnectionProfileId",
        "The connection profile identifier.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The name of the location this connection profile is located in.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "MysqlProfile",
        "MySQL database profile.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "BigqueryProfile",
        "BigQuery warehouse profile.",
      ),
      new DynamicUIProps(InputType.String, "DisplayName", "Display name."),
      new DynamicUIProps(
        InputType.String,
        "ForwardSshConnectivity",
        "Forward SSH tunnel connectivity.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "GcsProfile",
        "Cloud Storage bucket profile.\nStructure is documented below.",
      ),
    ];
  }
}
