import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dynamodb_getTableTtl {
  //
  attributeName?: string;

  //
  enabled?: boolean;
}

export function dynamodb_getTableTtl_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "attributeName",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.Bool, "enabled", "", () => [], true, false),
  ];
}
