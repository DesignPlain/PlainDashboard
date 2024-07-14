import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface TableItemArgs {
  // Hash key to use for lookups and identification of the item
  hashKey?: string;

  // JSON representation of a map of attribute name/value pairs, one for each attribute. Only the primary key attributes are required; you can optionally provide other attribute name-value pairs for the item.
  item?: string;

  // Range key to use for lookups and identification of the item. Required if there is range key defined in the table.
  rangeKey?: string;

  // Name of the table to contain the item.
  tableName?: string;
}
export class TableItem extends Resource {
  // Hash key to use for lookups and identification of the item
  public hashKey?: string;

  // JSON representation of a map of attribute name/value pairs, one for each attribute. Only the primary key attributes are required; you can optionally provide other attribute name-value pairs for the item.
  public item?: string;

  // Range key to use for lookups and identification of the item. Required if there is range key defined in the table.
  public rangeKey?: string;

  // Name of the table to contain the item.
  public tableName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "item",
        "JSON representation of a map of attribute name/value pairs, one for each attribute. Only the primary key attributes are required; you can optionally provide other attribute name-value pairs for the item.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "rangeKey",
        "Range key to use for lookups and identification of the item. Required if there is range key defined in the table.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "tableName",
        "Name of the table to contain the item.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "hashKey",
        "Hash key to use for lookups and identification of the item",
        [],
        true,
        true,
      ),
    ];
  }
}
