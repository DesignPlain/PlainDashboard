import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  acmpca_CertificateAuthorityRevocationConfiguration,
  acmpca_CertificateAuthorityRevocationConfiguration_GetTypes,
} from "../types/acmpca_CertificateAuthorityRevocationConfiguration";
import {
  acmpca_CertificateAuthorityCertificateAuthorityConfiguration,
  acmpca_CertificateAuthorityCertificateAuthorityConfiguration_GetTypes,
} from "../types/acmpca_CertificateAuthorityCertificateAuthorityConfiguration";

export interface CertificateAuthorityArgs {
  // Whether the certificate authority is enabled or disabled. Defaults to `true`. Can only be disabled if the CA is in an `ACTIVE` state.
  enabled?: boolean;

  // Cryptographic key management compliance standard used for handling CA keys. Defaults to `FIPS_140_2_LEVEL_3_OR_HIGHER`. Valid values: `FIPS_140_2_LEVEL_3_OR_HIGHER` and `FIPS_140_2_LEVEL_2_OR_HIGHER`. Supported standard for each region can be found in the [Storage and security compliance of AWS Private CA private keys Documentation](https://docs.aws.amazon.com/privateca/latest/userguide/data-protection.html#private-keys).
  keyStorageSecurityStandard?: string;

  // Number of days to make a CA restorable after it has been deleted, must be between 7 to 30 days, with default to 30 days.
  permanentDeletionTimeInDays?: number;

  // Nested argument containing revocation configuration. Defined below.
  revocationConfiguration?: acmpca_CertificateAuthorityRevocationConfiguration;

  // Key-value map of user-defined tags that are attached to the certificate authority. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Type of the certificate authority. Defaults to `SUBORDINATE`. Valid values: `ROOT` and `SUBORDINATE`.
  type?: string;

  // Specifies whether the CA issues general-purpose certificates that typically require a revocation mechanism, or short-lived certificates that may optionally omit revocation because they expire quickly. Short-lived certificate validity is limited to seven days. Defaults to `GENERAL_PURPOSE`. Valid values: `GENERAL_PURPOSE` and `SHORT_LIVED_CERTIFICATE`.
  usageMode?: string;

  // Nested argument containing algorithms and certificate subject information. Defined below.
  certificateAuthorityConfiguration?: acmpca_CertificateAuthorityCertificateAuthorityConfiguration;
}
export class CertificateAuthority extends Resource {
  // Key-value map of user-defined tags that are attached to the certificate authority. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Nested argument containing algorithms and certificate subject information. Defined below.
  public certificateAuthorityConfiguration?: acmpca_CertificateAuthorityCertificateAuthorityConfiguration;

  // Cryptographic key management compliance standard used for handling CA keys. Defaults to `FIPS_140_2_LEVEL_3_OR_HIGHER`. Valid values: `FIPS_140_2_LEVEL_3_OR_HIGHER` and `FIPS_140_2_LEVEL_2_OR_HIGHER`. Supported standard for each region can be found in the [Storage and security compliance of AWS Private CA private keys Documentation](https://docs.aws.amazon.com/privateca/latest/userguide/data-protection.html#private-keys).
  public keyStorageSecurityStandard?: string;

  // Date and time before which the certificate authority is not valid. Only available after the certificate authority certificate has been imported.
  public notBefore?: string;

  // Date and time after which the certificate authority is not valid. Only available after the certificate authority certificate has been imported.
  public notAfter?: string;

  // Nested argument containing revocation configuration. Defined below.
  public revocationConfiguration?: acmpca_CertificateAuthorityRevocationConfiguration;

  // Type of the certificate authority. Defaults to `SUBORDINATE`. Valid values: `ROOT` and `SUBORDINATE`.
  public type?: string;

  // ARN of the certificate authority.
  public arn?: string;

  // Base64-encoded certificate authority (CA) certificate. Only available after the certificate authority certificate has been imported.
  public certificate?: string;

  // Base64-encoded certificate chain that includes any intermediate certificates and chains up to root on-premises certificate that you used to sign your private CA certificate. The chain does not include your private CA certificate. Only available after the certificate authority certificate has been imported.
  public certificateChain?: string;

  // Serial number of the certificate authority. Only available after the certificate authority certificate has been imported.
  public serial?: string;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Specifies whether the CA issues general-purpose certificates that typically require a revocation mechanism, or short-lived certificates that may optionally omit revocation because they expire quickly. Short-lived certificate validity is limited to seven days. Defaults to `GENERAL_PURPOSE`. Valid values: `GENERAL_PURPOSE` and `SHORT_LIVED_CERTIFICATE`.
  public usageMode?: string;

  // The base64 PEM-encoded certificate signing request (CSR) for your private CA certificate.
  public certificateSigningRequest?: string;

  // Whether the certificate authority is enabled or disabled. Defaults to `true`. Can only be disabled if the CA is in an `ACTIVE` state.
  public enabled?: boolean;

  // Number of days to make a CA restorable after it has been deleted, must be between 7 to 30 days, with default to 30 days.
  public permanentDeletionTimeInDays?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "type",
        "Type of the certificate authority. Defaults to `SUBORDINATE`. Valid values: `ROOT` and `SUBORDINATE`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "usageMode",
        "Specifies whether the CA issues general-purpose certificates that typically require a revocation mechanism, or short-lived certificates that may optionally omit revocation because they expire quickly. Short-lived certificate validity is limited to seven days. Defaults to `GENERAL_PURPOSE`. Valid values: `GENERAL_PURPOSE` and `SHORT_LIVED_CERTIFICATE`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "certificateAuthorityConfiguration",
        "Nested argument containing algorithms and certificate subject information. Defined below.",
        acmpca_CertificateAuthorityCertificateAuthorityConfiguration_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "Whether the certificate authority is enabled or disabled. Defaults to `true`. Can only be disabled if the CA is in an `ACTIVE` state.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "keyStorageSecurityStandard",
        "Cryptographic key management compliance standard used for handling CA keys. Defaults to `FIPS_140_2_LEVEL_3_OR_HIGHER`. Valid values: `FIPS_140_2_LEVEL_3_OR_HIGHER` and `FIPS_140_2_LEVEL_2_OR_HIGHER`. Supported standard for each region can be found in the [Storage and security compliance of AWS Private CA private keys Documentation](https://docs.aws.amazon.com/privateca/latest/userguide/data-protection.html#private-keys).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "permanentDeletionTimeInDays",
        "Number of days to make a CA restorable after it has been deleted, must be between 7 to 30 days, with default to 30 days.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "revocationConfiguration",
        "Nested argument containing revocation configuration. Defined below.",
        acmpca_CertificateAuthorityRevocationConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of user-defined tags that are attached to the certificate authority. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
