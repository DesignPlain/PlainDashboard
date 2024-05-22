import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dynamodb_getTableAttribute {
  // Name of the DynamoDB table.
  name?: string;

  //
  type?: string;
}

export function dynamodb_getTableAttribute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the DynamoDB table.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "type", "", [], true, false),
  ];
}
