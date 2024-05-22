import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface CertificateArgs {
  /*
The certificate to be registered. If `ca_pem` is unspecified, review
[RegisterCertificateWithoutCA](https://docs.aws.amazon.com/iot/latest/apireference/API_RegisterCertificateWithoutCA.html).
If `ca_pem` is specified, review
[RegisterCertificate](https://docs.aws.amazon.com/iot/latest/apireference/API_RegisterCertificate.html)
for more information on registering a certificate.
*/
  certificatePem?: string;

  /*
The certificate signing request. Review
[CreateCertificateFromCsr](https://docs.aws.amazon.com/iot/latest/apireference/API_CreateCertificateFromCsr.html)
for more information on generating a certificate from a certificate signing request (CSR).
If none is specified both the certificate and keys will be generated, review [CreateKeysAndCertificate](https://docs.aws.amazon.com/iot/latest/apireference/API_CreateKeysAndCertificate.html)
for more information on generating keys and a certificate.
*/
  csr?: string;

  // Boolean flag to indicate if the certificate should be active
  active?: boolean;

  // The CA certificate for the certificate to be registered. If this is set, the CA needs to be registered with AWS IoT beforehand.
  caPem?: string;
}
export class Certificate extends Resource {
  // When neither CSR nor certificate is provided, the public key.
  public publicKey?: string;

  // Boolean flag to indicate if the certificate should be active
  public active?: boolean;

  // The ARN of the created certificate.
  public arn?: string;

  // The certificate ID of the CA certificate used to sign the certificate.
  public caCertificateId?: string;

  // The CA certificate for the certificate to be registered. If this is set, the CA needs to be registered with AWS IoT beforehand.
  public caPem?: string;

  /*
The certificate to be registered. If `ca_pem` is unspecified, review
[RegisterCertificateWithoutCA](https://docs.aws.amazon.com/iot/latest/apireference/API_RegisterCertificateWithoutCA.html).
If `ca_pem` is specified, review
[RegisterCertificate](https://docs.aws.amazon.com/iot/latest/apireference/API_RegisterCertificate.html)
for more information on registering a certificate.
*/
  public certificatePem?: string;

  /*
The certificate signing request. Review
[CreateCertificateFromCsr](https://docs.aws.amazon.com/iot/latest/apireference/API_CreateCertificateFromCsr.html)
for more information on generating a certificate from a certificate signing request (CSR).
If none is specified both the certificate and keys will be generated, review [CreateKeysAndCertificate](https://docs.aws.amazon.com/iot/latest/apireference/API_CreateKeysAndCertificate.html)
for more information on generating keys and a certificate.
*/
  public csr?: string;

  // When neither CSR nor certificate is provided, the private key.
  public privateKey?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "certificatePem",
        "The certificate to be registered. If `ca_pem` is unspecified, review\n[RegisterCertificateWithoutCA](https://docs.aws.amazon.com/iot/latest/apireference/API_RegisterCertificateWithoutCA.html).\nIf `ca_pem` is specified, review\n[RegisterCertificate](https://docs.aws.amazon.com/iot/latest/apireference/API_RegisterCertificate.html)\nfor more information on registering a certificate.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "csr",
        "The certificate signing request. Review\n[CreateCertificateFromCsr](https://docs.aws.amazon.com/iot/latest/apireference/API_CreateCertificateFromCsr.html)\nfor more information on generating a certificate from a certificate signing request (CSR).\nIf none is specified both the certificate and keys will be generated, review [CreateKeysAndCertificate](https://docs.aws.amazon.com/iot/latest/apireference/API_CreateKeysAndCertificate.html)\nfor more information on generating keys and a certificate.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "active",
        "Boolean flag to indicate if the certificate should be active",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "caPem",
        "The CA certificate for the certificate to be registered. If this is set, the CA needs to be registered with AWS IoT beforehand.",
        [],
        false,
        true,
      ),
    ];
  }
}
