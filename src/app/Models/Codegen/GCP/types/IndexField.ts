export interface IndexField {
  // Name of the field.
  FieldPath?: string;

  /*
Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=.
Only one of `order` and `arrayConfig` can be specified.
Possible values are: `ASCENDING`, `DESCENDING`.
*/
  Order?: string;

  /*
Indicates that this field supports operations on arrayValues. Only one of `order` and `arrayConfig` can
be specified.
Possible values are: `CONTAINS`.

- - -
*/
  ArrayConfig?: string;
}
