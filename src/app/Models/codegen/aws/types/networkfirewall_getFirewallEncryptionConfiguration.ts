import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface networkfirewall_getFirewallEncryptionConfiguration {
  // The ID of the AWS Key Management Service (AWS KMS) customer managed key.
  keyId?: string;

  // The type of the AWS Key Management Service (AWS KMS) key use by the firewall.
  type?: string;
}

export function networkfirewall_getFirewallEncryptionConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'keyId',
      'The ID of the AWS Key Management Service (AWS KMS) customer managed key.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'The type of the AWS Key Management Service (AWS KMS) key use by the firewall.',
      () => [],
      true,
      false,
    ),
  ];
}
