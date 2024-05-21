import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  certificateauthority_getAuthorityConfigX509ConfigKeyUsageBaseKeyUsage,
  certificateauthority_getAuthorityConfigX509ConfigKeyUsageBaseKeyUsage_GetTypes,
} from "./certificateauthority_getAuthorityConfigX509ConfigKeyUsageBaseKeyUsage";
import {
  certificateauthority_getAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage,
  certificateauthority_getAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage_GetTypes,
} from "./certificateauthority_getAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage";
import {
  certificateauthority_getAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsage,
  certificateauthority_getAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsage_GetTypes,
} from "./certificateauthority_getAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsage";

export interface certificateauthority_getAuthorityConfigX509ConfigKeyUsage {
  // Describes high-level ways in which a key may be used.
  baseKeyUsages?: Array<certificateauthority_getAuthorityConfigX509ConfigKeyUsageBaseKeyUsage>;

  // Describes high-level ways in which a key may be used.
  extendedKeyUsages?: Array<certificateauthority_getAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage>;

  // An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
  unknownExtendedKeyUsages?: Array<certificateauthority_getAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsage>;
}

export function certificateauthority_getAuthorityConfigX509ConfigKeyUsage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "baseKeyUsages",
      "Describes high-level ways in which a key may be used.",
      certificateauthority_getAuthorityConfigX509ConfigKeyUsageBaseKeyUsage_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "extendedKeyUsages",
      "Describes high-level ways in which a key may be used.",
      certificateauthority_getAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "unknownExtendedKeyUsages",
      "An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.",
      certificateauthority_getAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsage_GetTypes(),
      true,
      false,
    ),
  ];
}
