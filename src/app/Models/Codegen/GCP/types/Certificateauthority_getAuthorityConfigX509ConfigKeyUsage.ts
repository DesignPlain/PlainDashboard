import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificateauthority_getAuthorityConfigX509ConfigKeyUsageBaseKeyUsage,
  Certificateauthority_getAuthorityConfigX509ConfigKeyUsageBaseKeyUsage_GetTypes,
} from "./Certificateauthority_getAuthorityConfigX509ConfigKeyUsageBaseKeyUsage";
import {
  Certificateauthority_getAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage,
  Certificateauthority_getAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage_GetTypes,
} from "./Certificateauthority_getAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage";
import {
  Certificateauthority_getAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsage,
  Certificateauthority_getAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsage_GetTypes,
} from "./Certificateauthority_getAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsage";

export interface Certificateauthority_getAuthorityConfigX509ConfigKeyUsage {
  // Describes high-level ways in which a key may be used.
  BaseKeyUsages?: Array<Certificateauthority_getAuthorityConfigX509ConfigKeyUsageBaseKeyUsage>;

  // Describes high-level ways in which a key may be used.
  ExtendedKeyUsages?: Array<Certificateauthority_getAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage>;

  // An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
  UnknownExtendedKeyUsages?: Array<Certificateauthority_getAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsage>;
}

export function Certificateauthority_getAuthorityConfigX509ConfigKeyUsage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ExtendedKeyUsages",
      "Describes high-level ways in which a key may be used.",
      Certificateauthority_getAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "UnknownExtendedKeyUsages",
      "An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.",
      Certificateauthority_getAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsage_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "BaseKeyUsages",
      "Describes high-level ways in which a key may be used.",
      Certificateauthority_getAuthorityConfigX509ConfigKeyUsageBaseKeyUsage_GetTypes(),
      true,
      false,
    ),
  ];
}
