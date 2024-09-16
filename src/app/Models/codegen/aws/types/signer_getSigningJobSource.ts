import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  signer_getSigningJobSourceS3,
  signer_getSigningJobSourceS3_GetTypes,
} from './signer_getSigningJobSourceS3';

export interface signer_getSigningJobSource {
  //
  s3s?: Array<signer_getSigningJobSourceS3>;
}

export function signer_getSigningJobSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      's3s',
      '',
      () => signer_getSigningJobSourceS3_GetTypes(),
      true,
      false,
    ),
  ];
}
