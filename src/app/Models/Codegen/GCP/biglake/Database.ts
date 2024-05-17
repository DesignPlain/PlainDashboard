import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Biglake_DatabaseHiveOptions,
  Biglake_DatabaseHiveOptions_GetTypes,
} from "../types/Biglake_DatabaseHiveOptions";

export interface DatabaseArgs {
  // The parent catalog.
  Catalog?: string;

  /*
Options of a Hive database.
Structure is documented below.
*/
  HiveOptions?: Biglake_DatabaseHiveOptions;

  // The name of the database.
  Name?: string;

  // The database type.
  Type?: string;
}
export class Database extends Resource {
  /*
Options of a Hive database.
Structure is documented below.
*/
  public HiveOptions?: Biglake_DatabaseHiveOptions;

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

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Catalog",
        "The parent catalog.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "HiveOptions",
        "Options of a Hive database.\nStructure is documented below.",
        Biglake_DatabaseHiveOptions_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the database.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "The database type.",
        [],
        true,
        false,
      ),
    ];
  }
}
