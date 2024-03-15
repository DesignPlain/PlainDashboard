import { DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionEnumTypeOptions } from "./DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionEnumTypeOptions";
import { DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionMapTypeOptions } from "./DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionMapTypeOptions";
import { DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionSchemaSource } from "./DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionSchemaSource";
import { DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionTextTypeOptions } from "./DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionTextTypeOptions";
import { DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionFloatTypeOptions } from "./DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionFloatTypeOptions";
import { DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionIntegerTypeOptions } from "./DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionIntegerTypeOptions";
import { DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionTimestampTypeOptions } from "./DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionTimestampTypeOptions";
import { DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionDateTimeTypeOptions } from "./DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionDateTimeTypeOptions";

export interface DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinition {
  // Whether the property can be filtered. If this is a sub-property, all the parent properties must be marked filterable.
  IsFilterable?: boolean;

  // Whether the property is mandatory.
  IsRequired?: boolean;

  // Timestamp property. Not supported by CMEK compliant deployment.
  TimestampTypeOptions?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionTimestampTypeOptions;

  // Date time property. Not supported by CMEK compliant deployment.
  DateTimeTypeOptions?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionDateTimeTypeOptions;

  /*
Enum/categorical property.
Structure is documented below.
*/
  EnumTypeOptions?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionEnumTypeOptions;

  // Map property.
  MapTypeOptions?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionMapTypeOptions;

  /*
Stores the retrieval importance.
Possible values are: `HIGHEST`, `HIGHER`, `HIGH`, `MEDIUM`, `LOW`, `LOWEST`.
*/
  RetrievalImportance?: string;

  /*
The schema source information.
Structure is documented below.
*/
  SchemaSources?: Array<DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionSchemaSource>;

  // Text property.
  TextTypeOptions?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionTextTypeOptions;

  // Whether the property is user supplied metadata.
  IsMetadata?: boolean;

  // Indicates that the property should be included in a global search.
  IsSearchable?: boolean;

  // The name of the metadata property.
  Name?: string;

  // Float property.
  FloatTypeOptions?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionFloatTypeOptions;

  // Whether the property can have multiple values.
  IsRepeatable?: boolean;

  // The display-name for the property, used for front-end.
  DisplayName?: string;

  // Integer property.
  IntegerTypeOptions?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionIntegerTypeOptions;
}
