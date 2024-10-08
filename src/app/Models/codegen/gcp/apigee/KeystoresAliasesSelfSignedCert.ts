import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  apigee_KeystoresAliasesSelfSignedCertSubject,
  apigee_KeystoresAliasesSelfSignedCertSubject_GetTypes,
} from '../types/apigee_KeystoresAliasesSelfSignedCertSubject';
import {
  apigee_KeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames,
  apigee_KeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames_GetTypes,
} from '../types/apigee_KeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames';
import {
  apigee_KeystoresAliasesSelfSignedCertCertsInfo,
  apigee_KeystoresAliasesSelfSignedCertCertsInfo_GetTypes,
} from '../types/apigee_KeystoresAliasesSelfSignedCertCertsInfo';

export interface KeystoresAliasesSelfSignedCertArgs {
  // The Apigee Organization name associated with the Apigee environment
  orgId?: string;

  // Signature algorithm to generate private key. Valid values are SHA512withRSA, SHA384withRSA, and SHA256withRSA
  sigAlg?: string;

  /*
Subject details.
Structure is documented below.
*/
  subject?: apigee_KeystoresAliasesSelfSignedCertSubject;

  /*
List of alternative host names. Maximum length is 255 characters for each value.
Structure is documented below.
*/
  subjectAlternativeDnsNames?: apigee_KeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames;

  /*
Alias for the key/certificate pair. Values must match the regular expression [\w\s-.]{1,255}.
This must be provided for all formats except selfsignedcert; self-signed certs may specify the alias in either
this parameter or the JSON body.
*/
  alias?: string;

  // The Apigee keystore name associated in an Apigee environment
  keystore?: string;

  // Key size. Default and maximum value is 2048 bits.
  keySize?: string;

  // Validity duration of certificate, in days. Accepts positive non-zero value. Defaults to 365.
  certValidityInDays?: number;

  // The Apigee environment name
  environment?: string;
}
export class KeystoresAliasesSelfSignedCert extends DS_Resource {
  /*
Alias for the key/certificate pair. Values must match the regular expression [\w\s-.]{1,255}.
This must be provided for all formats except selfsignedcert; self-signed certs may specify the alias in either
this parameter or the JSON body.
*/
  public alias?: string;

  // Key size. Default and maximum value is 2048 bits.
  public keySize?: string;

  // The Apigee keystore name associated in an Apigee environment
  public keystore?: string;

  // The Apigee Organization name associated with the Apigee environment
  public orgId?: string;

  // Optional.Type of Alias
  public type?: string;

  // Validity duration of certificate, in days. Accepts positive non-zero value. Defaults to 365.
  public certValidityInDays?: number;

  /*
Chain of certificates under this alias.
Structure is documented below.
*/
  public certsInfos?: Array<apigee_KeystoresAliasesSelfSignedCertCertsInfo>;

  // The Apigee environment name
  public environment?: string;

  // Signature algorithm to generate private key. Valid values are SHA512withRSA, SHA384withRSA, and SHA256withRSA
  public sigAlg?: string;

  /*
Subject details.
Structure is documented below.
*/
  public subject?: apigee_KeystoresAliasesSelfSignedCertSubject;

  /*
List of alternative host names. Maximum length is 255 characters for each value.
Structure is documented below.
*/
  public subjectAlternativeDnsNames?: apigee_KeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'subjectAlternativeDnsNames',
        'List of alternative host names. Maximum length is 255 characters for each value.\nStructure is documented below.',
        () =>
          apigee_KeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'keystore',
        'The Apigee keystore name associated in an Apigee environment',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'keySize',
        'Key size. Default and maximum value is 2048 bits.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'certValidityInDays',
        'Validity duration of certificate, in days. Accepts positive non-zero value. Defaults to 365.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'environment',
        'The Apigee environment name',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'orgId',
        'The Apigee Organization name associated with the Apigee environment',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'subject',
        'Subject details.\nStructure is documented below.',
        () => apigee_KeystoresAliasesSelfSignedCertSubject_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'alias',
        'Alias for the key/certificate pair. Values must match the regular expression [\\w\\s-.]{1,255}.\nThis must be provided for all formats except selfsignedcert; self-signed certs may specify the alias in either\nthis parameter or the JSON body.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'sigAlg',
        'Signature algorithm to generate private key. Valid values are SHA512withRSA, SHA384withRSA, and SHA256withRSA',
        () => [],
        true,
        true,
      ),
    ];
  }
}
