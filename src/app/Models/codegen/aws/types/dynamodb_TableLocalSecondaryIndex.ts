import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dynamodb_TableLocalSecondaryIndex {
  // Name of the index
  name?: string;

  // Only required with `INCLUDE` as a projection type; a list of attributes to project into the index. These do not need to be defined as attributes on the table.
  nonKeyAttributes?: Array<string>;

  // One of `ALL`, `INCLUDE` or `KEYS_ONLY` where `ALL` projects every attribute into the index, `KEYS_ONLY` projects  into the index only the table and index hash_key and sort_key attributes ,  `INCLUDE` projects into the index all of the attributes that are defined in `non_key_attributes` in addition to the attributes that that`KEYS_ONLY` project.
  projectionType?: string;

  // Name of the range key.
  rangeKey?: string;
}

export function dynamodb_TableLocalSecondaryIndex_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "rangeKey",
      "Name of the range key.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the index",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "nonKeyAttributes",
      "Only required with `INCLUDE` as a projection type; a list of attributes to project into the index. These do not need to be defined as attributes on the table.",
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "projectionType",
      "One of `ALL`, `INCLUDE` or `KEYS_ONLY` where `ALL` projects every attribute into the index, `KEYS_ONLY` projects  into the index only the table and index hash_key and sort_key attributes ,  `INCLUDE` projects into the index all of the attributes that are defined in `non_key_attributes` in addition to the attributes that that`KEYS_ONLY` project.",
      () => [],
      true,
      true,
    ),
  ];
}
