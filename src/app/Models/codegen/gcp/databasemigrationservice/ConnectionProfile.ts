import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  databasemigrationservice_ConnectionProfileCloudsql,
  databasemigrationservice_ConnectionProfileCloudsql_GetTypes,
} from "../types/databasemigrationservice_ConnectionProfileCloudsql";
import {
  databasemigrationservice_ConnectionProfileError,
  databasemigrationservice_ConnectionProfileError_GetTypes,
} from "../types/databasemigrationservice_ConnectionProfileError";
import {
  databasemigrationservice_ConnectionProfileMysql,
  databasemigrationservice_ConnectionProfileMysql_GetTypes,
} from "../types/databasemigrationservice_ConnectionProfileMysql";
import {
  databasemigrationservice_ConnectionProfileOracle,
  databasemigrationservice_ConnectionProfileOracle_GetTypes,
} from "../types/databasemigrationservice_ConnectionProfileOracle";
import {
  databasemigrationservice_ConnectionProfilePostgresql,
  databasemigrationservice_ConnectionProfilePostgresql_GetTypes,
} from "../types/databasemigrationservice_ConnectionProfilePostgresql";
import {
  databasemigrationservice_ConnectionProfileAlloydb,
  databasemigrationservice_ConnectionProfileAlloydb_GetTypes,
} from "../types/databasemigrationservice_ConnectionProfileAlloydb";

export interface ConnectionProfileArgs {
  /*
Specifies connection parameters required specifically for MySQL databases.
Structure is documented below.
*/
  mysql?: databasemigrationservice_ConnectionProfileMysql;

  /*
Specifies connection parameters required specifically for Oracle databases.
Structure is documented below.
*/
  oracle?: databasemigrationservice_ConnectionProfileOracle;

  /*
Specifies connection parameters required specifically for PostgreSQL databases.
Structure is documented below.
*/
  postgresql?: databasemigrationservice_ConnectionProfilePostgresql;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Specifies required connection parameters, and the parameters required to create an AlloyDB destination cluster.
Structure is documented below.
*/
  alloydb?: databasemigrationservice_ConnectionProfileAlloydb;

  /*
The ID of the connection profile.


- - -
*/
  connectionProfileId?: string;

  /*
The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
Specifies required connection parameters, and, optionally, the parameters required to create a Cloud SQL destination database instance.
Structure is documented below.
*/
  cloudsql?: databasemigrationservice_ConnectionProfileCloudsql;

  // The connection profile display name.
  displayName?: string;

  // The location where the connection profile should reside.
  location?: string;
}
export class ConnectionProfile extends DS_Resource {
  // Output only. The timestamp when the resource was created. A timestamp in RFC3339 UTC 'Zulu' format, accurate to nanoseconds. Example: '2014-10-02T15:01:23.045123456Z'.
  public createTime?: string;

  /*
Output only. The error details in case of state FAILED.
Structure is documented below.
*/
  public errors?: Array<databasemigrationservice_ConnectionProfileError>;

  // The current connection profile state.
  public state?: string;

  /*
The ID of the connection profile.


- - -
*/
  public connectionProfileId?: string;

  // The connection profile display name.
  public displayName?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
Specifies connection parameters required specifically for Oracle databases.
Structure is documented below.
*/
  public oracle?: databasemigrationservice_ConnectionProfileOracle;

  /*
Specifies connection parameters required specifically for PostgreSQL databases.
Structure is documented below.
*/
  public postgresql?: databasemigrationservice_ConnectionProfilePostgresql;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
Specifies required connection parameters, and, optionally, the parameters required to create a Cloud SQL destination database instance.
Structure is documented below.
*/
  public cloudsql?: databasemigrationservice_ConnectionProfileCloudsql;

  // The location where the connection profile should reside.
  public location?: string;

  // The name of this connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{connectionProfile}.
  public name?: string;

  /*
Specifies required connection parameters, and the parameters required to create an AlloyDB destination cluster.
Structure is documented below.
*/
  public alloydb?: databasemigrationservice_ConnectionProfileAlloydb;

  // The database provider.
  public dbprovider?: string;

  /*
The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
Specifies connection parameters required specifically for MySQL databases.
Structure is documented below.
*/
  public mysql?: databasemigrationservice_ConnectionProfileMysql;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "mysql",
        "Specifies connection parameters required specifically for MySQL databases.\nStructure is documented below.",
        () => databasemigrationservice_ConnectionProfileMysql_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "postgresql",
        "Specifies connection parameters required specifically for PostgreSQL databases.\nStructure is documented below.",
        () => databasemigrationservice_ConnectionProfilePostgresql_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "alloydb",
        "Specifies required connection parameters, and the parameters required to create an AlloyDB destination cluster.\nStructure is documented below.",
        () => databasemigrationservice_ConnectionProfileAlloydb_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "connectionProfileId",
        "The ID of the connection profile.\n\n\n- - -",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "The connection profile display name.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location where the connection profile should reside.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "oracle",
        "Specifies connection parameters required specifically for Oracle databases.\nStructure is documented below.",
        () => databasemigrationservice_ConnectionProfileOracle_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "cloudsql",
        "Specifies required connection parameters, and, optionally, the parameters required to create a Cloud SQL destination database instance.\nStructure is documented below.",
        () => databasemigrationservice_ConnectionProfileCloudsql_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
