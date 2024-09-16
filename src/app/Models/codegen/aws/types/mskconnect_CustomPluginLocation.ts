import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  mskconnect_CustomPluginLocationS3,
  mskconnect_CustomPluginLocationS3_GetTypes,
} from './mskconnect_CustomPluginLocationS3';

export interface mskconnect_CustomPluginLocation {
  // Information of the plugin file stored in Amazon S3. See `s3` Block for details..
  s3?: mskconnect_CustomPluginLocationS3;
}

export function mskconnect_CustomPluginLocation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      's3',
      'Information of the plugin file stored in Amazon S3. See `s3` Block for details..',
      () => mskconnect_CustomPluginLocationS3_GetTypes(),
      true,
      true,
    ),
  ];
}
