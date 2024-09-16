import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ecs_ServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority {
  // ARN of the `aws.acmpca.CertificateAuthority` used to create the TLS Certificates.
  awsPcaAuthorityArn?: string;
}

export function ecs_ServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'awsPcaAuthorityArn',
      'ARN of the `aws.acmpca.CertificateAuthority` used to create the TLS Certificates.',
      () => [],
      true,
      false,
    ),
  ];
}
