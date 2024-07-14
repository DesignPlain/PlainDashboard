import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface glue_MLTransformSchema {
  // The type of data in the column.
  dataType?: string;

  // The name you assign to this ML Transform. It must be unique in your account.
  name?: string;
}

export function glue_MLTransformSchema_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "dataType",
      "The type of data in the column.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name you assign to this ML Transform. It must be unique in your account.",
      [],
      false,
      false,
    ),
  ];
}
