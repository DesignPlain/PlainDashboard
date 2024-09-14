import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  timestreamwrite_TableMagneticStoreWriteProperties,
  timestreamwrite_TableMagneticStoreWriteProperties_GetTypes,
} from "../types/timestreamwrite_TableMagneticStoreWriteProperties";
import {
  timestreamwrite_TableRetentionProperties,
  timestreamwrite_TableRetentionProperties_GetTypes,
} from "../types/timestreamwrite_TableRetentionProperties";
import {
  timestreamwrite_TableSchema,
  timestreamwrite_TableSchema_GetTypes,
} from "../types/timestreamwrite_TableSchema";

export interface TableArgs {
  // The name of the Timestream database.
  databaseName?: string;

  // Contains properties to set on the table when enabling magnetic store writes. See Magnetic Store Write Properties below for more details.
  magneticStoreWriteProperties?: timestreamwrite_TableMagneticStoreWriteProperties;

  // The retention duration for the memory store and magnetic store. See Retention Properties below for more details. If not provided, `magnetic_store_retention_period_in_days` default to 73000 and `memory_store_retention_period_in_hours` defaults to 6.
  retentionProperties?: timestreamwrite_TableRetentionProperties;

  // The schema of the table. See Schema below for more details.
  schema?: timestreamwrite_TableSchema;

  // The name of the Timestream table.
  tableName?: string;

  // Map of tags to assign to this resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Table extends DS_Resource {
  // The retention duration for the memory store and magnetic store. See Retention Properties below for more details. If not provided, `magnetic_store_retention_period_in_days` default to 73000 and `memory_store_retention_period_in_hours` defaults to 6.
  public retentionProperties?: timestreamwrite_TableRetentionProperties;

  // The schema of the table. See Schema below for more details.
  public schema?: timestreamwrite_TableSchema;

  // The name of the Timestream table.
  public tableName?: string;

  // Map of tags to assign to this resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN that uniquely identifies this table.
  public arn?: string;

  // The name of the Timestream database.
  public databaseName?: string;

  // Contains properties to set on the table when enabling magnetic store writes. See Magnetic Store Write Properties below for more details.
  public magneticStoreWriteProperties?: timestreamwrite_TableMagneticStoreWriteProperties;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "databaseName",
        "The name of the Timestream database.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "magneticStoreWriteProperties",
        "Contains properties to set on the table when enabling magnetic store writes. See Magnetic Store Write Properties below for more details.",
        () => timestreamwrite_TableMagneticStoreWriteProperties_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "retentionProperties",
        "The retention duration for the memory store and magnetic store. See Retention Properties below for more details. If not provided, `magnetic_store_retention_period_in_days` default to 73000 and `memory_store_retention_period_in_hours` defaults to 6.",
        () => timestreamwrite_TableRetentionProperties_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "schema",
        "The schema of the table. See Schema below for more details.",
        () => timestreamwrite_TableSchema_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "tableName",
        "The name of the Timestream table.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to this resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
