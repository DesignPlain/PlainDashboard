import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  timestreamwrite_getTableMagneticStoreWritePropertyMagneticStoreRejectedDataLocationS3Configuration,
  timestreamwrite_getTableMagneticStoreWritePropertyMagneticStoreRejectedDataLocationS3Configuration_GetTypes,
} from './timestreamwrite_getTableMagneticStoreWritePropertyMagneticStoreRejectedDataLocationS3Configuration';

export interface timestreamwrite_getTableMagneticStoreWritePropertyMagneticStoreRejectedDataLocation {
  // Object containing the following attributes to describe the configuration of an s3 location to write error reports for records rejected.
  s3Configurations?: Array<timestreamwrite_getTableMagneticStoreWritePropertyMagneticStoreRejectedDataLocationS3Configuration>;
}

export function timestreamwrite_getTableMagneticStoreWritePropertyMagneticStoreRejectedDataLocation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      's3Configurations',
      'Object containing the following attributes to describe the configuration of an s3 location to write error reports for records rejected.',
      () =>
        timestreamwrite_getTableMagneticStoreWritePropertyMagneticStoreRejectedDataLocationS3Configuration_GetTypes(),
      true,
      false,
    ),
  ];
}
