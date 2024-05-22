import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_getInstanceTemplateDiskSourceSnapshotEncryptionKey {
  /*
The service account being used for the encryption
request for the given KMS key. If absent, the Compute
Engine default service account is used.
*/
  kmsKeyServiceAccount?: string;

  // The self link of the encryption key that is stored in Google Cloud KMS
  kmsKeySelfLink?: string;
}

export function compute_getInstanceTemplateDiskSourceSnapshotEncryptionKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "kmsKeyServiceAccount",
      "The service account being used for the encryption\nrequest for the given KMS key. If absent, the Compute\nEngine default service account is used.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeySelfLink",
      "The self link of the encryption key that is stored in Google Cloud KMS",
      [],
      true,
      false,
    ),
  ];
}
