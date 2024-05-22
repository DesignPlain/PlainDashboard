import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_RegionInstanceTemplateDiskSourceImageEncryptionKey {
  /*
The service account being used for the
encryption request for the given KMS key. If absent, the Compute Engine
default service account is used.
*/
  kmsKeyServiceAccount?: string;

  /*
The self link of the encryption key that is
stored in Google Cloud KMS.
*/
  kmsKeySelfLink?: string;
}

export function compute_RegionInstanceTemplateDiskSourceImageEncryptionKey_GetTypes(): DynamicUIProps[] {
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
