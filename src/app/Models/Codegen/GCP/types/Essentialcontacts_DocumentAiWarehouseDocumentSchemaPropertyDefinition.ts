import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionTimestampTypeOptions,
  Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionTimestampTypeOptions_GetTypes,
} from "./Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionTimestampTypeOptions";
import {
  Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptions,
  Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptions_GetTypes,
} from "./Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptions";
import {
  Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionFloatTypeOptions,
  Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionFloatTypeOptions_GetTypes,
} from "./Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionFloatTypeOptions";
import {
  Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionDateTimeTypeOptions,
  Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionDateTimeTypeOptions_GetTypes,
} from "./Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionDateTimeTypeOptions";
import {
  Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionMapTypeOptions,
  Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionMapTypeOptions_GetTypes,
} from "./Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionMapTypeOptions";
import {
  Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionSchemaSource,
  Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionSchemaSource_GetTypes,
} from "./Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionSchemaSource";
import {
  Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionEnumTypeOptions,
  Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionEnumTypeOptions_GetTypes,
} from "./Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionEnumTypeOptions";
import {
  Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionTextTypeOptions,
  Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionTextTypeOptions_GetTypes,
} from "./Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionTextTypeOptions";
import {
  Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionIntegerTypeOptions,
  Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionIntegerTypeOptions_GetTypes,
} from "./Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionIntegerTypeOptions";

export interface Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinition {
  // Date time property. Not supported by CMEK compliant deployment.
  DateTimeTypeOptions?: Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionDateTimeTypeOptions;

  // The display-name for the property, used for front-end.
  DisplayName?: string;

  // Integer property.
  IntegerTypeOptions?: Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionIntegerTypeOptions;

  // Timestamp property. Not supported by CMEK compliant deployment.
  TimestampTypeOptions?: Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionTimestampTypeOptions;

  // Whether the property is mandatory.
  IsRequired?: boolean;

  // The name of the metadata property.
  Name?: string;

  /*
Nested structured data property.
Structure is documented below.
*/
  PropertyTypeOptions?: Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptions;

  /*
Stores the retrieval importance.
Possible values are: `HIGHEST`, `HIGHER`, `HIGH`, `MEDIUM`, `LOW`, `LOWEST`.
*/
  RetrievalImportance?: string;

  // Whether the property is user supplied metadata.
  IsMetadata?: boolean;

  // Whether the property can have multiple values.
  IsRepeatable?: boolean;

  // Indicates that the property should be included in a global search.
  IsSearchable?: boolean;

  // Map property.
  MapTypeOptions?: Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionMapTypeOptions;

  /*
The schema source information.
Structure is documented below.
*/
  SchemaSources?: Array<Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionSchemaSource>;

  /*
Enum/categorical property.
Structure is documented below.
*/
  EnumTypeOptions?: Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionEnumTypeOptions;

  // Float property.
  FloatTypeOptions?: Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionFloatTypeOptions;

  // Whether the property can be filtered. If this is a sub-property, all the parent properties must be marked filterable.
  IsFilterable?: boolean;

  // Text property.
  TextTypeOptions?: Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionTextTypeOptions;
}

export function Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "IsRequired",
      "Whether the property is mandatory.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SchemaSources",
      "The schema source information.\nStructure is documented below.",
      Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionSchemaSource_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "FloatTypeOptions",
      "Float property.",
      Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionFloatTypeOptions_GetTypes(),
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
      InputType.Object,
      "DateTimeTypeOptions",
      "Date time property. Not supported by CMEK compliant deployment.",
      Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionDateTimeTypeOptions_GetTypes(),
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
      "TimestampTypeOptions",
      "Timestamp property. Not supported by CMEK compliant deployment.",
      Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionTimestampTypeOptions_GetTypes(),
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
      InputType.Bool,
      "IsRepeatable",
      "Whether the property can have multiple values.",
      [],
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
      InputType.String,
      "RetrievalImportance",
      "Stores the retrieval importance.\nPossible values are: `HIGHEST`, `HIGHER`, `HIGH`, `MEDIUM`, `LOW`, `LOWEST`.",
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
      "MapTypeOptions",
      "Map property.",
      Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionMapTypeOptions_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "TextTypeOptions",
      "Text property.",
      Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionTextTypeOptions_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "IntegerTypeOptions",
      "Integer property.",
      Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionIntegerTypeOptions_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PropertyTypeOptions",
      "Nested structured data property.\nStructure is documented below.",
      Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptions_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "EnumTypeOptions",
      "Enum/categorical property.\nStructure is documented below.",
      Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionEnumTypeOptions_GetTypes(),
      false,
      true,
    ),
  ];
}
