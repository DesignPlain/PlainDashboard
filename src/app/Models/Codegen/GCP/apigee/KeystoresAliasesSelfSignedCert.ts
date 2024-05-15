import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Apigee_KeystoresAliasesSelfSignedCertSubject,
  Apigee_KeystoresAliasesSelfSignedCertSubject_GetTypes,
} from "../types/Apigee_KeystoresAliasesSelfSignedCertSubject";
import {
  Apigee_KeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames,
  Apigee_KeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames_GetTypes,
} from "../types/Apigee_KeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames";
import {
  Apigee_KeystoresAliasesSelfSignedCertCertsInfo,
  Apigee_KeystoresAliasesSelfSignedCertCertsInfo_GetTypes,
} from "../types/Apigee_KeystoresAliasesSelfSignedCertCertsInfo";

export interface KeystoresAliasesSelfSignedCertArgs {
  // The Apigee keystore name associated in an Apigee environment
  Keystore?: string;

  // The Apigee Organization name associated with the Apigee environment
  OrgId?: string;

  // Signature algorithm to generate private key. Valid values are SHA512withRSA, SHA384withRSA, and SHA256withRSA
  SigAlg?: string;

  /*
Subject details.
Structure is documented below.
*/
  Subject?: Apigee_KeystoresAliasesSelfSignedCertSubject;

  // Validity duration of certificate, in days. Accepts positive non-zero value. Defaults to 365.
  CertValidityInDays?: number;

  // Key size. Default and maximum value is 2048 bits.
  KeySize?: string;

  /*
List of alternative host names. Maximum length is 255 characters for each value.
Structure is documented below.
*/
  SubjectAlternativeDnsNames?: Apigee_KeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames;

  /*
Alias for the key/certificate pair. Values must match the regular expression [\w\s-.]{1,255}.
This must be provided for all formats except selfsignedcert; self-signed certs may specify the alias in either
this parameter or the JSON body.
*/
  Alias?: string;

  // The Apigee environment name
  Environment?: string;
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

  /*
Chain of certificates under this alias.
Structure is documented below.
*/
  public CertsInfos?: Array<Apigee_KeystoresAliasesSelfSignedCertCertsInfo>;

  // The Apigee environment name
  public Environment?: string;

  // The Apigee Organization name associated with the Apigee environment
  public OrgId?: string;

  // Optional.Type of Alias
  public Type?: string;

  // Key size. Default and maximum value is 2048 bits.
  public KeySize?: string;

  // The Apigee keystore name associated in an Apigee environment
  public Keystore?: string;

  // Signature algorithm to generate private key. Valid values are SHA512withRSA, SHA384withRSA, and SHA256withRSA
  public SigAlg?: string;

  /*
Subject details.
Structure is documented below.
*/
  public Subject?: Apigee_KeystoresAliasesSelfSignedCertSubject;

  /*
List of alternative host names. Maximum length is 255 characters for each value.
Structure is documented below.
*/
  public SubjectAlternativeDnsNames?: Apigee_KeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Alias",
        "Alias for the key/certificate pair. Values must match the regular expression [\\w\\s-.]{1,255}.\nThis must be provided for all formats except selfsignedcert; self-signed certs may specify the alias in either\nthis parameter or the JSON body.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Keystore",
        "The Apigee keystore name associated in an Apigee environment",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "CertValidityInDays",
        "Validity duration of certificate, in days. Accepts positive non-zero value. Defaults to 365.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "SubjectAlternativeDnsNames",
        "List of alternative host names. Maximum length is 255 characters for each value.\nStructure is documented below.",
        Apigee_KeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "KeySize",
        "Key size. Default and maximum value is 2048 bits.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Environment",
        "The Apigee environment name",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "OrgId",
        "The Apigee Organization name associated with the Apigee environment",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "SigAlg",
        "Signature algorithm to generate private key. Valid values are SHA512withRSA, SHA384withRSA, and SHA256withRSA",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Subject",
        "Subject details.\nStructure is documented below.",
        Apigee_KeystoresAliasesSelfSignedCertSubject_GetTypes(),
        true,
        true,
      ),
    ];
  }
}
