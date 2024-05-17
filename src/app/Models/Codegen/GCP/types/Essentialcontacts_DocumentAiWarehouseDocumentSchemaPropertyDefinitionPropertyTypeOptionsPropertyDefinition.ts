import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionMapTypeOptions,
  Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionMapTypeOptions_GetTypes,
} from "./Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionMapTypeOptions";
import {
  Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionDateTimeTypeOptions,
  Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionDateTimeTypeOptions_GetTypes,
} from "./Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionDateTimeTypeOptions";
import {
  Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionEnumTypeOptions,
  Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionEnumTypeOptions_GetTypes,
} from "./Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionEnumTypeOptions";
import {
  Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionTextTypeOptions,
  Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionTextTypeOptions_GetTypes,
} from "./Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionTextTypeOptions";
import {
  Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionTimestampTypeOptions,
  Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionTimestampTypeOptions_GetTypes,
} from "./Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionTimestampTypeOptions";
import {
  Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionSchemaSource,
  Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionSchemaSource_GetTypes,
} from "./Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionSchemaSource";
import {
  Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionFloatTypeOptions,
  Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionFloatTypeOptions_GetTypes,
} from "./Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionFloatTypeOptions";
import {
  Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionIntegerTypeOptions,
  Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionIntegerTypeOptions_GetTypes,
} from "./Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionIntegerTypeOptions";

export interface Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinition {
  // Float property.
  FloatTypeOptions?: Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionFloatTypeOptions;

  // Integer property.
  IntegerTypeOptions?: Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionIntegerTypeOptions;

  // Map property.
  MapTypeOptions?: Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionMapTypeOptions;

  // The name of the metadata property.
  Name?: string;

  // Date time property. Not supported by CMEK compliant deployment.
  DateTimeTypeOptions?: Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionDateTimeTypeOptions;

  // Whether the property can have multiple values.
  IsRepeatable?: boolean;

  // Whether the property is mandatory.
  IsRequired?: boolean;

  /*
Enum/categorical property.
Structure is documented below.
*/
  EnumTypeOptions?: Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionEnumTypeOptions;

  // Whether the property can be filtered. If this is a sub-property, all the parent properties must be marked filterable.
  IsFilterable?: boolean;

  // Indicates that the property should be included in a global search.
  IsSearchable?: boolean;

  // Text property.
  TextTypeOptions?: Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionTextTypeOptions;

  // Timestamp property. Not supported by CMEK compliant deployment.
  TimestampTypeOptions?: Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionTimestampTypeOptions;

  // The display-name for the property, used for front-end.
  DisplayName?: string;

  /*
Stores the retrieval importance.
Possible values are: `HIGHEST`, `HIGHER`, `HIGH`, `MEDIUM`, `LOW`, `LOWEST`.
*/
  RetrievalImportance?: string;

  /*
The schema source information.
Structure is documented below.
*/
  SchemaSources?: Array<Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionSchemaSource>;

  // Whether the property is user supplied metadata.
  IsMetadata?: boolean;
}

export function Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "FloatTypeOptions",
      "Float property.",
      Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionFloatTypeOptions_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "MapTypeOptions",
      "Map property.",
      Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionMapTypeOptions_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "IsRepeatable",
      "Whether the property can have multiple values.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "IsRequired",
      "Whether the property is mandatory.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "RetrievalImportance",
      "Stores the retrieval importance.\nPossible values are: `HIGHEST`, `HIGHER`, `HIGH`, `MEDIUM`, `LOW`, `LOWEST`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of the metadata property.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "DateTimeTypeOptions",
      "Date time property. Not supported by CMEK compliant deployment.",
      Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionDateTimeTypeOptions_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "IsSearchable",
      "Indicates that the property should be included in a global search.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "TextTypeOptions",
      "Text property.",
      Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionTextTypeOptions_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "TimestampTypeOptions",
      "Timestamp property. Not supported by CMEK compliant deployment.",
      Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionTimestampTypeOptions_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "DisplayName",
      "The display-name for the property, used for front-end.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "IntegerTypeOptions",
      "Integer property.",
      Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionIntegerTypeOptions_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "IsFilterable",
      "Whether the property can be filtered. If this is a sub-property, all the parent properties must be marked filterable.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "IsMetadata",
      "Whether the property is user supplied metadata.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "EnumTypeOptions",
      "Enum/categorical property.\nStructure is documented below.",
      Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionEnumTypeOptions_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SchemaSources",
      "The schema source information.\nStructure is documented below.",
      Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionSchemaSource_GetTypes(),
      false,
      true,
    ),
  ];
}
