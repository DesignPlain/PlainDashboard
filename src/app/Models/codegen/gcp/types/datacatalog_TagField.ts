import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface datacatalog_TagField {
  // Holds the value for a tag field with string type.
  stringValue?: string;

  // Holds the value for a tag field with timestamp type.
  timestampValue?: string;

  // Holds the value for a tag field with boolean type.
  boolValue?: boolean;

  /*
(Output)
The display name of this field
*/
  displayName?: string;

  // Holds the value for a tag field with double type.
  doubleValue?: number;

  /*
Holds the value for a tag field with enum type. This value must be one of the allowed values in the definition of this enum.

- - -
*/
  enumValue?: string;

  // The identifier for this object. Format specified above.
  fieldName?: string;

  /*
(Output)
The order of this field with respect to other fields in this tag. For example, a higher value can indicate
a more important field. The value can be negative. Multiple fields can have the same order, and field orders
within a tag do not have to be sequential.
*/
  order?: number;
}

export function datacatalog_TagField_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "timestampValue",
      "Holds the value for a tag field with timestamp type.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "boolValue",
      "Holds the value for a tag field with boolean type.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "displayName",
      "(Output)\nThe display name of this field",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "doubleValue",
      "Holds the value for a tag field with double type.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "enumValue",
      "Holds the value for a tag field with enum type. This value must be one of the allowed values in the definition of this enum.\n\n- - -",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "fieldName",
      "The identifier for this object. Format specified above.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "order",
      "(Output)\nThe order of this field with respect to other fields in this tag. For example, a higher value can indicate\na more important field. The value can be negative. Multiple fields can have the same order, and field orders\nwithin a tag do not have to be sequential.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "stringValue",
      "Holds the value for a tag field with string type.",
      () => [],
      false,
      false,
    ),
  ];
}
