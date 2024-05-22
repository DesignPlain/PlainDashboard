import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  msk_ClusterEncryptionInfoEncryptionInTransit,
  msk_ClusterEncryptionInfoEncryptionInTransit_GetTypes,
} from "./msk_ClusterEncryptionInfoEncryptionInTransit";

export interface msk_ClusterEncryptionInfo {
  // You may specify a KMS key short ID or ARN (it will always output an ARN) to use for encrypting your data at rest.  If no key is specified, an AWS managed KMS ('aws/msk' managed service) key will be used for encrypting the data at rest.
  encryptionAtRestKmsKeyArn?: string;

  // Configuration block to specify encryption in transit. See below.
  encryptionInTransit?: msk_ClusterEncryptionInfoEncryptionInTransit;
}

export function msk_ClusterEncryptionInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "encryptionAtRestKmsKeyArn",
      "You may specify a KMS key short ID or ARN (it will always output an ARN) to use for encrypting your data at rest.  If no key is specified, an AWS managed KMS ('aws/msk' managed service) key will be used for encrypting the data at rest.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "encryptionInTransit",
      "Configuration block to specify encryption in transit. See below.",
      msk_ClusterEncryptionInfoEncryptionInTransit_GetTypes(),
      false,
      false,
    ),
  ];
}
