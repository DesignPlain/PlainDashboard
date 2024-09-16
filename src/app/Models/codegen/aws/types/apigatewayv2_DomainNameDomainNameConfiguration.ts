import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface apigatewayv2_DomainNameDomainNameConfiguration {
  // Amazon Route 53 Hosted Zone ID of the endpoint.
  hostedZoneId?: string;

  // ARN of the AWS-issued certificate used to validate custom domain ownership (when `certificate_arn` is issued via an ACM Private CA or `mutual_tls_authentication` is configured with an ACM-imported certificate.)
  ownershipVerificationCertificateArn?: string;

  // Transport Layer Security (TLS) version of the [security policy](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-custom-domain-tls-version.html) for the domain name. Valid values: `TLS_1_2`.
  securityPolicy?: string;

  // Target domain name.
  targetDomainName?: string;

  // ARN of an AWS-managed certificate that will be used by the endpoint for the domain name. AWS Certificate Manager is the only supported source. Use the `aws.acm.Certificate` resource to configure an ACM certificate.
  certificateArn?: string;

  // Endpoint type. Valid values: `REGIONAL`.
  endpointType?: string;
}

export function apigatewayv2_DomainNameDomainNameConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'hostedZoneId',
      'Amazon Route 53 Hosted Zone ID of the endpoint.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'ownershipVerificationCertificateArn',
      'ARN of the AWS-issued certificate used to validate custom domain ownership (when `certificate_arn` is issued via an ACM Private CA or `mutual_tls_authentication` is configured with an ACM-imported certificate.)',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'securityPolicy',
      'Transport Layer Security (TLS) version of the [security policy](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-custom-domain-tls-version.html) for the domain name. Valid values: `TLS_1_2`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'targetDomainName',
      'Target domain name.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'certificateArn',
      'ARN of an AWS-managed certificate that will be used by the endpoint for the domain name. AWS Certificate Manager is the only supported source. Use the `aws.acm.Certificate` resource to configure an ACM certificate.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'endpointType',
      'Endpoint type. Valid values: `REGIONAL`.',
      () => [],
      true,
      false,
    ),
  ];
}
