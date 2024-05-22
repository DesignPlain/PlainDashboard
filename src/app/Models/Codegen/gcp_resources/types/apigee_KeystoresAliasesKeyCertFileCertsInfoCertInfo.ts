import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface apigee_KeystoresAliasesKeyCertFileCertsInfoCertInfo {
  /*
(Output)
Flag that specifies whether the certificate is valid.
Flag is set to Yes if the certificate is valid, No if expired, or Not yet if not yet valid.
*/
  isValid?: string;

  /*
(Output)
Public key component of the X.509 subject public key info.
*/
  publicKey?: string;

  /*
(Output)
X.509 signatureAlgorithm.
*/
  sigAlgName?: string;

  /*
(Output)
X.509 subject.
*/
  subject?: string;

  /*
(Output)
X.509 subject alternative names (SANs) extension.
*/
  subjectAlternativeNames?: Array<string>;

  /*
(Output)
X.509 version.
*/
  version?: number;

  /*
(Output)
X.509 notAfter validity period in milliseconds since epoch.
*/
  expiryDate?: string;

  /*
(Output)
X.509 issuer.
*/
  issuer?: string;

  /*
(Output)
X.509 serial number.
*/
  serialNumber?: string;

  /*
(Output)
X.509 notBefore validity period in milliseconds since epoch.
*/
  validFrom?: string;

  /*
(Output)
X.509 basic constraints extension.
*/
  basicConstraints?: string;
}

export function apigee_KeystoresAliasesKeyCertFileCertsInfoCertInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "serialNumber",
      "(Output)\nX.509 serial number.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "isValid",
      "(Output)\nFlag that specifies whether the certificate is valid.\nFlag is set to Yes if the certificate is valid, No if expired, or Not yet if not yet valid.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "publicKey",
      "(Output)\nPublic key component of the X.509 subject public key info.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "subject",
      "(Output)\nX.509 subject.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "expiryDate",
      "(Output)\nX.509 notAfter validity period in milliseconds since epoch.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "issuer",
      "(Output)\nX.509 issuer.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "validFrom",
      "(Output)\nX.509 notBefore validity period in milliseconds since epoch.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "basicConstraints",
      "(Output)\nX.509 basic constraints extension.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sigAlgName",
      "(Output)\nX.509 signatureAlgorithm.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subjectAlternativeNames",
      "(Output)\nX.509 subject alternative names (SANs) extension.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "version",
      "(Output)\nX.509 version.",
      [],
      false,
      false,
    ),
  ];
}
