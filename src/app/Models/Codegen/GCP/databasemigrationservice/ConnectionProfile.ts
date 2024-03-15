import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ConnectionProfileMysql } from "../types/ConnectionProfileMysql";
import { ConnectionProfileOracle } from "../types/ConnectionProfileOracle";
import { ConnectionProfilePostgresql } from "../types/ConnectionProfilePostgresql";
import { ConnectionProfileAlloydb } from "../types/ConnectionProfileAlloydb";
import { ConnectionProfileError } from "../types/ConnectionProfileError";
import { ConnectionProfileCloudsql } from "../types/ConnectionProfileCloudsql";

export interface ConnectionProfileArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Specifies required connection parameters, and, optionally, the parameters required to create a Cloud SQL destination database instance.
Structure is documented below.
*/
  Cloudsql?: ConnectionProfileCloudsql;

  /*
The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
Specifies connection parameters required specifically for MySQL databases.
Structure is documented below.
*/
  Mysql?: ConnectionProfileMysql;

  /*
Specifies connection parameters required specifically for Oracle databases.
Structure is documented below.
*/
  Oracle?: ConnectionProfileOracle;

  /*
Specifies connection parameters required specifically for PostgreSQL databases.
Structure is documented below.
*/
  Postgresql?: ConnectionProfilePostgresql;

  /*
Specifies required connection parameters, and the parameters required to create an AlloyDB destination cluster.
Structure is documented below.
*/
  Alloydb?: ConnectionProfileAlloydb;

  /*
The ID of the connection profile.


- - -
*/
  ConnectionProfileId?: string;

  // The connection profile display name.
  DisplayName?: string;

  // The location where the connection profile should reside.
  Location?: string;
}
export class ConnectionProfile extends Resource {
  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Specifies connection parameters required specifically for MySQL databases.
Structure is documented below.
*/
  public Mysql?: ConnectionProfileMysql;

  // The name of this connection profile resource in the form of projects/{project}/locations/{location}/connectionProfiles/{connectionProfile}.
  public Name?: string;

  /*
Specifies connection parameters required specifically for Oracle databases.
Structure is documented below.
*/
  public Oracle?: ConnectionProfileOracle;

  /*
Specifies connection parameters required specifically for PostgreSQL databases.
Structure is documented below.
*/
  public Postgresql?: ConnectionProfilePostgresql;

  /*
Specifies required connection parameters, and the parameters required to create an AlloyDB destination cluster.
Structure is documented below.
*/
  public Alloydb?: ConnectionProfileAlloydb;

  /*
Specifies required connection parameters, and, optionally, the parameters required to create a Cloud SQL destination database instance.
Structure is documented below.
*/
  public Cloudsql?: ConnectionProfileCloudsql;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // The current connection profile state.
  public State?: string;

  // Output only. The timestamp when the resource was created. A timestamp in RFC3339 UTC 'Zulu' format, accurate to nanoseconds. Example: '2014-10-02T15:01:23.045123456Z'.
  public CreateTime?: string;

  // The database provider.
  public Dbprovider?: string;

  // The connection profile display name.
  public DisplayName?: string;

  // The location where the connection profile should reside.
  public Location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The ID of the connection profile.


- - -
*/
  public ConnectionProfileId?: string;

  /*
Output only. The error details in case of state FAILED.
Structure is documented below.
*/
  public Errors?: Array<ConnectionProfileError>;

  /*
The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Postgresql",
        "Specifies connection parameters required specifically for PostgreSQL databases.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Alloydb",
        "Specifies required connection parameters, and the parameters required to create an AlloyDB destination cluster.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The connection profile display name.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location where the connection profile should reside.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Mysql",
        "Specifies connection parameters required specifically for MySQL databases.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Oracle",
        "Specifies connection parameters required specifically for Oracle databases.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Cloudsql",
        "Specifies required connection parameters, and, optionally, the parameters required to create a Cloud SQL destination database instance.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ConnectionProfileId",
        "The ID of the connection profile.\n\n\n- - -",
      ),
    ];
  }
}
