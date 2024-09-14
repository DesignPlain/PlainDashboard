import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface codegurureviewer_RepositoryAssociationKmsKeyDetails {
  // The encryption option for a repository association. It is either owned by AWS Key Management Service (KMS) (`AWS_OWNED_CMK`) or customer managed (`CUSTOMER_MANAGED_CMK`).
  encryptionOption?: string;

  // The ID of the AWS KMS key that is associated with a repository association.
  kmsKeyId?: string;
}

export function codegurureviewer_RepositoryAssociationKmsKeyDetails_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "encryptionOption",
      "The encryption option for a repository association. It is either owned by AWS Key Management Service (KMS) (`AWS_OWNED_CMK`) or customer managed (`CUSTOMER_MANAGED_CMK`).",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyId",
      "The ID of the AWS KMS key that is associated with a repository association.",
      () => [],
      false,
      true,
    ),
  ];
}
