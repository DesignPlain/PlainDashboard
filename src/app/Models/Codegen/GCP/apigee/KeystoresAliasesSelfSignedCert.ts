import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { KeystoresAliasesSelfSignedCertSubject } from "../types/KeystoresAliasesSelfSignedCertSubject";
import { KeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames } from "../types/KeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames";
import { KeystoresAliasesSelfSignedCertCertsInfo } from "../types/KeystoresAliasesSelfSignedCertCertsInfo";

export interface KeystoresAliasesSelfSignedCertArgs {
  // The Apigee Organization name associated with the Apigee environment
  OrgId?: string;

  // Signature algorithm to generate private key. Valid values are SHA512withRSA, SHA384withRSA, and SHA256withRSA
  SigAlg?: string;

  /*
Subject details.
Structure is documented below.
*/
  Subject?: KeystoresAliasesSelfSignedCertSubject;

  /*
List of alternative host names. Maximum length is 255 characters for each value.
Structure is documented below.
*/
  SubjectAlternativeDnsNames?: KeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames;

  /*
Alias for the key/certificate pair. Values must match the regular expression [\w\s-.]{1,255}.
This must be provided for all formats except selfsignedcert; self-signed certs may specify the alias in either
this parameter or the JSON body.
*/
  Alias?: string;

  // Validity duration of certificate, in days. Accepts positive non-zero value. Defaults to 365.
  CertValidityInDays?: number;

  // The Apigee environment name
  Environment?: string;

  // Key size. Default and maximum value is 2048 bits.
  KeySize?: string;

  // The Apigee keystore name associated in an Apigee environment
  Keystore?: string;
}
export class KeystoresAliasesSelfSignedCert extends Resource {
  /*
Alias for the key/certificate pair. Values must match the regular expression [\w\s-.]{1,255}.
This must be provided for all formats except selfsignedcert; self-signed certs may specify the alias in either
this parameter or the JSON body.
*/
  public Alias?: string;

  // Validity duration of certificate, in days. Accepts positive non-zero value. Defaults to 365.
  public CertValidityInDays?: number;

  // Key size. Default and maximum value is 2048 bits.
  public KeySize?: string;

  // Signature algorithm to generate private key. Valid values are SHA512withRSA, SHA384withRSA, and SHA256withRSA
  public SigAlg?: string;

  /*
List of alternative host names. Maximum length is 255 characters for each value.
Structure is documented below.
*/
  public SubjectAlternativeDnsNames?: KeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames;

  /*
Chain of certificates under this alias.
Structure is documented below.
*/
  public CertsInfos?: Array<KeystoresAliasesSelfSignedCertCertsInfo>;

  // The Apigee environment name
  public Environment?: string;

  // The Apigee keystore name associated in an Apigee environment
  public Keystore?: string;

  // The Apigee Organization name associated with the Apigee environment
  public OrgId?: string;

  /*
Subject details.
Structure is documented below.
*/
  public Subject?: KeystoresAliasesSelfSignedCertSubject;

  // Optional.Type of Alias
  public Type?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "OrgId",
        "The Apigee Organization name associated with the Apigee environment",
      ),
      new DynamicUIProps(
        InputType.String,
        "Alias",
        "Alias for the key/certificate pair. Values must match the regular expression [\\w\\s-.]{1,255}.\nThis must be provided for all formats except selfsignedcert; self-signed certs may specify the alias in either\nthis parameter or the JSON body.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "CertValidityInDays",
        "Validity duration of certificate, in days. Accepts positive non-zero value. Defaults to 365.",
      ),
      new DynamicUIProps(
        InputType.String,
        "KeySize",
        "Key size. Default and maximum value is 2048 bits.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Keystore",
        "The Apigee keystore name associated in an Apigee environment",
      ),
      new DynamicUIProps(
        InputType.String,
        "SigAlg",
        "Signature algorithm to generate private key. Valid values are SHA512withRSA, SHA384withRSA, and SHA256withRSA",
      ),
      new DynamicUIProps(
        InputType.String,
        "Subject",
        "Subject details.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SubjectAlternativeDnsNames",
        "List of alternative host names. Maximum length is 255 characters for each value.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Environment",
        "The Apigee environment name",
      ),
    ];
  }
}
