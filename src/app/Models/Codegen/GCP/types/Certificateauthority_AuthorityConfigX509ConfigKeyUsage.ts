import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificateauthority_AuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsage,
  Certificateauthority_AuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsage_GetTypes,
} from "./Certificateauthority_AuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsage";
import {
  Certificateauthority_AuthorityConfigX509ConfigKeyUsageBaseKeyUsage,
  Certificateauthority_AuthorityConfigX509ConfigKeyUsageBaseKeyUsage_GetTypes,
} from "./Certificateauthority_AuthorityConfigX509ConfigKeyUsageBaseKeyUsage";
import {
  Certificateauthority_AuthorityConfigX509ConfigKeyUsageExtendedKeyUsage,
  Certificateauthority_AuthorityConfigX509ConfigKeyUsageExtendedKeyUsage_GetTypes,
} from "./Certificateauthority_AuthorityConfigX509ConfigKeyUsageExtendedKeyUsage";

export interface Certificateauthority_AuthorityConfigX509ConfigKeyUsage {
  /*
An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
Structure is documented below.
*/
  UnknownExtendedKeyUsages?: Array<Certificateauthority_AuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsage>;

  /*
Describes high-level ways in which a key may be used.
Structure is documented below.
*/
  BaseKeyUsage?: Certificateauthority_AuthorityConfigX509ConfigKeyUsageBaseKeyUsage;

  /*
Describes high-level ways in which a key may be used.
Structure is documented below.
*/
  ExtendedKeyUsage?: Certificateauthority_AuthorityConfigX509ConfigKeyUsageExtendedKeyUsage;
}

export function Certificateauthority_AuthorityConfigX509ConfigKeyUsage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "UnknownExtendedKeyUsages",
      "An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.\nStructure is documented below.",
      Certificateauthority_AuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsage_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "BaseKeyUsage",
      "Describes high-level ways in which a key may be used.\nStructure is documented below.",
      Certificateauthority_AuthorityConfigX509ConfigKeyUsageBaseKeyUsage_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ExtendedKeyUsage",
      "Describes high-level ways in which a key may be used.\nStructure is documented below.",
      Certificateauthority_AuthorityConfigX509ConfigKeyUsageExtendedKeyUsage_GetTypes(),
      true,
      true,
    ),
  ];
}
