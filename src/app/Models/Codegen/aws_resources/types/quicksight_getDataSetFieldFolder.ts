import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface quicksight_getDataSetFieldFolder {
  //
  columns?: Array<string>;

  //
  description?: string;

  //
  fieldFoldersId?: string;
}

export function quicksight_getDataSetFieldFolder_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "columns",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "description", "", [], true, false),
    new DynamicUIProps(InputType.String, "fieldFoldersId", "", [], true, false),
  ];
}
