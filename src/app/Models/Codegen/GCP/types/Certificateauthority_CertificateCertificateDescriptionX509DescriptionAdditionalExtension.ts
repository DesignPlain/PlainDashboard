import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificateauthority_CertificateCertificateDescriptionX509DescriptionAdditionalExtensionObjectId,
  Certificateauthority_CertificateCertificateDescriptionX509DescriptionAdditionalExtensionObjectId_GetTypes,
} from "./Certificateauthority_CertificateCertificateDescriptionX509DescriptionAdditionalExtensionObjectId";

export interface Certificateauthority_CertificateCertificateDescriptionX509DescriptionAdditionalExtension {
  /*
Indicates whether or not this extension is critical (i.e., if the client does not know how to
handle this extension, the client should consider this to be an error).
*/
  Critical?: boolean;

  /*
Describes values that are relevant in a CA certificate.
Structure is documented below.
*/
  ObjectIds?: Array<Certificateauthority_CertificateCertificateDescriptionX509DescriptionAdditionalExtensionObjectId>;

  // The value of this X.509 extension. A base64-encoded string.
  Value?: string;
}

export function Certificateauthority_CertificateCertificateDescriptionX509DescriptionAdditionalExtension_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Critical",
      "Indicates whether or not this extension is critical (i.e., if the client does not know how to\nhandle this extension, the client should consider this to be an error).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ObjectIds",
      "Describes values that are relevant in a CA certificate.\nStructure is documented below.",
      Certificateauthority_CertificateCertificateDescriptionX509DescriptionAdditionalExtensionObjectId_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Value",
      "The value of this X.509 extension. A base64-encoded string.",
      [],
      false,
      false,
    ),
  ];
}
