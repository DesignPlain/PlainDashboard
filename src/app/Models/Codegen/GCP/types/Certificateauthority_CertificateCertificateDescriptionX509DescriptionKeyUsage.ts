import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsageExtendedKeyUsage,
  Certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsageExtendedKeyUsage_GetTypes,
} from "./Certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsageExtendedKeyUsage";
import {
  Certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsageUnknownExtendedKeyUsage,
  Certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsageUnknownExtendedKeyUsage_GetTypes,
} from "./Certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsageUnknownExtendedKeyUsage";
import {
  Certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsageBaseKeyUsage,
  Certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsageBaseKeyUsage_GetTypes,
} from "./Certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsageBaseKeyUsage";

export interface Certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsage {
  /*
Describes high-level ways in which a key may be used.
Structure is documented below.
*/
  ExtendedKeyUsages?: Array<Certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsageExtendedKeyUsage>;

  /*
An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
Structure is documented below.
*/
  UnknownExtendedKeyUsages?: Array<Certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsageUnknownExtendedKeyUsage>;

  /*
Describes high-level ways in which a key may be used.
Structure is documented below.
*/
  BaseKeyUsages?: Array<Certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsageBaseKeyUsage>;
}

export function Certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ExtendedKeyUsages",
      "Describes high-level ways in which a key may be used.\nStructure is documented below.",
      Certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsageExtendedKeyUsage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "UnknownExtendedKeyUsages",
      "An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.\nStructure is documented below.",
      Certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsageUnknownExtendedKeyUsage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "BaseKeyUsages",
      "Describes high-level ways in which a key may be used.\nStructure is documented below.",
      Certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsageBaseKeyUsage_GetTypes(),
      false,
      false,
    ),
  ];
}
