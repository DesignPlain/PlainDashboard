import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { DatabaseHiveOptions } from "../types/DatabaseHiveOptions";

export interface DatabaseArgs {
  /*
Options of a Hive database.
Structure is documented below.
*/
  HiveOptions?: DatabaseHiveOptions;

  // The name of the database.
  Name?: string;

  // The database type.
  Type?: string;

  // The parent catalog.
  Catalog?: string;
}
export class Database extends Resource {
  /*
Output only. The deletion time of the database. Only set after the
database is deleted. A timestamp in RFC3339 UTC "Zulu" format, with
nanosecond resolution and up to nine fractional digits. Examples:
"2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public DeleteTime?: string;

  /*
Output only. The time when this database is considered expired. Only set
after the database is deleted. A timestamp in RFC3339 UTC "Zulu" format,
with nanosecond resolution and up to nine fractional digits. Examples:
"2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public ExpireTime?: string;

  /*
Options of a Hive database.
Structure is documented below.
*/
  public HiveOptions?: DatabaseHiveOptions;

  // The name of the database.
  public Name?: string;

  // The database type.
  public Type?: string;

  /*
Output only. The last modification time of the database. A timestamp in
RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
fractional digits. Examples: "2014-10-02T15:01:23Z" and
"2014-10-02T15:01:23.045123456Z".
*/
  public UpdateTime?: string;

  // The parent catalog.
  public Catalog?: string;

  /*
Output only. The creation time of the database. A timestamp in RFC3339
UTC "Zulu" format, with nanosecond resolution and up to nine fractional
digits. Examples: "2014-10-02T15:01:23Z" and
"2014-10-02T15:01:23.045123456Z".
*/
  public CreateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "HiveOptions",
        "Options of a Hive database.\nStructure is documented below.",
      ),
      new DynamicUIProps(InputType.String, "Name", "The name of the database."),
      new DynamicUIProps(InputType.String, "Type", "The database type."),
      new DynamicUIProps(InputType.String, "Catalog", "The parent catalog."),
    ];
  }
}
