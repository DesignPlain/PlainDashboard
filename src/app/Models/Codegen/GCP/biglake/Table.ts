import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { TableHiveOptions } from "../types/TableHiveOptions";

export interface TableArgs {
  /*
Options of a Hive table.
Structure is documented below.
*/
  HiveOptions?: TableHiveOptions;

  /*
Output only. The name of the Table. Format:
projects/{project_id_or_number}/locations/{locationId}/catalogs/{catalogId}/databases/{databaseId}/tables/{tableId}


- - -
*/
  Name?: string;

  /*
The database type.
Possible values are: `HIVE`.
*/
  Type?: string;

  // The id of the parent database.
  Database?: string;
}
export class Table extends Resource {
  /*
Output only. The deletion time of the table. Only set after the
table is deleted. A timestamp in RFC3339 UTC "Zulu" format, with
nanosecond resolution and up to nine fractional digits. Examples:
"2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public DeleteTime?: string;

  /*
Output only. The time when this table is considered expired. Only set
after the table is deleted. A timestamp in RFC3339 UTC "Zulu" format,
with nanosecond resolution and up to nine fractional digits. Examples:
"2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public ExpireTime?: string;

  /*
Options of a Hive table.
Structure is documented below.
*/
  public HiveOptions?: TableHiveOptions;

  /*
Output only. The name of the Table. Format:
projects/{project_id_or_number}/locations/{locationId}/catalogs/{catalogId}/databases/{databaseId}/tables/{tableId}


- - -
*/
  public Name?: string;

  /*
The database type.
Possible values are: `HIVE`.
*/
  public Type?: string;

  /*
Output only. The last modification time of the table. A timestamp in
RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
fractional digits. Examples: "2014-10-02T15:01:23Z" and
"2014-10-02T15:01:23.045123456Z".
*/
  public UpdateTime?: string;

  /*
Output only. The creation time of the table. A timestamp in RFC3339 UTC
"Zulu" format, with nanosecond resolution and up to nine fractional
digits. Examples: "2014-10-02T15:01:23Z" and
"2014-10-02T15:01:23.045123456Z".
*/
  public CreateTime?: string;

  // The id of the parent database.
  public Database?: string;

  /*
The checksum of a table object computed by the server based on the value
of other fields. It may be sent on update requests to ensure the client
has an up-to-date value before proceeding. It is only checked for update
table operations.
*/
  public Etag?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "HiveOptions",
        "Options of a Hive table.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Output only. The name of the Table. Format:\nprojects/{project_id_or_number}/locations/{locationId}/catalogs/{catalogId}/databases/{databaseId}/tables/{tableId}\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "The database type.\nPossible values are: `HIVE`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Database",
        "The id of the parent database.",
      ),
    ];
  }
}
