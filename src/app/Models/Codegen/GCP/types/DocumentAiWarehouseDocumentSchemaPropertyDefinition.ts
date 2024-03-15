import { DocumentAiWarehouseDocumentSchemaPropertyDefinitionTimestampTypeOptions } from "./DocumentAiWarehouseDocumentSchemaPropertyDefinitionTimestampTypeOptions";
import { DocumentAiWarehouseDocumentSchemaPropertyDefinitionSchemaSource } from "./DocumentAiWarehouseDocumentSchemaPropertyDefinitionSchemaSource";
import { DocumentAiWarehouseDocumentSchemaPropertyDefinitionMapTypeOptions } from "./DocumentAiWarehouseDocumentSchemaPropertyDefinitionMapTypeOptions";
import { DocumentAiWarehouseDocumentSchemaPropertyDefinitionIntegerTypeOptions } from "./DocumentAiWarehouseDocumentSchemaPropertyDefinitionIntegerTypeOptions";
import { DocumentAiWarehouseDocumentSchemaPropertyDefinitionTextTypeOptions } from "./DocumentAiWarehouseDocumentSchemaPropertyDefinitionTextTypeOptions";
import { DocumentAiWarehouseDocumentSchemaPropertyDefinitionDateTimeTypeOptions } from "./DocumentAiWarehouseDocumentSchemaPropertyDefinitionDateTimeTypeOptions";
import { DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptions } from "./DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptions";
import { DocumentAiWarehouseDocumentSchemaPropertyDefinitionEnumTypeOptions } from "./DocumentAiWarehouseDocumentSchemaPropertyDefinitionEnumTypeOptions";
import { DocumentAiWarehouseDocumentSchemaPropertyDefinitionFloatTypeOptions } from "./DocumentAiWarehouseDocumentSchemaPropertyDefinitionFloatTypeOptions";

export interface DocumentAiWarehouseDocumentSchemaPropertyDefinition {
  // Whether the property can have multiple values.
  IsRepeatable?: boolean;

  // Indicates that the property should be included in a global search.
  IsSearchable?: boolean;

  /*
Nested structured data property.
Structure is documented below.
*/
  PropertyTypeOptions?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptions;

  // Timestamp property. Not supported by CMEK compliant deployment.
  TimestampTypeOptions?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionTimestampTypeOptions;

  /*
The schema source information.
Structure is documented below.
*/
  SchemaSources?: Array<DocumentAiWarehouseDocumentSchemaPropertyDefinitionSchemaSource>;

  /*
Enum/categorical property.
Structure is documented below.
*/
  EnumTypeOptions?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionEnumTypeOptions;

  // Float property.
  FloatTypeOptions?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionFloatTypeOptions;

  // Map property.
  MapTypeOptions?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionMapTypeOptions;

  // The name of the metadata property.
  Name?: string;

  // Integer property.
  IntegerTypeOptions?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionIntegerTypeOptions;

  // Whether the property is user supplied metadata.
  IsMetadata?: boolean;

  // Text property.
  TextTypeOptions?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionTextTypeOptions;

  /*
Stores the retrieval importance.
Possible values are: `HIGHEST`, `HIGHER`, `HIGH`, `MEDIUM`, `LOW`, `LOWEST`.
*/
  RetrievalImportance?: string;

  // Date time property. Not supported by CMEK compliant deployment.
  DateTimeTypeOptions?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionDateTimeTypeOptions;

  // The display-name for the property, used for front-end.
  DisplayName?: string;

  // Whether the property can be filtered. If this is a sub-property, all the parent properties must be marked filterable.
  IsFilterable?: boolean;

  // Whether the property is mandatory.
  IsRequired?: boolean;
}
