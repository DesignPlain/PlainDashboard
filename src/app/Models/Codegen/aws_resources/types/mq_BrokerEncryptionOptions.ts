import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface mq_BrokerEncryptionOptions {
  // Amazon Resource Name (ARN) of Key Management Service (KMS) Customer Master Key (CMK) to use for encryption at rest. Requires setting `use_aws_owned_key` to `false`. To perform drift detection when AWS-managed CMKs or customer-managed CMKs are in use, this value must be configured.
  kmsKeyId?: string;

  // Whether to enable an AWS-owned KMS CMK that is not in your account. Defaults to `true`. Setting to `false` without configuring `kms_key_id` will create an AWS-managed CMK aliased to `aws/mq` in your account.
  useAwsOwnedKey?: boolean;
}

export function mq_BrokerEncryptionOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "kmsKeyId",
      "Amazon Resource Name (ARN) of Key Management Service (KMS) Customer Master Key (CMK) to use for encryption at rest. Requires setting `use_aws_owned_key` to `false`. To perform drift detection when AWS-managed CMKs or customer-managed CMKs are in use, this value must be configured.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "useAwsOwnedKey",
      "Whether to enable an AWS-owned KMS CMK that is not in your account. Defaults to `true`. Setting to `false` without configuring `kms_key_id` will create an AWS-managed CMK aliased to `aws/mq` in your account.",
      [],
      false,
      true,
    ),
  ];
}
