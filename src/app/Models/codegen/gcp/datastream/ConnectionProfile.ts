import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  datastream_ConnectionProfileForwardSshConnectivity,
  datastream_ConnectionProfileForwardSshConnectivity_GetTypes,
} from '../types/datastream_ConnectionProfileForwardSshConnectivity';
import {
  datastream_ConnectionProfileOracleProfile,
  datastream_ConnectionProfileOracleProfile_GetTypes,
} from '../types/datastream_ConnectionProfileOracleProfile';
import {
  datastream_ConnectionProfileGcsProfile,
  datastream_ConnectionProfileGcsProfile_GetTypes,
} from '../types/datastream_ConnectionProfileGcsProfile';
import {
  datastream_ConnectionProfileMysqlProfile,
  datastream_ConnectionProfileMysqlProfile_GetTypes,
} from '../types/datastream_ConnectionProfileMysqlProfile';
import {
  datastream_ConnectionProfilePostgresqlProfile,
  datastream_ConnectionProfilePostgresqlProfile_GetTypes,
} from '../types/datastream_ConnectionProfilePostgresqlProfile';
import {
  datastream_ConnectionProfilePrivateConnectivity,
  datastream_ConnectionProfilePrivateConnectivity_GetTypes,
} from '../types/datastream_ConnectionProfilePrivateConnectivity';
import {
  datastream_ConnectionProfileBigqueryProfile,
  datastream_ConnectionProfileBigqueryProfile_GetTypes,
} from '../types/datastream_ConnectionProfileBigqueryProfile';

export interface ConnectionProfileArgs {
  // Display name.
  displayName?: string;

  /*
Cloud Storage bucket profile.
Structure is documented below.
*/
  gcsProfile?: datastream_ConnectionProfileGcsProfile;

  /*
The name of the location this connection profile is located in.


- - -
*/
  location?: string;

  /*
MySQL database profile.
Structure is documented below.
*/
  mysqlProfile?: datastream_ConnectionProfileMysqlProfile;

  /*
PostgreSQL database profile.
Structure is documented below.
*/
  postgresqlProfile?: datastream_ConnectionProfilePostgresqlProfile;

  /*
Private connectivity.
Structure is documented below.
*/
  privateConnectivity?: datastream_ConnectionProfilePrivateConnectivity;

  // BigQuery warehouse profile.
  bigqueryProfile?: datastream_ConnectionProfileBigqueryProfile;

  // The connection profile identifier.
  connectionProfileId?: string;

  /*
Forward SSH tunnel connectivity.
Structure is documented below.
*/
  forwardSshConnectivity?: datastream_ConnectionProfileForwardSshConnectivity;

  /*
Labels.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
Oracle database profile.
Structure is documented below.
*/
  oracleProfile?: datastream_ConnectionProfileOracleProfile;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class ConnectionProfile extends DS_Resource {
  /*
Private connectivity.
Structure is documented below.
*/
  public privateConnectivity?: datastream_ConnectionProfilePrivateConnectivity;

  /*
MySQL database profile.
Structure is documented below.
*/
  public mysqlProfile?: datastream_ConnectionProfileMysqlProfile;

  /*
Forward SSH tunnel connectivity.
Structure is documented below.
*/
  public forwardSshConnectivity?: datastream_ConnectionProfileForwardSshConnectivity;

  // The resource's name.
  public name?: string;

  /*
PostgreSQL database profile.
Structure is documented below.
*/
  public postgresqlProfile?: datastream_ConnectionProfilePostgresqlProfile;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // BigQuery warehouse profile.
  public bigqueryProfile?: datastream_ConnectionProfileBigqueryProfile;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
Cloud Storage bucket profile.
Structure is documented below.
*/
  public gcsProfile?: datastream_ConnectionProfileGcsProfile;

  /*
The name of the location this connection profile is located in.


- - -
*/
  public location?: string;

  /*
Oracle database profile.
Structure is documented below.
*/
  public oracleProfile?: datastream_ConnectionProfileOracleProfile;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // The connection profile identifier.
  public connectionProfileId?: string;

  /*
Labels.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // Display name.
  public displayName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'displayName',
        'Display name.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'gcsProfile',
        'Cloud Storage bucket profile.\nStructure is documented below.',
        () => datastream_ConnectionProfileGcsProfile_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'location',
        'The name of the location this connection profile is located in.\n\n\n- - -',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'mysqlProfile',
        'MySQL database profile.\nStructure is documented below.',
        () => datastream_ConnectionProfileMysqlProfile_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'forwardSshConnectivity',
        'Forward SSH tunnel connectivity.\nStructure is documented below.',
        () => datastream_ConnectionProfileForwardSshConnectivity_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'postgresqlProfile',
        'PostgreSQL database profile.\nStructure is documented below.',
        () => datastream_ConnectionProfilePostgresqlProfile_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'privateConnectivity',
        'Private connectivity.\nStructure is documented below.',
        () => datastream_ConnectionProfilePrivateConnectivity_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'bigqueryProfile',
        'BigQuery warehouse profile.',
        () => datastream_ConnectionProfileBigqueryProfile_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'connectionProfileId',
        'The connection profile identifier.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'labels',
        'Labels.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'oracleProfile',
        'Oracle database profile.\nStructure is documented below.',
        () => datastream_ConnectionProfileOracleProfile_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
