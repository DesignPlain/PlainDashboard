import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionSchemaSource,
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionSchemaSource_GetTypes,
} from './essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionSchemaSource';
import {
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionFloatTypeOptions,
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionFloatTypeOptions_GetTypes,
} from './essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionFloatTypeOptions';
import {
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionTimestampTypeOptions,
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionTimestampTypeOptions_GetTypes,
} from './essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionTimestampTypeOptions';
import {
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionDateTimeTypeOptions,
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionDateTimeTypeOptions_GetTypes,
} from './essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionDateTimeTypeOptions';
import {
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionEnumTypeOptions,
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionEnumTypeOptions_GetTypes,
} from './essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionEnumTypeOptions';
import {
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionIntegerTypeOptions,
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionIntegerTypeOptions_GetTypes,
} from './essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionIntegerTypeOptions';
import {
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionMapTypeOptions,
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionMapTypeOptions_GetTypes,
} from './essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionMapTypeOptions';
import {
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionTextTypeOptions,
  essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionTextTypeOptions_GetTypes,
} from './essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionTextTypeOptions';

export interface essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinition {
  // Whether the property is user supplied metadata.
  isMetadata?: boolean;

  // Indicates that the property should be included in a global search.
  isSearchable?: boolean;

  // The name of the metadata property.
  name?: string;

  /*
Stores the retrieval importance.
Possible values are: `HIGHEST`, `HIGHER`, `HIGH`, `MEDIUM`, `LOW`, `LOWEST`.
*/
  retrievalImportance?: string;

  // Whether the property can be filtered. If this is a sub-property, all the parent properties must be marked filterable.
  isFilterable?: boolean;

  /*
The schema source information.
Structure is documented below.
*/
  schemaSources?: Array<essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionSchemaSource>;

  // The display-name for the property, used for front-end.
  displayName?: string;

  // Float property.
  floatTypeOptions?: essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionFloatTypeOptions;

  // Whether the property is mandatory.
  isRequired?: boolean;

  // Timestamp property. Not supported by CMEK compliant deployment.
  timestampTypeOptions?: essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionTimestampTypeOptions;

  // Date time property. Not supported by CMEK compliant deployment.
  dateTimeTypeOptions?: essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionDateTimeTypeOptions;

  /*
Enum/categorical property.
Structure is documented below.
*/
  enumTypeOptions?: essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionEnumTypeOptions;

  // Integer property.
  integerTypeOptions?: essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionIntegerTypeOptions;

  // Whether the property can have multiple values.
  isRepeatable?: boolean;

  // Map property.
  mapTypeOptions?: essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionMapTypeOptions;

  // Text property.
  textTypeOptions?: essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionTextTypeOptions;
}

export function essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'displayName',
      'The display-name for the property, used for front-end.',
      () => [],
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
        essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionDateTimeTypeOptions_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'mapTypeOptions',
      'Map property.',
      () =>
        essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionMapTypeOptions_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'textTypeOptions',
      'Text property.',
      () =>
        essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionTextTypeOptions_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'schemaSources',
      'The schema source information.\nStructure is documented below.',
      () =>
        essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionSchemaSource_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'timestampTypeOptions',
      'Timestamp property. Not supported by CMEK compliant deployment.',
      () =>
        essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionTimestampTypeOptions_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'integerTypeOptions',
      'Integer property.',
      () =>
        essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionIntegerTypeOptions_GetTypes(),
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
      InputType.Bool,
      'isRequired',
      'Whether the property is mandatory.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'enumTypeOptions',
      'Enum/categorical property.\nStructure is documented below.',
      () =>
        essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionEnumTypeOptions_GetTypes(),
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
    new DynamicUIProps(
      InputType.Object,
      'floatTypeOptions',
      'Float property.',
      () =>
        essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionFloatTypeOptions_GetTypes(),
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
  ];
}
