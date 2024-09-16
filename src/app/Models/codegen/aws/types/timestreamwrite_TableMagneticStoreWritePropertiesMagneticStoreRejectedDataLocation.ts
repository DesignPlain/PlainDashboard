import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  timestreamwrite_TableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration,
  timestreamwrite_TableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration_GetTypes,
} from './timestreamwrite_TableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration';

export interface timestreamwrite_TableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation {
  // Configuration of an S3 location to write error reports for records rejected, asynchronously, during magnetic store writes. See S3 Configuration below for more details.
  s3Configuration?: timestreamwrite_TableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration;
}

export function timestreamwrite_TableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      's3Configuration',
      'Configuration of an S3 location to write error reports for records rejected, asynchronously, during magnetic store writes. See S3 Configuration below for more details.',
      () =>
        timestreamwrite_TableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration_GetTypes(),
      false,
      false,
    ),
  ];
}
