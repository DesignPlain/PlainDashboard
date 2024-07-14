import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  certificateauthority_AuthorityConfigX509ConfigKeyUsageBaseKeyUsage,
  certificateauthority_AuthorityConfigX509ConfigKeyUsageBaseKeyUsage_GetTypes,
} from "./certificateauthority_AuthorityConfigX509ConfigKeyUsageBaseKeyUsage";
import {
  certificateauthority_AuthorityConfigX509ConfigKeyUsageExtendedKeyUsage,
  certificateauthority_AuthorityConfigX509ConfigKeyUsageExtendedKeyUsage_GetTypes,
} from "./certificateauthority_AuthorityConfigX509ConfigKeyUsageExtendedKeyUsage";
import {
  certificateauthority_AuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsage,
  certificateauthority_AuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsage_GetTypes,
} from "./certificateauthority_AuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsage";

export interface certificateauthority_AuthorityConfigX509ConfigKeyUsage {
  /*
Describes high-level ways in which a key may be used.
Structure is documented below.
*/
  baseKeyUsage?: certificateauthority_AuthorityConfigX509ConfigKeyUsageBaseKeyUsage;

  /*
Describes high-level ways in which a key may be used.
Structure is documented below.
*/
  extendedKeyUsage?: certificateauthority_AuthorityConfigX509ConfigKeyUsageExtendedKeyUsage;

  /*
An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
Structure is documented below.
*/
  unknownExtendedKeyUsages?: Array<certificateauthority_AuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsage>;
}

export function certificateauthority_AuthorityConfigX509ConfigKeyUsage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "baseKeyUsage",
      "Describes high-level ways in which a key may be used.\nStructure is documented below.",
      certificateauthority_AuthorityConfigX509ConfigKeyUsageBaseKeyUsage_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "extendedKeyUsage",
      "Describes high-level ways in which a key may be used.\nStructure is documented below.",
      certificateauthority_AuthorityConfigX509ConfigKeyUsageExtendedKeyUsage_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "unknownExtendedKeyUsages",
      "An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.\nStructure is documented below.",
      certificateauthority_AuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsage_GetTypes(),
      false,
      true,
    ),
  ];
}
