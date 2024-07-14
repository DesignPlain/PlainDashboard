import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface quicksight_DataSetOutputColumn {
  // Display name for the dataset.
  name?: string;

  // Data type of the column.
  type?: string;

  // Field folder description.
  description?: string;
}

export function quicksight_DataSetOutputColumn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Display name for the dataset.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Data type of the column.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "Field folder description.",
      [],
      false,
      false,
    ),
  ];
}
