import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface verifiedpermissions_SchemaDefinition {
  // A JSON string representation of the schema.
  value?: string;
}

export function verifiedpermissions_SchemaDefinition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      "A JSON string representation of the schema.",
      () => [],
      true,
      false,
    ),
  ];
}
