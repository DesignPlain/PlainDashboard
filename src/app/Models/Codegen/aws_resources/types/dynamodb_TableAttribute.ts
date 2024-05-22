import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dynamodb_TableAttribute {
  // Name of the attribute
  name?: string;

  // Attribute type. Valid values are `S` (string), `N` (number), `B` (binary).
  type?: string;
}

export function dynamodb_TableAttribute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the attribute",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Attribute type. Valid values are `S` (string), `N` (number), `B` (binary).",
      [],
      true,
      false,
    ),
  ];
}
