import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  glue_CatalogTableOpenTableFormatInputIcebergInput,
  glue_CatalogTableOpenTableFormatInputIcebergInput_GetTypes,
} from './glue_CatalogTableOpenTableFormatInputIcebergInput';

export interface glue_CatalogTableOpenTableFormatInput {
  // Configuration block for iceberg table config. See `iceberg_input` below.
  icebergInput?: glue_CatalogTableOpenTableFormatInputIcebergInput;
}

export function glue_CatalogTableOpenTableFormatInput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'icebergInput',
      'Configuration block for iceberg table config. See `iceberg_input` below.',
      () => glue_CatalogTableOpenTableFormatInputIcebergInput_GetTypes(),
      true,
      false,
    ),
  ];
}
