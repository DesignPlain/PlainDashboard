import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  biglake_DatabaseHiveOptions,
  biglake_DatabaseHiveOptions_GetTypes,
} from '../types/biglake_DatabaseHiveOptions';

export interface DatabaseArgs {
  // The parent catalog.
  catalog?: string;

  /*
Options of a Hive database.
Structure is documented below.
*/
  hiveOptions?: biglake_DatabaseHiveOptions;

  // The name of the database.
  name?: string;

  // The database type.
  type?: string;
}
export class Database extends DS_Resource {
  /*
Output only. The deletion time of the database. Only set after the
database is deleted. A timestamp in RFC3339 UTC "Zulu" format, with
nanosecond resolution and up to nine fractional digits. Examples:
"2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public deleteTime?: string;

  /*
Output only. The time when this database is considered expired. Only set
after the database is deleted. A timestamp in RFC3339 UTC "Zulu" format,
with nanosecond resolution and up to nine fractional digits. Examples:
"2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public expireTime?: string;

  /*
Options of a Hive database.
Structure is documented below.
*/
  public hiveOptions?: biglake_DatabaseHiveOptions;

  // The name of the database.
  public name?: string;

  // The database type.
  public type?: string;

  /*
Output only. The last modification time of the database. A timestamp in
RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
fractional digits. Examples: "2014-10-02T15:01:23Z" and
"2014-10-02T15:01:23.045123456Z".
*/
  public updateTime?: string;

  // The parent catalog.
  public catalog?: string;

  /*
Output only. The creation time of the database. A timestamp in RFC3339
UTC "Zulu" format, with nanosecond resolution and up to nine fractional
digits. Examples: "2014-10-02T15:01:23Z" and
"2014-10-02T15:01:23.045123456Z".
*/
  public createTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the database.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'type',
        'The database type.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'catalog',
        'The parent catalog.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'hiveOptions',
        'Options of a Hive database.\nStructure is documented below.',
        () => biglake_DatabaseHiveOptions_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
