import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_ImageImageEncryptionKey {
  /*
The self link of the encryption key that is stored in Google Cloud
KMS.
*/
  KmsKeySelfLink?: string;

  /*
The service account being used for the encryption request for the
given KMS key. If absent, the Compute Engine default service
account is used.
*/
  KmsKeyServiceAccount?: string;
}

export function Compute_ImageImageEncryptionKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "KmsKeySelfLink",
      "The self link of the encryption key that is stored in Google Cloud\nKMS.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "KmsKeyServiceAccount",
      "The service account being used for the encryption request for the\ngiven KMS key. If absent, the Compute Engine default service\naccount is used.",
      [],
      false,
      true,
    ),
  ];
}
