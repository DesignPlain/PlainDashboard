import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface quicksight_getDataSetFieldFolder {
  //
  fieldFoldersId?: string;

  //
  columns?: Array<string>;

  //
  description?: string;
}

export function quicksight_getDataSetFieldFolder_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "fieldFoldersId",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "columns",
      "",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
