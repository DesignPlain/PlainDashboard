export interface TagField {
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

  // Holds the value for a tag field with boolean type.
  BoolValue?: boolean;

  /*
(Output)
The display name of this field
*/
  DisplayName?: string;
}
