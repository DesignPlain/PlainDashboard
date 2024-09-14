import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface certificatemanager_CertificateSelfManaged {
  /*
(Optional, Deprecated)
The certificate chain in PEM-encoded form.
Leaf certificate comes first, followed by intermediate ones if any.
--Note--: This property is sensitive and will not be displayed in the plan.

> --Warning:-- `certificate_pem` is deprecated and will be removed in a future major release. Use `pem_certificate` instead.
*/
  certificatePem?: string;

  /*
The certificate chain in PEM-encoded form.
Leaf certificate comes first, followed by intermediate ones if any.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  pemCertificate?: string;

  /*
The private key of the leaf certificate in PEM-encoded form.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  pemPrivateKey?: string;

  /*
(Optional, Deprecated)
The private key of the leaf certificate in PEM-encoded form.
--Note--: This property is sensitive and will not be displayed in the plan.

> --Warning:-- `private_key_pem` is deprecated and will be removed in a future major release. Use `pem_private_key` instead.
*/
  privateKeyPem?: string;
}

export function certificatemanager_CertificateSelfManaged_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "certificatePem",
      "(Optional, Deprecated)\nThe certificate chain in PEM-encoded form.\nLeaf certificate comes first, followed by intermediate ones if any.\n**Note**: This property is sensitive and will not be displayed in the plan.\n\n> **Warning:** `certificate_pem` is deprecated and will be removed in a future major release. Use `pem_certificate` instead.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "pemCertificate",
      "The certificate chain in PEM-encoded form.\nLeaf certificate comes first, followed by intermediate ones if any.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "pemPrivateKey",
      "The private key of the leaf certificate in PEM-encoded form.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "privateKeyPem",
      "(Optional, Deprecated)\nThe private key of the leaf certificate in PEM-encoded form.\n**Note**: This property is sensitive and will not be displayed in the plan.\n\n> **Warning:** `private_key_pem` is deprecated and will be removed in a future major release. Use `pem_private_key` instead.",
      () => [],
      false,
      true,
    ),
  ];
}
