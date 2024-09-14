import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsageBaseKeyUsage,
  certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsageBaseKeyUsage_GetTypes,
} from "./certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsageBaseKeyUsage";
import {
  certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsageExtendedKeyUsage,
  certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsageExtendedKeyUsage_GetTypes,
} from "./certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsageExtendedKeyUsage";
import {
  certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsageUnknownExtendedKeyUsage,
  certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsageUnknownExtendedKeyUsage_GetTypes,
} from "./certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsageUnknownExtendedKeyUsage";

export interface certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsage {
  /*
Describes high-level ways in which a key may be used.
Structure is documented below.
*/
  baseKeyUsages?: Array<certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsageBaseKeyUsage>;

  /*
Describes high-level ways in which a key may be used.
Structure is documented below.
*/
  extendedKeyUsages?: Array<certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsageExtendedKeyUsage>;

  /*
An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
Structure is documented below.
*/
  unknownExtendedKeyUsages?: Array<certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsageUnknownExtendedKeyUsage>;
}

export function certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "unknownExtendedKeyUsages",
      "An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.\nStructure is documented below.",
      () =>
        certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsageUnknownExtendedKeyUsage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "baseKeyUsages",
      "Describes high-level ways in which a key may be used.\nStructure is documented below.",
      () =>
        certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsageBaseKeyUsage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "extendedKeyUsages",
      "Describes high-level ways in which a key may be used.\nStructure is documented below.",
      () =>
        certificateauthority_CertificateCertificateDescriptionX509DescriptionKeyUsageExtendedKeyUsage_GetTypes(),
      false,
      false,
    ),
  ];
}
