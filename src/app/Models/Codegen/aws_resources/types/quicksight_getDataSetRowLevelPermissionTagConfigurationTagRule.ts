import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface quicksight_getDataSetRowLevelPermissionTagConfigurationTagRule {
  //
  tagMultiValueDelimiter?: string;

  //
  columnName?: string;

  //
  matchAllValue?: string;

  //
  tagKey?: string;
}

export function quicksight_getDataSetRowLevelPermissionTagConfigurationTagRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "tagMultiValueDelimiter",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "columnName", "", [], true, false),
    new DynamicUIProps(InputType.String, "matchAllValue", "", [], true, false),
    new DynamicUIProps(InputType.String, "tagKey", "", [], true, false),
  ];
}
