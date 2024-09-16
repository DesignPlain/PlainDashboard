import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lakeformation_ResourceLfTagTimeouts,
  lakeformation_ResourceLfTagTimeouts_GetTypes,
} from '../types/lakeformation_ResourceLfTagTimeouts';
import {
  lakeformation_ResourceLfTagDatabase,
  lakeformation_ResourceLfTagDatabase_GetTypes,
} from '../types/lakeformation_ResourceLfTagDatabase';
import {
  lakeformation_ResourceLfTagLfTag,
  lakeformation_ResourceLfTagLfTag_GetTypes,
} from '../types/lakeformation_ResourceLfTagLfTag';
import {
  lakeformation_ResourceLfTagTable,
  lakeformation_ResourceLfTagTable_GetTypes,
} from '../types/lakeformation_ResourceLfTagTable';
import {
  lakeformation_ResourceLfTagTableWithColumns,
  lakeformation_ResourceLfTagTableWithColumns_GetTypes,
} from '../types/lakeformation_ResourceLfTagTableWithColumns';

export interface ResourceLfTagArgs {
  // Configuration block for a table resource. See Table for more details.
  table?: lakeformation_ResourceLfTagTable;

  /*
Configuration block for a table with columns resource. See Table With Columns for more details.

The following arguments are optional:
*/
  tableWithColumns?: lakeformation_ResourceLfTagTableWithColumns;

  //
  timeouts?: lakeformation_ResourceLfTagTimeouts;

  // Identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
  catalogId?: string;

  // Configuration block for a database resource. See Database for more details.
  database?: lakeformation_ResourceLfTagDatabase;

  /*
Set of LF-tags to attach to the resource. See LF Tag for more details.

Exactly one of the following is required:
*/
  lfTag?: lakeformation_ResourceLfTagLfTag;
}
export class ResourceLfTag extends DS_Resource {
  /*
Configuration block for a table with columns resource. See Table With Columns for more details.

The following arguments are optional:
*/
  public tableWithColumns?: lakeformation_ResourceLfTagTableWithColumns;

  //
  public timeouts?: lakeformation_ResourceLfTagTimeouts;

  // Identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
  public catalogId?: string;

  // Configuration block for a database resource. See Database for more details.
  public database?: lakeformation_ResourceLfTagDatabase;

  /*
Set of LF-tags to attach to the resource. See LF Tag for more details.

Exactly one of the following is required:
*/
  public lfTag?: lakeformation_ResourceLfTagLfTag;

  // Configuration block for a table resource. See Table for more details.
  public table?: lakeformation_ResourceLfTagTable;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'timeouts',
        '',
        () => lakeformation_ResourceLfTagTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'catalogId',
        'Identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'database',
        'Configuration block for a database resource. See Database for more details.',
        () => lakeformation_ResourceLfTagDatabase_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'lfTag',
        'Set of LF-tags to attach to the resource. See LF Tag for more details.\n\nExactly one of the following is required:',
        () => lakeformation_ResourceLfTagLfTag_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'table',
        'Configuration block for a table resource. See Table for more details.',
        () => lakeformation_ResourceLfTagTable_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'tableWithColumns',
        'Configuration block for a table with columns resource. See Table With Columns for more details.\n\nThe following arguments are optional:',
        () => lakeformation_ResourceLfTagTableWithColumns_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
