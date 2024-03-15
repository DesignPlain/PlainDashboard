import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { TableColumnFamily } from "../types/TableColumnFamily";

export interface TableArgs {
  // A field to make the table protected against data loss i.e. when set to PROTECTED, deleting the table, the column families in the table, and the instance containing the table would be prohibited. If not provided, deletion protection will be set to UNPROTECTED.
  DeletionProtection?: string;

  // The name of the Bigtable instance.
  InstanceName?: string;

  // The name of the table. Must be 1-50 characters and must only contain hyphens, underscores, periods, letters and numbers.
  Name?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  Project?: string;

  /*
A list of predefined keys to split the table on.
!> --Warning:-- Modifying the `split_keys` of an existing table will cause the provider
to delete/recreate the entire `gcp.bigtable.Table` resource.
*/
  SplitKeys?: Array<string>;

  /*
Duration to retain change stream data for the table. Set to 0 to disable. Must be between 1 and 7 days.

-----
*/
  ChangeStreamRetention?: string;

  // A group of columns within a table which share a common configuration. This can be specified multiple times. Structure is documented below.
  ColumnFamilies?: Array<TableColumnFamily>;
}
export class Table extends Resource {
  /*
Duration to retain change stream data for the table. Set to 0 to disable. Must be between 1 and 7 days.

-----
*/
  public ChangeStreamRetention?: string;

  // A group of columns within a table which share a common configuration. This can be specified multiple times. Structure is documented below.
  public ColumnFamilies?: Array<TableColumnFamily>;

  // A field to make the table protected against data loss i.e. when set to PROTECTED, deleting the table, the column families in the table, and the instance containing the table would be prohibited. If not provided, deletion protection will be set to UNPROTECTED.
  public DeletionProtection?: string;

  // The name of the Bigtable instance.
  public InstanceName?: string;

  // The name of the table. Must be 1-50 characters and must only contain hyphens, underscores, periods, letters and numbers.
  public Name?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public Project?: string;

  /*
A list of predefined keys to split the table on.
!> --Warning:-- Modifying the `split_keys` of an existing table will cause the provider
to delete/recreate the entire `gcp.bigtable.Table` resource.
*/
  public SplitKeys?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DeletionProtection",
        "A field to make the table protected against data loss i.e. when set to PROTECTED, deleting the table, the column families in the table, and the instance containing the table would be prohibited. If not provided, deletion protection will be set to UNPROTECTED.",
      ),
      new DynamicUIProps(
        InputType.String,
        "InstanceName",
        "The name of the Bigtable instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the table. Must be 1-50 characters and must only contain hyphens, underscores, periods, letters and numbers.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "SplitKeys",
        "A list of predefined keys to split the table on.\n!> **Warning:** Modifying the `split_keys` of an existing table will cause the provider\nto delete/recreate the entire `gcp.bigtable.Table` resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ChangeStreamRetention",
        "Duration to retain change stream data for the table. Set to 0 to disable. Must be between 1 and 7 days.\n\n-----",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "ColumnFamilies",
        "A group of columns within a table which share a common configuration. This can be specified multiple times. Structure is documented below.",
      ),
    ];
  }
}
