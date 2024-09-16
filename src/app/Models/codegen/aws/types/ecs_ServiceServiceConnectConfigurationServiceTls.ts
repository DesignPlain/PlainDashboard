import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ecs_ServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority,
  ecs_ServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority_GetTypes,
} from './ecs_ServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority';

export interface ecs_ServiceServiceConnectConfigurationServiceTls {
  // Details of the certificate authority which will issue the certificate.
  issuerCertAuthority?: ecs_ServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority;

  // KMS key used to encrypt the private key in Secrets Manager.
  kmsKey?: string;

  // ARN of the IAM Role that's associated with the Service Connect TLS.
  roleArn?: string;
}

export function ecs_ServiceServiceConnectConfigurationServiceTls_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'issuerCertAuthority',
      'Details of the certificate authority which will issue the certificate.',
      () =>
        ecs_ServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'kmsKey',
      'KMS key used to encrypt the private key in Secrets Manager.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'roleArn',
      "ARN of the IAM Role that's associated with the Service Connect TLS.",
      () => [],
      false,
      false,
    ),
  ];
}
