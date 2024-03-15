export interface DatascanDataProfileSpecIncludeFields {
  /*
Expected input is a list of fully qualified names of fields as in the schema.
Only top-level field names for nested fields are supported.
For instance, if 'x' is of nested field type, listing 'x' is supported but 'x.y.z' is not supported. Here 'y' and 'y.z' are nested fields of 'x'.
*/
  FieldNames?: Array<string>;
}
