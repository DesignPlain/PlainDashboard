import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface networkfirewall_TlsInspectionConfigurationEncryptionConfiguration {
  // ARN of the Amazon Web Services Key Management Service (KMS) customer managed key.
  keyId?: string;

  // Type of KMS key to use for encryption of your Network Firewall resources. Valid values: `AWS_OWNED_KMS_KEY`, `CUSTOMER_KMS`.
  type?: string;
}

export function networkfirewall_TlsInspectionConfigurationEncryptionConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "keyId",
      "ARN of the Amazon Web Services Key Management Service (KMS) customer managed key.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Type of KMS key to use for encryption of your Network Firewall resources. Valid values: `AWS_OWNED_KMS_KEY`, `CUSTOMER_KMS`.",
      () => [],
      true,
      false,
    ),
  ];
}
