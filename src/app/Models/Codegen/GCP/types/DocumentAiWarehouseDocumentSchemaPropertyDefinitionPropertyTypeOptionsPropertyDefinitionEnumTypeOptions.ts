export interface DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionEnumTypeOptions {
  // List of possible enum values.
  PossibleValues?: Array<string>;

  /*
Make sure the enum property value provided in the document is in the possile value list during document creation. The validation check runs by default.

- - -
*/
  ValidationCheckDisabled?: boolean;
}
