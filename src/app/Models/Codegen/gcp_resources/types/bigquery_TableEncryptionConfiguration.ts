import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface bigquery_TableEncryptionConfiguration {
  /*
The self link or full name of a key which should be used to
encrypt this table.  Note that the default bigquery service account will need to have
encrypt/decrypt permissions on this key - you may want to see the
`gcp.bigquery.getDefaultServiceAccount` datasource and the
`gcp.kms.CryptoKeyIAMBinding` resource.
*/
  kmsKeyName?: string;

  // The self link or full name of the kms key version used to encrypt this table.
  kmsKeyVersion?: string;
}

export function bigquery_TableEncryptionConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "kmsKeyName",
      "The self link or full name of a key which should be used to\nencrypt this table.  Note that the default bigquery service account will need to have\nencrypt/decrypt permissions on this key - you may want to see the\n`gcp.bigquery.getDefaultServiceAccount` datasource and the\n`gcp.kms.CryptoKeyIAMBinding` resource.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyVersion",
      "The self link or full name of the kms key version used to encrypt this table.",
      [],
      false,
      false,
    ),
  ];
}
