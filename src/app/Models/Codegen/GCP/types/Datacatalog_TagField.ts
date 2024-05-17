import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Datacatalog_TagField {
  // Holds the value for a tag field with boolean type.
  BoolValue?: boolean;

  /*
(Output)
The display name of this field
*/
  DisplayName?: string;

  // Holds the value for a tag field with double type.
  DoubleValue?: number;

  /*
Holds the value for a tag field with enum type. This value must be one of the allowed values in the definition of this enum.

- - -
*/
  EnumValue?: string;

  // The identifier for this object. Format specified above.
  FieldName?: string;

  /*
(Output)
The order of this field with respect to other fields in this tag. For example, a higher value can indicate
a more important field. The value can be negative. Multiple fields can have the same order, and field orders
within a tag do not have to be sequential.
*/
  Order?: number;

  // Holds the value for a tag field with string type.
  StringValue?: string;

  // Holds the value for a tag field with timestamp type.
  TimestampValue?: string;
}

export function Datacatalog_TagField_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Order",
      "(Output)\nThe order of this field with respect to other fields in this tag. For example, a higher value can indicate\na more important field. The value can be negative. Multiple fields can have the same order, and field orders\nwithin a tag do not have to be sequential.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "StringValue",
      "Holds the value for a tag field with string type.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TimestampValue",
      "Holds the value for a tag field with timestamp type.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "BoolValue",
      "Holds the value for a tag field with boolean type.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DisplayName",
      "(Output)\nThe display name of this field",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "DoubleValue",
      "Holds the value for a tag field with double type.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "EnumValue",
      "Holds the value for a tag field with enum type. This value must be one of the allowed values in the definition of this enum.\n\n- - -",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "FieldName",
      "The identifier for this object. Format specified above.",
      [],
      true,
      false,
    ),
  ];
}
