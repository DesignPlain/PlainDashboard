import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Apigee_KeystoresAliasesKeyCertFileCertsInfoCertInfo {
  /*
(Output)
X.509 serial number.
*/
  SerialNumber?: string;

  /*
(Output)
X.509 signatureAlgorithm.
*/
  SigAlgName?: string;

  /*
(Output)
X.509 subject.
*/
  Subject?: string;

  /*
(Output)
X.509 notBefore validity period in milliseconds since epoch.
*/
  ValidFrom?: string;

  /*
(Output)
X.509 basic constraints extension.
*/
  BasicConstraints?: string;

  /*
(Output)
X.509 notAfter validity period in milliseconds since epoch.
*/
  ExpiryDate?: string;

  /*
(Output)
Flag that specifies whether the certificate is valid.
Flag is set to Yes if the certificate is valid, No if expired, or Not yet if not yet valid.
*/
  IsValid?: string;

  /*
(Output)
X.509 issuer.
*/
  Issuer?: string;

  /*
(Output)
X.509 version.
*/
  Version?: number;

  /*
(Output)
Public key component of the X.509 subject public key info.
*/
  PublicKey?: string;

  /*
(Output)
X.509 subject alternative names (SANs) extension.
*/
  SubjectAlternativeNames?: Array<string>;
}

export function Apigee_KeystoresAliasesKeyCertFileCertsInfoCertInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Subject",
      "(Output)\nX.509 subject.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ExpiryDate",
      "(Output)\nX.509 notAfter validity period in milliseconds since epoch.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Issuer",
      "(Output)\nX.509 issuer.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Version",
      "(Output)\nX.509 version.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SubjectAlternativeNames",
      "(Output)\nX.509 subject alternative names (SANs) extension.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SigAlgName",
      "(Output)\nX.509 signatureAlgorithm.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ValidFrom",
      "(Output)\nX.509 notBefore validity period in milliseconds since epoch.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "BasicConstraints",
      "(Output)\nX.509 basic constraints extension.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "IsValid",
      "(Output)\nFlag that specifies whether the certificate is valid.\nFlag is set to Yes if the certificate is valid, No if expired, or Not yet if not yet valid.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PublicKey",
      "(Output)\nPublic key component of the X.509 subject public key info.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SerialNumber",
      "(Output)\nX.509 serial number.",
      [],
      false,
      false,
    ),
  ];
}
