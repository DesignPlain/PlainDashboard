import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  acm_CertificateOptions,
  acm_CertificateOptions_GetTypes,
} from "../types/acm_CertificateOptions";
import {
  acm_CertificateValidationOption,
  acm_CertificateValidationOption_GetTypes,
} from "../types/acm_CertificateValidationOption";
import {
  acm_CertificateRenewalSummary,
  acm_CertificateRenewalSummary_GetTypes,
} from "../types/acm_CertificateRenewalSummary";
import {
  acm_CertificateDomainValidationOption,
  acm_CertificateDomainValidationOption_GetTypes,
} from "../types/acm_CertificateDomainValidationOption";

export interface CertificateArgs {
  // Certificate's PEM-formatted public key
  certificateBody?: string;

  /*
Amount of time to start automatic renewal process before expiration.
Has no effect if less than 60 days.
Represented by either
a subset of [RFC 3339 duration](https://www.rfc-editor.org/rfc/rfc3339) supporting years, months, and days (e.g., `P90D`),
or a string such as `2160h`.
*/
  earlyRenewalDuration?: string;

  // Specifies the algorithm of the public and private key pair that your Amazon issued certificate uses to encrypt data. See [ACM Certificate characteristics](https://docs.aws.amazon.com/acm/latest/userguide/acm-certificate.html#algorithms) for more details.
  keyAlgorithm?: string;

  // Certificate's PEM-formatted private key
  privateKey?: string;

  // Which method to use for validation. `DNS` or `EMAIL` are valid. This parameter must not be set for certificates that were imported into ACM and then into Pulumi.
  validationMethod?: string;

  // ARN of an ACM PCA
  certificateAuthorityArn?: string;

  /*
Certificate's PEM-formatted chain
- Creating a private CA issued certificate
*/
  certificateChain?: string;

  // Fully qualified domain name (FQDN) in the certificate.
  domainName?: string;

  // Configuration block used to set certificate options. Detailed below.
  options?: acm_CertificateOptions;

  /*
Set of domains that should be SANs in the issued certificate.
To remove all elements of a previously configured list, set this value equal to an empty list (`[]`)
*/
  subjectAlternativeNames?: Array<string>;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
Configuration block used to specify information about the initial validation of each domain name. Detailed below.
- Importing an existing certificate
*/
  validationOptions?: Array<acm_CertificateValidationOption>;
}
export class Certificate extends Resource {
  // Contains information about the status of ACM's [managed renewal](https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html) for the certificate.
  public renewalSummaries?: Array<acm_CertificateRenewalSummary>;

  /*
Set of domains that should be SANs in the issued certificate.
To remove all elements of a previously configured list, set this value equal to an empty list (`[]`)
*/
  public subjectAlternativeNames?: Array<string>;

  // Source of the certificate.
  public type?: string;

  // List of addresses that received a validation email. Only set if `EMAIL` validation was used.
  public validationEmails?: Array<string>;

  // Certificate's PEM-formatted public key
  public certificateBody?: string;

  /*
Amount of time to start automatic renewal process before expiration.
Has no effect if less than 60 days.
Represented by either
a subset of [RFC 3339 duration](https://www.rfc-editor.org/rfc/rfc3339) supporting years, months, and days (e.g., `P90D`),
or a string such as `2160h`.
*/
  public earlyRenewalDuration?: string;

  // Expiration date and time of the certificate.
  public notAfter?: string;

  // Whether the certificate is eligible for managed renewal.
  public renewalEligibility?: string;

  // Which method to use for validation. `DNS` or `EMAIL` are valid. This parameter must not be set for certificates that were imported into ACM and then into Pulumi.
  public validationMethod?: string;

  /*
Configuration block used to specify information about the initial validation of each domain name. Detailed below.
- Importing an existing certificate
*/
  public validationOptions?: Array<acm_CertificateValidationOption>;

  // ARN of the certificate
  public arn?: string;

  // Fully qualified domain name (FQDN) in the certificate.
  public domainName?: string;

  // Specifies the algorithm of the public and private key pair that your Amazon issued certificate uses to encrypt data. See [ACM Certificate characteristics](https://docs.aws.amazon.com/acm/latest/userguide/acm-certificate.html#algorithms) for more details.
  public keyAlgorithm?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Certificate's PEM-formatted private key
  public privateKey?: string;

  // ARN of an ACM PCA
  public certificateAuthorityArn?: string;

  /*
Certificate's PEM-formatted chain
- Creating a private CA issued certificate
*/
  public certificateChain?: string;

  /*
Set of domain validation objects which can be used to complete certificate validation.
Can have more than one element, e.g., if SANs are defined.
Only set if `DNS`-validation was used.
*/
  public domainValidationOptions?: Array<acm_CertificateDomainValidationOption>;

  // Start of the validity period of the certificate.
  public notBefore?: string;

  // Configuration block used to set certificate options. Detailed below.
  public options?: acm_CertificateOptions;

  // `true` if a Private certificate eligible for managed renewal is within the `early_renewal_duration` period.
  public pendingRenewal?: boolean;

  // Status of the certificate.
  public status?: string;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "certificateBody",
        "Certificate's PEM-formatted public key",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "options",
        "Configuration block used to set certificate options. Detailed below.",
        acm_CertificateOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "validationOptions",
        "Configuration block used to specify information about the initial validation of each domain name. Detailed below.\n* Importing an existing certificate",
        acm_CertificateValidationOption_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "certificateAuthorityArn",
        "ARN of an ACM PCA",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "certificateChain",
        "Certificate's PEM-formatted chain\n* Creating a private CA issued certificate",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "domainName",
        "Fully qualified domain name (FQDN) in the certificate.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "subjectAlternativeNames",
        "Set of domains that should be SANs in the issued certificate.\nTo remove all elements of a previously configured list, set this value equal to an empty list (`[]`)",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "earlyRenewalDuration",
        "Amount of time to start automatic renewal process before expiration.\nHas no effect if less than 60 days.\nRepresented by either\na subset of [RFC 3339 duration](https://www.rfc-editor.org/rfc/rfc3339) supporting years, months, and days (e.g., `P90D`),\nor a string such as `2160h`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "keyAlgorithm",
        "Specifies the algorithm of the public and private key pair that your Amazon issued certificate uses to encrypt data. See [ACM Certificate characteristics](https://docs.aws.amazon.com/acm/latest/userguide/acm-certificate.html#algorithms) for more details.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "privateKey",
        "Certificate's PEM-formatted private key",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "validationMethod",
        "Which method to use for validation. `DNS` or `EMAIL` are valid. This parameter must not be set for certificates that were imported into ACM and then into Pulumi.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
