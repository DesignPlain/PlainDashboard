import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dynamodb_getTableLocalSecondaryIndex {
  // Name of the DynamoDB table.
  name?: string;

  //
  nonKeyAttributes?: Array<string>;

  //
  projectionType?: string;

  //
  rangeKey?: string;
}

export function dynamodb_getTableLocalSecondaryIndex_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the DynamoDB table.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "nonKeyAttributes",
      "",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "projectionType",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "rangeKey", "", () => [], true, false),
  ];
}
