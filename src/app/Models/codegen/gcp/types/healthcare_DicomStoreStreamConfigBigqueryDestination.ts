import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface healthcare_DicomStoreStreamConfigBigqueryDestination {
  // a fully qualified BigQuery table URI where DICOM instance metadata will be streamed.
  tableUri?: string;
}

export function healthcare_DicomStoreStreamConfigBigqueryDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'tableUri',
      'a fully qualified BigQuery table URI where DICOM instance metadata will be streamed.',
      () => [],
      true,
      false,
    ),
  ];
}
