import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface s3_InventoryDestinationBucketEncryptionSseKms {
  // ARN of the KMS customer master key (CMK) used to encrypt the inventory file.
  keyId?: string;
}

export function s3_InventoryDestinationBucketEncryptionSseKms_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "keyId",
      "ARN of the KMS customer master key (CMK) used to encrypt the inventory file.",
      () => [],
      true,
      false,
    ),
  ];
}
