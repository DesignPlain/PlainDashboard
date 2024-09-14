import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  acmpca_CertificateValidity,
  acmpca_CertificateValidity_GetTypes,
} from "../types/acmpca_CertificateValidity";

export interface CertificateArgs {
  // ARN of the certificate authority.
  certificateAuthorityArn?: string;

  // Certificate Signing Request in PEM format.
  certificateSigningRequest?: string;

  // Algorithm to use to sign certificate requests. Valid values: `SHA256WITHRSA`, `SHA256WITHECDSA`, `SHA384WITHRSA`, `SHA384WITHECDSA`, `SHA512WITHRSA`, `SHA512WITHECDSA`.
  signingAlgorithm?: string;

  /*
Template to use when issuing a certificate.
See [ACM PCA Documentation](https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html) for more information.
*/
  templateArn?: string;

  // Configures end of the validity period for the certificate. See validity block below.
  validity?: acmpca_CertificateValidity;

  // Specifies X.509 certificate information to be included in the issued certificate. To use with API Passthrough templates
  apiPassthrough?: string;
}
export class Certificate extends DS_Resource {
  // ARN of the certificate authority.
  public certificateAuthorityArn?: string;

  // Certificate Signing Request in PEM format.
  public certificateSigningRequest?: string;

  // Algorithm to use to sign certificate requests. Valid values: `SHA256WITHRSA`, `SHA256WITHECDSA`, `SHA384WITHRSA`, `SHA384WITHECDSA`, `SHA512WITHRSA`, `SHA512WITHECDSA`.
  public signingAlgorithm?: string;

  /*
Template to use when issuing a certificate.
See [ACM PCA Documentation](https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html) for more information.
*/
  public templateArn?: string;

  // Configures end of the validity period for the certificate. See validity block below.
  public validity?: acmpca_CertificateValidity;

  // Specifies X.509 certificate information to be included in the issued certificate. To use with API Passthrough templates
  public apiPassthrough?: string;

  // ARN of the certificate.
  public arn?: string;

  // PEM-encoded certificate value.
  public certificate?: string;

  // PEM-encoded certificate chain that includes any intermediate certificates and chains up to root CA.
  public certificateChain?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "templateArn",
        "Template to use when issuing a certificate.\nSee [ACM PCA Documentation](https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html) for more information.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "validity",
        "Configures end of the validity period for the certificate. See validity block below.",
        () => acmpca_CertificateValidity_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "apiPassthrough",
        "Specifies X.509 certificate information to be included in the issued certificate. To use with API Passthrough templates",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "certificateAuthorityArn",
        "ARN of the certificate authority.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "certificateSigningRequest",
        "Certificate Signing Request in PEM format.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "signingAlgorithm",
        "Algorithm to use to sign certificate requests. Valid values: `SHA256WITHRSA`, `SHA256WITHECDSA`, `SHA384WITHRSA`, `SHA384WITHECDSA`, `SHA512WITHRSA`, `SHA512WITHECDSA`.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
