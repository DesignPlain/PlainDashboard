import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataproc_getMetastoreServiceEncryptionConfig {
  /*
The fully qualified customer provided Cloud KMS key name to use for customer data encryption.
Use the following format: 'projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)'
*/
  kmsKey?: string;
}

export function dataproc_getMetastoreServiceEncryptionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "kmsKey",
      "The fully qualified customer provided Cloud KMS key name to use for customer data encryption.\nUse the following format: 'projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)'",
      [],
      true,
      false,
    ),
  ];
}
