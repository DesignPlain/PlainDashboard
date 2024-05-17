import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificateauthority_CertificateConfigX509ConfigKeyUsageBaseKeyUsage,
  Certificateauthority_CertificateConfigX509ConfigKeyUsageBaseKeyUsage_GetTypes,
} from "./Certificateauthority_CertificateConfigX509ConfigKeyUsageBaseKeyUsage";
import {
  Certificateauthority_CertificateConfigX509ConfigKeyUsageExtendedKeyUsage,
  Certificateauthority_CertificateConfigX509ConfigKeyUsageExtendedKeyUsage_GetTypes,
} from "./Certificateauthority_CertificateConfigX509ConfigKeyUsageExtendedKeyUsage";
import {
  Certificateauthority_CertificateConfigX509ConfigKeyUsageUnknownExtendedKeyUsage,
  Certificateauthority_CertificateConfigX509ConfigKeyUsageUnknownExtendedKeyUsage_GetTypes,
} from "./Certificateauthority_CertificateConfigX509ConfigKeyUsageUnknownExtendedKeyUsage";

export interface Certificateauthority_CertificateConfigX509ConfigKeyUsage {
  /*
Describes high-level ways in which a key may be used.
Structure is documented below.
*/
  BaseKeyUsage?: Certificateauthority_CertificateConfigX509ConfigKeyUsageBaseKeyUsage;

  /*
Describes high-level ways in which a key may be used.
Structure is documented below.
*/
  ExtendedKeyUsage?: Certificateauthority_CertificateConfigX509ConfigKeyUsageExtendedKeyUsage;

  /*
An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
Structure is documented below.
*/
  UnknownExtendedKeyUsages?: Array<Certificateauthority_CertificateConfigX509ConfigKeyUsageUnknownExtendedKeyUsage>;
}

export function Certificateauthority_CertificateConfigX509ConfigKeyUsage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "BaseKeyUsage",
      "Describes high-level ways in which a key may be used.\nStructure is documented below.",
      Certificateauthority_CertificateConfigX509ConfigKeyUsageBaseKeyUsage_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ExtendedKeyUsage",
      "Describes high-level ways in which a key may be used.\nStructure is documented below.",
      Certificateauthority_CertificateConfigX509ConfigKeyUsageExtendedKeyUsage_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "UnknownExtendedKeyUsages",
      "An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.\nStructure is documented below.",
      Certificateauthority_CertificateConfigX509ConfigKeyUsageUnknownExtendedKeyUsage_GetTypes(),
      false,
      true,
    ),
  ];
}
