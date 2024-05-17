import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datastream_ConnectionProfileOracleProfile,
  Datastream_ConnectionProfileOracleProfile_GetTypes,
} from "../types/Datastream_ConnectionProfileOracleProfile";
import {
  Datastream_ConnectionProfileMysqlProfile,
  Datastream_ConnectionProfileMysqlProfile_GetTypes,
} from "../types/Datastream_ConnectionProfileMysqlProfile";
import {
  Datastream_ConnectionProfilePostgresqlProfile,
  Datastream_ConnectionProfilePostgresqlProfile_GetTypes,
} from "../types/Datastream_ConnectionProfilePostgresqlProfile";
import {
  Datastream_ConnectionProfilePrivateConnectivity,
  Datastream_ConnectionProfilePrivateConnectivity_GetTypes,
} from "../types/Datastream_ConnectionProfilePrivateConnectivity";
import {
  Datastream_ConnectionProfileBigqueryProfile,
  Datastream_ConnectionProfileBigqueryProfile_GetTypes,
} from "../types/Datastream_ConnectionProfileBigqueryProfile";
import {
  Datastream_ConnectionProfileForwardSshConnectivity,
  Datastream_ConnectionProfileForwardSshConnectivity_GetTypes,
} from "../types/Datastream_ConnectionProfileForwardSshConnectivity";
import {
  Datastream_ConnectionProfileGcsProfile,
  Datastream_ConnectionProfileGcsProfile_GetTypes,
} from "../types/Datastream_ConnectionProfileGcsProfile";

export interface ConnectionProfileArgs {
  // BigQuery warehouse profile.
  BigqueryProfile?: Datastream_ConnectionProfileBigqueryProfile;

  // The connection profile identifier.
  ConnectionProfileId?: string;

  /*
Forward SSH tunnel connectivity.
Structure is documented below.
*/
  ForwardSshConnectivity?: Datastream_ConnectionProfileForwardSshConnectivity;

  /*
Cloud Storage bucket profile.
Structure is documented below.
*/
  GcsProfile?: Datastream_ConnectionProfileGcsProfile;

  /*
Labels.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The name of the location this connection profile is located in.


- - -
*/
  Location?: string;

  /*
Oracle database profile.
Structure is documented below.
*/
  OracleProfile?: Datastream_ConnectionProfileOracleProfile;

  // Display name.
  DisplayName?: string;

  /*
MySQL database profile.
Structure is documented below.
*/
  MysqlProfile?: Datastream_ConnectionProfileMysqlProfile;

  /*
PostgreSQL database profile.
Structure is documented below.
*/
  PostgresqlProfile?: Datastream_ConnectionProfilePostgresqlProfile;

  /*
Private connectivity.
Structure is documented below.
*/
  PrivateConnectivity?: Datastream_ConnectionProfilePrivateConnectivity;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class ConnectionProfile extends Resource {
  /*
MySQL database profile.
Structure is documented below.
*/
  public MysqlProfile?: Datastream_ConnectionProfileMysqlProfile;

  /*
Private connectivity.
Structure is documented below.
*/
  public PrivateConnectivity?: Datastream_ConnectionProfilePrivateConnectivity;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Labels.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
Oracle database profile.
Structure is documented below.
*/
  public OracleProfile?: Datastream_ConnectionProfileOracleProfile;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Forward SSH tunnel connectivity.
Structure is documented below.
*/
  public ForwardSshConnectivity?: Datastream_ConnectionProfileForwardSshConnectivity;

  // Display name.
  public DisplayName?: string;

  /*
The name of the location this connection profile is located in.


- - -
*/
  public Location?: string;

  // The connection profile identifier.
  public ConnectionProfileId?: string;

  /*
Cloud Storage bucket profile.
Structure is documented below.
*/
  public GcsProfile?: Datastream_ConnectionProfileGcsProfile;

  // The resource's name.
  public Name?: string;

  /*
PostgreSQL database profile.
Structure is documented below.
*/
  public PostgresqlProfile?: Datastream_ConnectionProfilePostgresqlProfile;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // BigQuery warehouse profile.
  public BigqueryProfile?: Datastream_ConnectionProfileBigqueryProfile;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "BigqueryProfile",
        "BigQuery warehouse profile.",
        Datastream_ConnectionProfileBigqueryProfile_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ConnectionProfileId",
        "The connection profile identifier.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Labels.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "OracleProfile",
        "Oracle database profile.\nStructure is documented below.",
        Datastream_ConnectionProfileOracleProfile_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "MysqlProfile",
        "MySQL database profile.\nStructure is documented below.",
        Datastream_ConnectionProfileMysqlProfile_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "PostgresqlProfile",
        "PostgreSQL database profile.\nStructure is documented below.",
        Datastream_ConnectionProfilePostgresqlProfile_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "PrivateConnectivity",
        "Private connectivity.\nStructure is documented below.",
        Datastream_ConnectionProfilePrivateConnectivity_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ForwardSshConnectivity",
        "Forward SSH tunnel connectivity.\nStructure is documented below.",
        Datastream_ConnectionProfileForwardSshConnectivity_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "GcsProfile",
        "Cloud Storage bucket profile.\nStructure is documented below.",
        Datastream_ConnectionProfileGcsProfile_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The name of the location this connection profile is located in.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Display name.",
        [],
        true,
        false,
      ),
    ];
  }
}
