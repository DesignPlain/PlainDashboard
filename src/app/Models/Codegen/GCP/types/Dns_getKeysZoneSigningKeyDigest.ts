import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dns_getKeysZoneSigningKeyDigest {
  // The base-16 encoded bytes of this digest. Suitable for use in a DS resource record.
  Digest?: string;

  // Specifies the algorithm used to calculate this digest. Possible values are `sha1`, `sha256` and `sha384`
  Type?: string;
}

export function Dns_getKeysZoneSigningKeyDigest_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Digest",
      "The base-16 encoded bytes of this digest. Suitable for use in a DS resource record.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "Specifies the algorithm used to calculate this digest. Possible values are `sha1`, `sha256` and `sha384`",
      [],
      true,
      false,
    ),
  ];
}
