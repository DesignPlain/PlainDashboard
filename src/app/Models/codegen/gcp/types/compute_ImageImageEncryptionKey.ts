import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_ImageImageEncryptionKey {
  /*
The self link of the encryption key that is stored in Google Cloud
KMS.
*/
  kmsKeySelfLink?: string;

  /*
The service account being used for the encryption request for the
given KMS key. If absent, the Compute Engine default service
account is used.
*/
  kmsKeyServiceAccount?: string;
}

export function compute_ImageImageEncryptionKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'kmsKeyServiceAccount',
      'The service account being used for the encryption request for the\ngiven KMS key. If absent, the Compute Engine default service\naccount is used.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'kmsKeySelfLink',
      'The self link of the encryption key that is stored in Google Cloud\nKMS.',
      () => [],
      false,
      true,
    ),
  ];
}
