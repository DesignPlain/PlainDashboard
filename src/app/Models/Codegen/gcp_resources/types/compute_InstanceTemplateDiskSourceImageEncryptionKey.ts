import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface compute_InstanceTemplateDiskSourceImageEncryptionKey {
  /*
The self link of the encryption key that is
stored in Google Cloud KMS.
*/
  kmsKeySelfLink?: string;

  /*
The service account being used for the
encryption request for the given KMS key. If absent, the Compute Engine
default service account is used.
*/
  kmsKeyServiceAccount?: string;
}

export function compute_InstanceTemplateDiskSourceImageEncryptionKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "kmsKeySelfLink",
      "The self link of the encryption key that is\nstored in Google Cloud KMS.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyServiceAccount",
      "The service account being used for the\nencryption request for the given KMS key. If absent, the Compute Engine\ndefault service account is used.",
      [],
      false,
      true,
    ),
  ];
}
