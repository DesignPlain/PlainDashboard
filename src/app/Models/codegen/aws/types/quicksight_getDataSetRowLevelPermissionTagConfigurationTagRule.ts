import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface quicksight_getDataSetRowLevelPermissionTagConfigurationTagRule {
  //
  matchAllValue?: string;

  //
  tagKey?: string;

  //
  tagMultiValueDelimiter?: string;

  //
  columnName?: string;
}

export function quicksight_getDataSetRowLevelPermissionTagConfigurationTagRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "tagMultiValueDelimiter",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "columnName",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "matchAllValue",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "tagKey", "", () => [], true, false),
  ];
}
