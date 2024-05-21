import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  biglake_TableHiveOptions,
  biglake_TableHiveOptions_GetTypes,
} from "../types/biglake_TableHiveOptions";

export interface TableArgs {
  // The id of the parent database.
  database?: string;

  /*
Options of a Hive table.
Structure is documented below.
*/
  hiveOptions?: biglake_TableHiveOptions;

  /*
Output only. The name of the Table. Format:
projects/{project_id_or_number}/locations/{locationId}/catalogs/{catalogId}/databases/{databaseId}/tables/{tableId}


- - -
*/
  name?: string;

  /*
The database type.
Possible values are: `HIVE`.
*/
  type?: string;
}
export class Table extends Resource {
  /*
Output only. The deletion time of the table. Only set after the
table is deleted. A timestamp in RFC3339 UTC "Zulu" format, with
nanosecond resolution and up to nine fractional digits. Examples:
"2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public deleteTime?: string;

  /*
The checksum of a table object computed by the server based on the value
of other fields. It may be sent on update requests to ensure the client
has an up-to-date value before proceeding. It is only checked for update
table operations.
*/
  public etag?: string;

  /*
Options of a Hive table.
Structure is documented below.
*/
  public hiveOptions?: biglake_TableHiveOptions;

  /*
The database type.
Possible values are: `HIVE`.
*/
  public type?: string;

  /*
Output only. The creation time of the table. A timestamp in RFC3339 UTC
"Zulu" format, with nanosecond resolution and up to nine fractional
digits. Examples: "2014-10-02T15:01:23Z" and
"2014-10-02T15:01:23.045123456Z".
*/
  public createTime?: string;

  // The id of the parent database.
  public database?: string;

  /*
Output only. The time when this table is considered expired. Only set
after the table is deleted. A timestamp in RFC3339 UTC "Zulu" format,
with nanosecond resolution and up to nine fractional digits. Examples:
"2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public expireTime?: string;

  /*
Output only. The name of the Table. Format:
projects/{project_id_or_number}/locations/{locationId}/catalogs/{catalogId}/databases/{databaseId}/tables/{tableId}


- - -
*/
  public name?: string;

  /*
Output only. The last modification time of the table. A timestamp in
RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
fractional digits. Examples: "2014-10-02T15:01:23Z" and
"2014-10-02T15:01:23.045123456Z".
*/
  public updateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "database",
        "The id of the parent database.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "hiveOptions",
        "Options of a Hive table.\nStructure is documented below.",
        biglake_TableHiveOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Output only. The name of the Table. Format:\nprojects/{project_id_or_number}/locations/{locationId}/catalogs/{catalogId}/databases/{databaseId}/tables/{tableId}\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "The database type.\nPossible values are: `HIVE`.",
        [],
        false,
        false,
      ),
    ];
  }
}
