import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataproc_getMetastoreServiceEncryptionConfig {
  /*
The fully qualified customer provided Cloud KMS key name to use for customer data encryption.
Use the following format: 'projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)'
*/
  KmsKey?: string;
}

export function Dataproc_getMetastoreServiceEncryptionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "KmsKey",
      "The fully qualified customer provided Cloud KMS key name to use for customer data encryption.\nUse the following format: 'projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)'",
      [],
      true,
      false,
    ),
  ];
}
