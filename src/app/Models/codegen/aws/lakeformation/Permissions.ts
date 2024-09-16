import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lakeformation_PermissionsLfTag,
  lakeformation_PermissionsLfTag_GetTypes,
} from '../types/lakeformation_PermissionsLfTag';
import {
  lakeformation_PermissionsLfTagPolicy,
  lakeformation_PermissionsLfTagPolicy_GetTypes,
} from '../types/lakeformation_PermissionsLfTagPolicy';
import {
  lakeformation_PermissionsTableWithColumns,
  lakeformation_PermissionsTableWithColumns_GetTypes,
} from '../types/lakeformation_PermissionsTableWithColumns';
import {
  lakeformation_PermissionsTable,
  lakeformation_PermissionsTable_GetTypes,
} from '../types/lakeformation_PermissionsTable';
import {
  lakeformation_PermissionsDataLocation,
  lakeformation_PermissionsDataLocation_GetTypes,
} from '../types/lakeformation_PermissionsDataLocation';
import {
  lakeformation_PermissionsDataCellsFilter,
  lakeformation_PermissionsDataCellsFilter_GetTypes,
} from '../types/lakeformation_PermissionsDataCellsFilter';
import {
  lakeformation_PermissionsDatabase,
  lakeformation_PermissionsDatabase_GetTypes,
} from '../types/lakeformation_PermissionsDatabase';

export interface PermissionsArgs {
  // List of permissions granted to the principal. Valid values may include `ALL`, `ALTER`, `ASSOCIATE`, `CREATE_DATABASE`, `CREATE_TABLE`, `DATA_LOCATION_ACCESS`, `DELETE`, `DESCRIBE`, `DROP`, `INSERT`, and `SELECT`. For details on each permission, see [Lake Formation Permissions Reference](https://docs.aws.amazon.com/lake-formation/latest/dg/lf-permissions-reference.html).
  permissions?: Array<string>;

  // Subset of `permissions` which the principal can pass.
  permissionsWithGrantOptions?: Array<string>;

  // Configuration block for a table resource. Detailed below.
  table?: lakeformation_PermissionsTable;

  // Configuration block for a data location resource. Detailed below.
  dataLocation?: lakeformation_PermissionsDataLocation;

  // Whether the permissions are to be granted for the Data Catalog. Defaults to `false`.
  catalogResource?: boolean;

  // Configuration block for a data cells filter resource. Detailed below.
  dataCellsFilter?: lakeformation_PermissionsDataCellsFilter;

  // Configuration block for a database resource. Detailed below.
  database?: lakeformation_PermissionsDatabase;

  // Configuration block for an LF-tag resource. Detailed below.
  lfTag?: lakeformation_PermissionsLfTag;

  // Configuration block for an LF-tag policy resource. Detailed below.
  lfTagPolicy?: lakeformation_PermissionsLfTagPolicy;

  /*
Principal to be granted the permissions on the resource. Supported principals include `IAM_ALLOWED_PRINCIPALS` (see Default Behavior and `IAMAllowedPrincipals` above), IAM roles, users, groups, SAML groups and users, QuickSight groups, OUs, and organizations as well as AWS account IDs for cross-account permissions. For more information, see [Lake Formation Permissions Reference](https://docs.aws.amazon.com/lake-formation/latest/dg/lf-permissions-reference.html).

> --NOTE:-- We highly recommend that the `principal` _NOT_ be a Lake Formation administrator (granted using `aws.lakeformation.DataLakeSettings`). The entity (e.g., IAM role) running the deployment will most likely need to be a Lake Formation administrator. As such, the entity will have implicit permissions and does not need permissions granted through this resource.

One of the following is required:
*/
  principal?: string;

  /*
Configuration block for a table with columns resource. Detailed below.

The following arguments are optional:
*/
  tableWithColumns?: lakeformation_PermissionsTableWithColumns;

  // Identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
  catalogId?: string;
}
export class Permissions extends DS_Resource {
  // Configuration block for an LF-tag policy resource. Detailed below.
  public lfTagPolicy?: lakeformation_PermissionsLfTagPolicy;

  /*
Principal to be granted the permissions on the resource. Supported principals include `IAM_ALLOWED_PRINCIPALS` (see Default Behavior and `IAMAllowedPrincipals` above), IAM roles, users, groups, SAML groups and users, QuickSight groups, OUs, and organizations as well as AWS account IDs for cross-account permissions. For more information, see [Lake Formation Permissions Reference](https://docs.aws.amazon.com/lake-formation/latest/dg/lf-permissions-reference.html).

> --NOTE:-- We highly recommend that the `principal` _NOT_ be a Lake Formation administrator (granted using `aws.lakeformation.DataLakeSettings`). The entity (e.g., IAM role) running the deployment will most likely need to be a Lake Formation administrator. As such, the entity will have implicit permissions and does not need permissions granted through this resource.

One of the following is required:
*/
  public principal?: string;

  /*
Configuration block for a table with columns resource. Detailed below.

The following arguments are optional:
*/
  public tableWithColumns?: lakeformation_PermissionsTableWithColumns;

  // Identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
  public catalogId?: string;

  // Configuration block for a database resource. Detailed below.
  public database?: lakeformation_PermissionsDatabase;

  // Configuration block for a data location resource. Detailed below.
  public dataLocation?: lakeformation_PermissionsDataLocation;

  // Configuration block for an LF-tag resource. Detailed below.
  public lfTag?: lakeformation_PermissionsLfTag;

  // List of permissions granted to the principal. Valid values may include `ALL`, `ALTER`, `ASSOCIATE`, `CREATE_DATABASE`, `CREATE_TABLE`, `DATA_LOCATION_ACCESS`, `DELETE`, `DESCRIBE`, `DROP`, `INSERT`, and `SELECT`. For details on each permission, see [Lake Formation Permissions Reference](https://docs.aws.amazon.com/lake-formation/latest/dg/lf-permissions-reference.html).
  public permissions?: Array<string>;

  // Subset of `permissions` which the principal can pass.
  public permissionsWithGrantOptions?: Array<string>;

  // Configuration block for a table resource. Detailed below.
  public table?: lakeformation_PermissionsTable;

  // Whether the permissions are to be granted for the Data Catalog. Defaults to `false`.
  public catalogResource?: boolean;

  // Configuration block for a data cells filter resource. Detailed below.
  public dataCellsFilter?: lakeformation_PermissionsDataCellsFilter;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'dataLocation',
        'Configuration block for a data location resource. Detailed below.',
        () => lakeformation_PermissionsDataLocation_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'catalogResource',
        'Whether the permissions are to be granted for the Data Catalog. Defaults to `false`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'dataCellsFilter',
        'Configuration block for a data cells filter resource. Detailed below.',
        () => lakeformation_PermissionsDataCellsFilter_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'database',
        'Configuration block for a database resource. Detailed below.',
        () => lakeformation_PermissionsDatabase_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'principal',
        'Principal to be granted the permissions on the resource. Supported principals include `IAM_ALLOWED_PRINCIPALS` (see Default Behavior and `IAMAllowedPrincipals` above), IAM roles, users, groups, SAML groups and users, QuickSight groups, OUs, and organizations as well as AWS account IDs for cross-account permissions. For more information, see [Lake Formation Permissions Reference](https://docs.aws.amazon.com/lake-formation/latest/dg/lf-permissions-reference.html).\n\n> **NOTE:** We highly recommend that the `principal` _NOT_ be a Lake Formation administrator (granted using `aws.lakeformation.DataLakeSettings`). The entity (e.g., IAM role) running the deployment will most likely need to be a Lake Formation administrator. As such, the entity will have implicit permissions and does not need permissions granted through this resource.\n\nOne of the following is required:',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'tableWithColumns',
        'Configuration block for a table with columns resource. Detailed below.\n\nThe following arguments are optional:',
        () => lakeformation_PermissionsTableWithColumns_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'permissions',
        'List of permissions granted to the principal. Valid values may include `ALL`, `ALTER`, `ASSOCIATE`, `CREATE_DATABASE`, `CREATE_TABLE`, `DATA_LOCATION_ACCESS`, `DELETE`, `DESCRIBE`, `DROP`, `INSERT`, and `SELECT`. For details on each permission, see [Lake Formation Permissions Reference](https://docs.aws.amazon.com/lake-formation/latest/dg/lf-permissions-reference.html).',
        () => InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'table',
        'Configuration block for a table resource. Detailed below.',
        () => lakeformation_PermissionsTable_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'lfTag',
        'Configuration block for an LF-tag resource. Detailed below.',
        () => lakeformation_PermissionsLfTag_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'lfTagPolicy',
        'Configuration block for an LF-tag policy resource. Detailed below.',
        () => lakeformation_PermissionsLfTagPolicy_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'catalogId',
        'Identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'permissionsWithGrantOptions',
        'Subset of `permissions` which the principal can pass.',
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
