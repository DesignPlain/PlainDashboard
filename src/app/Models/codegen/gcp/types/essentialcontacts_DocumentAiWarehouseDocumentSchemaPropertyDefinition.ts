import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionMapTypeOptions,
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionMapTypeOptions_GetTypes,
} from './essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionMapTypeOptions';
import {
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionTextTypeOptions,
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionTextTypeOptions_GetTypes,
} from './essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionTextTypeOptions';
import {
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionDateTimeTypeOptions,
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionDateTimeTypeOptions_GetTypes,
} from './essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionDateTimeTypeOptions';
import {
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionEnumTypeOptions,
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionEnumTypeOptions_GetTypes,
} from './essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionEnumTypeOptions';
import {
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionFloatTypeOptions,
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionFloatTypeOptions_GetTypes,
} from './essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionFloatTypeOptions';
import {
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionIntegerTypeOptions,
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionIntegerTypeOptions_GetTypes,
} from './essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionIntegerTypeOptions';
import {
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionSchemaSource,
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionSchemaSource_GetTypes,
} from './essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionSchemaSource';
import {
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionTimestampTypeOptions,
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionTimestampTypeOptions_GetTypes,
} from './essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionTimestampTypeOptions';
import {
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptions,
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptions_GetTypes,
} from './essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptions';

export interface essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinition {
  // The display-name for the property, used for front-end.
  displayName?: string;

  // Whether the property can have multiple values.
  isRepeatable?: boolean;

  // Map property.
  mapTypeOptions?: essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionMapTypeOptions;

  // Text property.
  textTypeOptions?: essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionTextTypeOptions;

  // Date time property. Not supported by CMEK compliant deployment.
  dateTimeTypeOptions?: essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionDateTimeTypeOptions;

  /*
Enum/categorical property.
Structure is documented below.
*/
  enumTypeOptions?: essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionEnumTypeOptions;

  // Float property.
  floatTypeOptions?: essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionFloatTypeOptions;

  // Integer property.
  integerTypeOptions?: essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionIntegerTypeOptions;

  // Whether the property is user supplied metadata.
  isMetadata?: boolean;

  /*
The schema source information.
Structure is documented below.
*/
  schemaSources?: Array<essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionSchemaSource>;

  // Whether the property is mandatory.
  isRequired?: boolean;

  // Indicates that the property should be included in a global search.
  isSearchable?: boolean;

  // The name of the metadata property.
  name?: string;

  // Timestamp property. Not supported by CMEK compliant deployment.
  timestampTypeOptions?: essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionTimestampTypeOptions;

  // Whether the property can be filtered. If this is a sub-property, all the parent properties must be marked filterable.
  isFilterable?: boolean;

  /*
Nested structured data property.
Structure is documented below.
*/
  propertyTypeOptions?: essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptions;

  /*
Stores the retrieval importance.
Possible values are: `HIGHEST`, `HIGHER`, `HIGH`, `MEDIUM`, `LOW`, `LOWEST`.
*/
  retrievalImportance?: string;
}

export function essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'schemaSources',
      'The schema source information.\nStructure is documented below.',
      () =>
        essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionSchemaSource_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'isSearchable',
      'Indicates that the property should be included in a global search.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the metadata property.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'timestampTypeOptions',
      'Timestamp property. Not supported by CMEK compliant deployment.',
      () =>
        essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionTimestampTypeOptions_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'propertyTypeOptions',
      'Nested structured data property.\nStructure is documented below.',
      () =>
        essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptions_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'isRepeatable',
      'Whether the property can have multiple values.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'integerTypeOptions',
      'Integer property.',
      () =>
        essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionIntegerTypeOptions_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'isMetadata',
      'Whether the property is user supplied metadata.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'retrievalImportance',
      'Stores the retrieval importance.\nPossible values are: `HIGHEST`, `HIGHER`, `HIGH`, `MEDIUM`, `LOW`, `LOWEST`.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'dateTimeTypeOptions',
      'Date time property. Not supported by CMEK compliant deployment.',
      () =>
        essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionDateTimeTypeOptions_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'displayName',
      'The display-name for the property, used for front-end.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'mapTypeOptions',
      'Map property.',
      () =>
        essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionMapTypeOptions_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'textTypeOptions',
      'Text property.',
      () =>
        essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionTextTypeOptions_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'floatTypeOptions',
      'Float property.',
      () =>
        essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionFloatTypeOptions_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'enumTypeOptions',
      'Enum/categorical property.\nStructure is documented below.',
      () =>
        essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionEnumTypeOptions_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'isRequired',
      'Whether the property is mandatory.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'isFilterable',
      'Whether the property can be filtered. If this is a sub-property, all the parent properties must be marked filterable.',
      () => [],
      false,
      true,
    ),
  ];
}
