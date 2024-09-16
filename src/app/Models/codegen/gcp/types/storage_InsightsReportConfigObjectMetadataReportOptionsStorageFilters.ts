import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface storage_InsightsReportConfigObjectMetadataReportOptionsStorageFilters {
  // The filter to use when specifying which bucket to generate inventory reports for.
  bucket?: string;
}

export function storage_InsightsReportConfigObjectMetadataReportOptionsStorageFilters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'bucket',
      'The filter to use when specifying which bucket to generate inventory reports for.',
      () => [],
      false,
      true,
    ),
  ];
}
