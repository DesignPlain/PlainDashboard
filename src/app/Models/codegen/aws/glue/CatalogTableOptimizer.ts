import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  glue_CatalogTableOptimizerConfiguration,
  glue_CatalogTableOptimizerConfiguration_GetTypes,
} from "../types/glue_CatalogTableOptimizerConfiguration";

export interface CatalogTableOptimizerArgs {
  // The Catalog ID of the table.
  catalogId?: string;

  // A configuration block that defines the table optimizer settings. The block contains:
  configuration?: glue_CatalogTableOptimizerConfiguration;

  // The name of the database in the catalog in which the table resides.
  databaseName?: string;

  // The name of the table.
  tableName?: string;

  // The type of table optimizer. Currently, the only valid value is compaction.
  type?: string;
}
export class CatalogTableOptimizer extends DS_Resource {
  // The name of the table.
  public tableName?: string;

  // The type of table optimizer. Currently, the only valid value is compaction.
  public type?: string;

  // The Catalog ID of the table.
  public catalogId?: string;

  // A configuration block that defines the table optimizer settings. The block contains:
  public configuration?: glue_CatalogTableOptimizerConfiguration;

  // The name of the database in the catalog in which the table resides.
  public databaseName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "catalogId",
        "The Catalog ID of the table.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "configuration",
        "A configuration block that defines the table optimizer settings. The block contains:",
        () => glue_CatalogTableOptimizerConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "databaseName",
        "The name of the database in the catalog in which the table resides.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "tableName",
        "The name of the table.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "The type of table optimizer. Currently, the only valid value is compaction.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
