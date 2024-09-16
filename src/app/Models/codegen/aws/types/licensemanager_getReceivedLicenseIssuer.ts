import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface licensemanager_getReceivedLicenseIssuer {
  // Issuer key fingerprint.
  keyFingerprint?: string;

  // The key name.
  name?: string;

  // Asymmetric KMS key from AWS Key Management Service. The KMS key must have a key usage of sign and verify, and support the RSASSA-PSS SHA-256 signing algorithm.
  signKey?: string;
}

export function licensemanager_getReceivedLicenseIssuer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'keyFingerprint',
      'Issuer key fingerprint.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'The key name.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'signKey',
      'Asymmetric KMS key from AWS Key Management Service. The KMS key must have a key usage of sign and verify, and support the RSASSA-PSS SHA-256 signing algorithm.',
      () => [],
      true,
      false,
    ),
  ];
}
