import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Certificatemanager_CertificateSelfManaged {
  /*
(Optional, Deprecated)
The certificate chain in PEM-encoded form.
Leaf certificate comes first, followed by intermediate ones if any.
--Note--: This property is sensitive and will not be displayed in the plan.

> --Warning:-- `certificate_pem` is deprecated and will be removed in a future major release. Use `pem_certificate` instead.
*/
  CertificatePem?: string;

  /*
The certificate chain in PEM-encoded form.
Leaf certificate comes first, followed by intermediate ones if any.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  PemCertificate?: string;

  /*
The private key of the leaf certificate in PEM-encoded form.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  PemPrivateKey?: string;

  /*
(Optional, Deprecated)
The private key of the leaf certificate in PEM-encoded form.
--Note--: This property is sensitive and will not be displayed in the plan.

> --Warning:-- `private_key_pem` is deprecated and will be removed in a future major release. Use `pem_private_key` instead.
*/
  PrivateKeyPem?: string;
}

export function Certificatemanager_CertificateSelfManaged_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "CertificatePem",
      "(Optional, Deprecated)\nThe certificate chain in PEM-encoded form.\nLeaf certificate comes first, followed by intermediate ones if any.\n**Note**: This property is sensitive and will not be displayed in the plan.\n\n> **Warning:** `certificate_pem` is deprecated and will be removed in a future major release. Use `pem_certificate` instead.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "PemCertificate",
      "The certificate chain in PEM-encoded form.\nLeaf certificate comes first, followed by intermediate ones if any.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "PemPrivateKey",
      "The private key of the leaf certificate in PEM-encoded form.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "PrivateKeyPem",
      "(Optional, Deprecated)\nThe private key of the leaf certificate in PEM-encoded form.\n**Note**: This property is sensitive and will not be displayed in the plan.\n\n> **Warning:** `private_key_pem` is deprecated and will be removed in a future major release. Use `pem_private_key` instead.",
      [],
      false,
      true,
    ),
  ];
}
