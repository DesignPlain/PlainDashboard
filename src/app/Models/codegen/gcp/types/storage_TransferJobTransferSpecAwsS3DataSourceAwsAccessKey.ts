import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface storage_TransferJobTransferSpecAwsS3DataSourceAwsAccessKey {
  // AWS Key ID.
  accessKeyId?: string;

  // AWS Secret Access Key.
  secretAccessKey?: string;
}

export function storage_TransferJobTransferSpecAwsS3DataSourceAwsAccessKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'accessKeyId',
      'AWS Key ID.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'secretAccessKey',
      'AWS Secret Access Key.',
      () => [],
      true,
      false,
    ),
  ];
}
