import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  storage_InsightsReportConfigObjectMetadataReportOptionsStorageFilters,
  storage_InsightsReportConfigObjectMetadataReportOptionsStorageFilters_GetTypes,
} from './storage_InsightsReportConfigObjectMetadataReportOptionsStorageFilters';
import {
  storage_InsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions,
  storage_InsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions_GetTypes,
} from './storage_InsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions';

export interface storage_InsightsReportConfigObjectMetadataReportOptions {
  /*
A nested object resource
Structure is documented below.
*/
  storageFilters?: storage_InsightsReportConfigObjectMetadataReportOptionsStorageFilters;

  // The metadata fields included in an inventory report.
  metadataFields?: Array<string>;

  /*
Options for where the inventory reports are stored.
Structure is documented below.
*/
  storageDestinationOptions?: storage_InsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions;
}

export function storage_InsightsReportConfigObjectMetadataReportOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'storageFilters',
      'A nested object resource\nStructure is documented below.',
      () =>
        storage_InsightsReportConfigObjectMetadataReportOptionsStorageFilters_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'metadataFields',
      'The metadata fields included in an inventory report.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'storageDestinationOptions',
      'Options for where the inventory reports are stored.\nStructure is documented below.',
      () =>
        storage_InsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions_GetTypes(),
      true,
      false,
    ),
  ];
}
