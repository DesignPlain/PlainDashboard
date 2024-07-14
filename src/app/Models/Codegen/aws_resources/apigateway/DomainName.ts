import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  apigateway_DomainNameEndpointConfiguration,
  apigateway_DomainNameEndpointConfiguration_GetTypes,
} from "../types/apigateway_DomainNameEndpointConfiguration";
import {
  apigateway_DomainNameMutualTlsAuthentication,
  apigateway_DomainNameMutualTlsAuthentication_GetTypes,
} from "../types/apigateway_DomainNameMutualTlsAuthentication";

export interface DomainNameArgs {
  // User-friendly name of the certificate that will be used by regional endpoint for this domain name. Conflicts with `certificate_arn`, `certificate_name`, `certificate_body`, `certificate_chain`, and `certificate_private_key`.
  regionalCertificateName?: string;

  /*
Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

When referencing an AWS-managed certificate, the following arguments are supported:
*/
  tags?: Map<string, string>;

  // ARN for an AWS-managed certificate. AWS Certificate Manager is the only supported source. Used when an edge-optimized domain name is desired. Conflicts with `certificate_name`, `certificate_body`, `certificate_chain`, `certificate_private_key`, `regional_certificate_arn`, and `regional_certificate_name`.
  certificateArn?: string;

  // Certificate issued for the domain name being registered, in PEM format. Only valid for `EDGE` endpoint configuration type. Conflicts with `certificate_arn`, `regional_certificate_arn`, and `regional_certificate_name`.
  certificateBody?: string;

  // Certificate for the CA that issued the certificate, along with any intermediate CA certificates required to create an unbroken chain to a certificate trusted by the intended API clients. Only valid for `EDGE` endpoint configuration type. Conflicts with `certificate_arn`, `regional_certificate_arn`, and `regional_certificate_name`.
  certificateChain?: string;

  // Private key associated with the domain certificate given in `certificate_body`. Only valid for `EDGE` endpoint configuration type. Conflicts with `certificate_arn`, `regional_certificate_arn`, and `regional_certificate_name`.
  certificatePrivateKey?: string;

  // Fully-qualified domain name to register.
  domainName?: string;

  // ARN of the AWS-issued certificate used to validate custom domain ownership (when `certificate_arn` is issued via an ACM Private CA or `mutual_tls_authentication` is configured with an ACM-imported certificate.)
  ownershipVerificationCertificateArn?: string;

  // Unique name to use when registering this certificate as an IAM server certificate. Conflicts with `certificate_arn`, `regional_certificate_arn`, and `regional_certificate_name`. Required if `certificate_arn` is not set.
  certificateName?: string;

  // Configuration block defining API endpoint information including type. See below.
  endpointConfiguration?: apigateway_DomainNameEndpointConfiguration;

  // Mutual TLS authentication configuration for the domain name. See below.
  mutualTlsAuthentication?: apigateway_DomainNameMutualTlsAuthentication;

  /*
ARN for an AWS-managed certificate. AWS Certificate Manager is the only supported source. Used when a regional domain name is desired. Conflicts with `certificate_arn`, `certificate_name`, `certificate_body`, `certificate_chain`, and `certificate_private_key`.

When uploading a certificate, the following arguments are supported:
*/
  regionalCertificateArn?: string;

  // Transport Layer Security (TLS) version + cipher suite for this DomainName. Valid values are `TLS_1_0` and `TLS_1_2`. Must be configured to perform drift detection.
  securityPolicy?: string;
}
export class DomainName extends Resource {
  // ARN for an AWS-managed certificate. AWS Certificate Manager is the only supported source. Used when an edge-optimized domain name is desired. Conflicts with `certificate_name`, `certificate_body`, `certificate_chain`, `certificate_private_key`, `regional_certificate_arn`, and `regional_certificate_name`.
  public certificateArn?: string;

  // For convenience, the hosted zone ID (`Z2FDTNDATAQYW2`) that can be used to create a Route53 alias record for the distribution.
  public cloudfrontZoneId?: string;

  // ARN of the AWS-issued certificate used to validate custom domain ownership (when `certificate_arn` is issued via an ACM Private CA or `mutual_tls_authentication` is configured with an ACM-imported certificate.)
  public ownershipVerificationCertificateArn?: string;

  // Hostname for the custom domain's regional endpoint.
  public regionalDomainName?: string;

  // Transport Layer Security (TLS) version + cipher suite for this DomainName. Valid values are `TLS_1_0` and `TLS_1_2`. Must be configured to perform drift detection.
  public securityPolicy?: string;

  // ARN of domain name.
  public arn?: string;

  // Hostname created by Cloudfront to represent the distribution that implements this domain name mapping.
  public cloudfrontDomainName?: string;

  // Configuration block defining API endpoint information including type. See below.
  public endpointConfiguration?: apigateway_DomainNameEndpointConfiguration;

  /*
ARN for an AWS-managed certificate. AWS Certificate Manager is the only supported source. Used when a regional domain name is desired. Conflicts with `certificate_arn`, `certificate_name`, `certificate_body`, `certificate_chain`, and `certificate_private_key`.

When uploading a certificate, the following arguments are supported:
*/
  public regionalCertificateArn?: string;

  // User-friendly name of the certificate that will be used by regional endpoint for this domain name. Conflicts with `certificate_arn`, `certificate_name`, `certificate_body`, `certificate_chain`, and `certificate_private_key`.
  public regionalCertificateName?: string;

  /*
Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

When referencing an AWS-managed certificate, the following arguments are supported:
*/
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Upload date associated with the domain certificate.
  public certificateUploadDate?: string;

  // Certificate issued for the domain name being registered, in PEM format. Only valid for `EDGE` endpoint configuration type. Conflicts with `certificate_arn`, `regional_certificate_arn`, and `regional_certificate_name`.
  public certificateBody?: string;

  // Certificate for the CA that issued the certificate, along with any intermediate CA certificates required to create an unbroken chain to a certificate trusted by the intended API clients. Only valid for `EDGE` endpoint configuration type. Conflicts with `certificate_arn`, `regional_certificate_arn`, and `regional_certificate_name`.
  public certificateChain?: string;

  // Unique name to use when registering this certificate as an IAM server certificate. Conflicts with `certificate_arn`, `regional_certificate_arn`, and `regional_certificate_name`. Required if `certificate_arn` is not set.
  public certificateName?: string;

  // Private key associated with the domain certificate given in `certificate_body`. Only valid for `EDGE` endpoint configuration type. Conflicts with `certificate_arn`, `regional_certificate_arn`, and `regional_certificate_name`.
  public certificatePrivateKey?: string;

  // Fully-qualified domain name to register.
  public domainName?: string;

  // Mutual TLS authentication configuration for the domain name. See below.
  public mutualTlsAuthentication?: apigateway_DomainNameMutualTlsAuthentication;

  // Hosted zone ID that can be used to create a Route53 alias record for the regional endpoint.
  public regionalZoneId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "certificateBody",
        "Certificate issued for the domain name being registered, in PEM format. Only valid for `EDGE` endpoint configuration type. Conflicts with `certificate_arn`, `regional_certificate_arn`, and `regional_certificate_name`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "certificateChain",
        "Certificate for the CA that issued the certificate, along with any intermediate CA certificates required to create an unbroken chain to a certificate trusted by the intended API clients. Only valid for `EDGE` endpoint configuration type. Conflicts with `certificate_arn`, `regional_certificate_arn`, and `regional_certificate_name`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "domainName",
        "Fully-qualified domain name to register.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ownershipVerificationCertificateArn",
        "ARN of the AWS-issued certificate used to validate custom domain ownership (when `certificate_arn` is issued via an ACM Private CA or `mutual_tls_authentication` is configured with an ACM-imported certificate.)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "regionalCertificateArn",
        "ARN for an AWS-managed certificate. AWS Certificate Manager is the only supported source. Used when a regional domain name is desired. Conflicts with `certificate_arn`, `certificate_name`, `certificate_body`, `certificate_chain`, and `certificate_private_key`.\n\nWhen uploading a certificate, the following arguments are supported:",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "endpointConfiguration",
        "Configuration block defining API endpoint information including type. See below.",
        apigateway_DomainNameEndpointConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "mutualTlsAuthentication",
        "Mutual TLS authentication configuration for the domain name. See below.",
        apigateway_DomainNameMutualTlsAuthentication_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "securityPolicy",
        "Transport Layer Security (TLS) version + cipher suite for this DomainName. Valid values are `TLS_1_0` and `TLS_1_2`. Must be configured to perform drift detection.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "regionalCertificateName",
        "User-friendly name of the certificate that will be used by regional endpoint for this domain name. Conflicts with `certificate_arn`, `certificate_name`, `certificate_body`, `certificate_chain`, and `certificate_private_key`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.\n\nWhen referencing an AWS-managed certificate, the following arguments are supported:",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "certificateArn",
        "ARN for an AWS-managed certificate. AWS Certificate Manager is the only supported source. Used when an edge-optimized domain name is desired. Conflicts with `certificate_name`, `certificate_body`, `certificate_chain`, `certificate_private_key`, `regional_certificate_arn`, and `regional_certificate_name`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "certificatePrivateKey",
        "Private key associated with the domain certificate given in `certificate_body`. Only valid for `EDGE` endpoint configuration type. Conflicts with `certificate_arn`, `regional_certificate_arn`, and `regional_certificate_name`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "certificateName",
        "Unique name to use when registering this certificate as an IAM server certificate. Conflicts with `certificate_arn`, `regional_certificate_arn`, and `regional_certificate_name`. Required if `certificate_arn` is not set.",
        [],
        false,
        false,
      ),
    ];
  }
}
