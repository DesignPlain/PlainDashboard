import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  certificateauthority_CertificateCertificateDescriptionX509DescriptionAdditionalExtensionObjectId,
  certificateauthority_CertificateCertificateDescriptionX509DescriptionAdditionalExtensionObjectId_GetTypes,
} from "./certificateauthority_CertificateCertificateDescriptionX509DescriptionAdditionalExtensionObjectId";

export interface certificateauthority_CertificateCertificateDescriptionX509DescriptionAdditionalExtension {
  /*
Describes values that are relevant in a CA certificate.
Structure is documented below.
*/
  objectIds?: Array<certificateauthority_CertificateCertificateDescriptionX509DescriptionAdditionalExtensionObjectId>;

  // The value of this X.509 extension. A base64-encoded string.
  value?: string;

  /*
Indicates whether or not this extension is critical (i.e., if the client does not know how to
handle this extension, the client should consider this to be an error).
*/
  critical?: boolean;
}

export function certificateauthority_CertificateCertificateDescriptionX509DescriptionAdditionalExtension_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "objectIds",
      "Describes values that are relevant in a CA certificate.\nStructure is documented below.",
      certificateauthority_CertificateCertificateDescriptionX509DescriptionAdditionalExtensionObjectId_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The value of this X.509 extension. A base64-encoded string.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "critical",
      "Indicates whether or not this extension is critical (i.e., if the client does not know how to\nhandle this extension, the client should consider this to be an error).",
      [],
      false,
      false,
    ),
  ];
}
