import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dns_getKeysZoneSigningKeyDigest {
  // The base-16 encoded bytes of this digest. Suitable for use in a DS resource record.
  digest?: string;

  // Specifies the algorithm used to calculate this digest. Possible values are `sha1`, `sha256` and `sha384`
  type?: string;
}

export function dns_getKeysZoneSigningKeyDigest_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "digest",
      "The base-16 encoded bytes of this digest. Suitable for use in a DS resource record.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Specifies the algorithm used to calculate this digest. Possible values are `sha1`, `sha256` and `sha384`",
      [],
      true,
      false,
    ),
  ];
}
