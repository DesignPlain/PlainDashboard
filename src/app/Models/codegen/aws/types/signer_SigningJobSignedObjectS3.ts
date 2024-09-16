import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface signer_SigningJobSignedObjectS3 {
  //
  bucket?: string;

  // Key name of the object that contains your unsigned code.
  key?: string;
}

export function signer_SigningJobSignedObjectS3_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, 'bucket', '', () => [], false, false),
    new DynamicUIProps(
      InputType.String,
      'key',
      'Key name of the object that contains your unsigned code.',
      () => [],
      false,
      false,
    ),
  ];
}
