import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  bigtable_TableColumnFamily,
  bigtable_TableColumnFamily_GetTypes,
} from "../types/bigtable_TableColumnFamily";

export interface TableArgs {
  /*
Duration to retain change stream data for the table. Set to 0 to disable. Must be between 1 and 7 days.

-----
*/
  changeStreamRetention?: string;

  // A group of columns within a table which share a common configuration. This can be specified multiple times. Structure is documented below.
  columnFamilies?: Array<bigtable_TableColumnFamily>;

  // A field to make the table protected against data loss i.e. when set to PROTECTED, deleting the table, the column families in the table, and the instance containing the table would be prohibited. If not provided, deletion protection will be set to UNPROTECTED.
  deletionProtection?: string;

  // The name of the Bigtable instance.
  instanceName?: string;

  // The name of the table. Must be 1-50 characters and must only contain hyphens, underscores, periods, letters and numbers.
  name?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  project?: string;

  /*
A list of predefined keys to split the table on.
!> --Warning:-- Modifying the `split_keys` of an existing table will cause the provider
to delete/recreate the entire `gcp.bigtable.Table` resource.
*/
  splitKeys?: Array<string>;
}
export class Table extends Resource {
  // A field to make the table protected against data loss i.e. when set to PROTECTED, deleting the table, the column families in the table, and the instance containing the table would be prohibited. If not provided, deletion protection will be set to UNPROTECTED.
  public deletionProtection?: string;

  // The name of the Bigtable instance.
  public instanceName?: string;

  // The name of the table. Must be 1-50 characters and must only contain hyphens, underscores, periods, letters and numbers.
  public name?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public project?: string;

  /*
A list of predefined keys to split the table on.
!> --Warning:-- Modifying the `split_keys` of an existing table will cause the provider
to delete/recreate the entire `gcp.bigtable.Table` resource.
*/
  public splitKeys?: Array<string>;

  /*
Duration to retain change stream data for the table. Set to 0 to disable. Must be between 1 and 7 days.

-----
*/
  public changeStreamRetention?: string;

  // A group of columns within a table which share a common configuration. This can be specified multiple times. Structure is documented below.
  public columnFamilies?: Array<bigtable_TableColumnFamily>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the table. Must be 1-50 characters and must only contain hyphens, underscores, periods, letters and numbers.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "splitKeys",
        "A list of predefined keys to split the table on.\n!> **Warning:** Modifying the `split_keys` of an existing table will cause the provider\nto delete/recreate the entire `gcp.bigtable.Table` resource.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "changeStreamRetention",
        "Duration to retain change stream data for the table. Set to 0 to disable. Must be between 1 and 7 days.\n\n-----",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "columnFamilies",
        "A group of columns within a table which share a common configuration. This can be specified multiple times. Structure is documented below.",
        bigtable_TableColumnFamily_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "deletionProtection",
        "A field to make the table protected against data loss i.e. when set to PROTECTED, deleting the table, the column families in the table, and the instance containing the table would be prohibited. If not provided, deletion protection will be set to UNPROTECTED.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceName",
        "The name of the Bigtable instance.",
        [],
        true,
        true,
      ),
    ];
  }
}
