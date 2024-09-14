import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  certificateauthority_CertificateConfigX509ConfigKeyUsageExtendedKeyUsage,
  certificateauthority_CertificateConfigX509ConfigKeyUsageExtendedKeyUsage_GetTypes,
} from "./certificateauthority_CertificateConfigX509ConfigKeyUsageExtendedKeyUsage";
import {
  certificateauthority_CertificateConfigX509ConfigKeyUsageUnknownExtendedKeyUsage,
  certificateauthority_CertificateConfigX509ConfigKeyUsageUnknownExtendedKeyUsage_GetTypes,
} from "./certificateauthority_CertificateConfigX509ConfigKeyUsageUnknownExtendedKeyUsage";
import {
  certificateauthority_CertificateConfigX509ConfigKeyUsageBaseKeyUsage,
  certificateauthority_CertificateConfigX509ConfigKeyUsageBaseKeyUsage_GetTypes,
} from "./certificateauthority_CertificateConfigX509ConfigKeyUsageBaseKeyUsage";

export interface certificateauthority_CertificateConfigX509ConfigKeyUsage {
  /*
Describes high-level ways in which a key may be used.
Structure is documented below.
*/
  extendedKeyUsage?: certificateauthority_CertificateConfigX509ConfigKeyUsageExtendedKeyUsage;

  /*
An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
Structure is documented below.
*/
  unknownExtendedKeyUsages?: Array<certificateauthority_CertificateConfigX509ConfigKeyUsageUnknownExtendedKeyUsage>;

  /*
Describes high-level ways in which a key may be used.
Structure is documented below.
*/
  baseKeyUsage?: certificateauthority_CertificateConfigX509ConfigKeyUsageBaseKeyUsage;
}

export function certificateauthority_CertificateConfigX509ConfigKeyUsage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "extendedKeyUsage",
      "Describes high-level ways in which a key may be used.\nStructure is documented below.",
      () =>
        certificateauthority_CertificateConfigX509ConfigKeyUsageExtendedKeyUsage_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "unknownExtendedKeyUsages",
      "An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.\nStructure is documented below.",
      () =>
        certificateauthority_CertificateConfigX509ConfigKeyUsageUnknownExtendedKeyUsage_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "baseKeyUsage",
      "Describes high-level ways in which a key may be used.\nStructure is documented below.",
      () =>
        certificateauthority_CertificateConfigX509ConfigKeyUsageBaseKeyUsage_GetTypes(),
      true,
      true,
    ),
  ];
}
