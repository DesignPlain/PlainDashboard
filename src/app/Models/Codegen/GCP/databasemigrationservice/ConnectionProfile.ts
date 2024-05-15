import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Databasemigrationservice_ConnectionProfileAlloydb,
  Databasemigrationservice_ConnectionProfileAlloydb_GetTypes,
} from "../types/Databasemigrationservice_ConnectionProfileAlloydb";
import {
  Databasemigrationservice_ConnectionProfileCloudsql,
  Databasemigrationservice_ConnectionProfileCloudsql_GetTypes,
} from "../types/Databasemigrationservice_ConnectionProfileCloudsql";
import {
  Databasemigrationservice_ConnectionProfileMysql,
  Databasemigrationservice_ConnectionProfileMysql_GetTypes,
} from "../types/Databasemigrationservice_ConnectionProfileMysql";
import {
  Databasemigrationservice_ConnectionProfilePostgresql,
  Databasemigrationservice_ConnectionProfilePostgresql_GetTypes,
} from "../types/Databasemigrationservice_ConnectionProfilePostgresql";
import {
  Databasemigrationservice_ConnectionProfileOracle,
  Databasemigrationservice_ConnectionProfileOracle_GetTypes,
} from "../types/Databasemigrationservice_ConnectionProfileOracle";
import {
  Databasemigrationservice_ConnectionProfileError,
  Databasemigrationservice_ConnectionProfileError_GetTypes,
} from "../types/Databasemigrationservice_ConnectionProfileError";

export interface ConnectionProfileArgs {
  /*
Specifies required connection parameters, and the parameters required to create an AlloyDB destination cluster.
Structure is documented below.
*/
  Alloydb?: Databasemigrationservice_ConnectionProfileAlloydb;

  /*
Specifies required connection parameters, and, optionally, the parameters required to create a Cloud SQL destination database instance.
Structure is documented below.
*/
  Cloudsql?: Databasemigrationservice_ConnectionProfileCloudsql;

  // The connection profile display name.
  DisplayName?: string;

  /*
Specifies connection parameters required specifically for MySQL databases.
Structure is documented below.
*/
  Mysql?: Databasemigrationservice_ConnectionProfileMysql;

  /*
Specifies connection parameters required specifically for PostgreSQL databases.
Structure is documented below.
*/
  Postgresql?: Databasemigrationservice_ConnectionProfilePostgresql;

  /*
The ID of the connection profile.


- - -
*/
  ConnectionProfileId?: string;

  /*
The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The location where the connection profile should reside.
  Location?: string;

  /*
Specifies connection parameters required specifically for Oracle databases.
Structure is documented below.
*/
  Oracle?: Databasemigrationservice_ConnectionProfileOracle;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class ConnectionProfile extends Resource {
  /*
Specifies connection parameters required specifically for PostgreSQL databases.
Structure is documented below.
*/
  public Postgresql?: Databasemigrationservice_ConnectionProfilePostgresql;

  // The location where the connection profile should reside.
  public Location?: string;

  /*
Specifies connection parameters required specifically for MySQL databases.
Structure is documented below.
*/
  public Mysql?: Databasemigrationservice_ConnectionProfileMysql;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
Specifies required connection parameters, and, optionally, the parameters required to create a Cloud SQL destination database instance.
Structure is documented below.
*/
  public Cloudsql?: Databasemigrationservice_ConnectionProfileCloudsql;

  /*
Output only. The error details in case of state FAILED.
Structure is documented below.
*/
  public Errors?: Array<Databasemigrationservice_ConnectionProfileError>;

  // The database provider.
  public Dbprovider?: string;

  /*
The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The name of this connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{connectionProfile}.
  public Name?: string;

  /*
Specifies connection parameters required specifically for Oracle databases.
Structure is documented below.
*/
  public Oracle?: Databasemigrationservice_ConnectionProfileOracle;

  // The current connection profile state.
  public State?: string;

  /*
The ID of the connection profile.


- - -
*/
  public ConnectionProfileId?: string;

  // Output only. The timestamp when the resource was created. A timestamp in RFC3339 UTC 'Zulu' format, accurate to nanoseconds. Example: '2014-10-02T15:01:23.045123456Z'.
  public CreateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Specifies required connection parameters, and the parameters required to create an AlloyDB destination cluster.
Structure is documented below.
*/
  public Alloydb?: Databasemigrationservice_ConnectionProfileAlloydb;

  // The connection profile display name.
  public DisplayName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The connection profile display name.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Postgresql",
        "Specifies connection parameters required specifically for PostgreSQL databases.\nStructure is documented below.",
        Databasemigrationservice_ConnectionProfilePostgresql_GetTypes(),
        false,
        false,
      ),
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
        "Cloudsql",
        "Specifies required connection parameters, and, optionally, the parameters required to create a Cloud SQL destination database instance.\nStructure is documented below.",
        Databasemigrationservice_ConnectionProfileCloudsql_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Mysql",
        "Specifies connection parameters required specifically for MySQL databases.\nStructure is documented below.",
        Databasemigrationservice_ConnectionProfileMysql_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ConnectionProfileId",
        "The ID of the connection profile.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location where the connection profile should reside.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Oracle",
        "Specifies connection parameters required specifically for Oracle databases.\nStructure is documented below.",
        Databasemigrationservice_ConnectionProfileOracle_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Alloydb",
        "Specifies required connection parameters, and the parameters required to create an AlloyDB destination cluster.\nStructure is documented below.",
        Databasemigrationservice_ConnectionProfileAlloydb_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
