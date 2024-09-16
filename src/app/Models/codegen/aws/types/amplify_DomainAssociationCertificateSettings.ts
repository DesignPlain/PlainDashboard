import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface amplify_DomainAssociationCertificateSettings {
  // DNS records for certificate verification in a space-delimited format (`<record> CNAME <target>`).
  certificateVerificationDnsRecord?: string;

  // The Amazon resource name (ARN) for the custom certificate.
  customCertificateArn?: string;

  // The certificate type. Valid values are `AMPLIFY_MANAGED` and `CUSTOM`.
  type?: string;
}

export function amplify_DomainAssociationCertificateSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'certificateVerificationDnsRecord',
      'DNS records for certificate verification in a space-delimited format (`<record> CNAME <target>`).',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'customCertificateArn',
      'The Amazon resource name (ARN) for the custom certificate.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'The certificate type. Valid values are `AMPLIFY_MANAGED` and `CUSTOM`.',
      () => [],
      true,
      false,
    ),
  ];
}
