import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface alloydb_InstanceClientConnectionConfigSslConfig {
  /*
SSL mode. Specifies client-server SSL/TLS connection behavior.
Possible values are: `ENCRYPTED_ONLY`, `ALLOW_UNENCRYPTED_AND_ENCRYPTED`.
*/
  sslMode?: string;
}

export function alloydb_InstanceClientConnectionConfigSslConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "sslMode",
      "SSL mode. Specifies client-server SSL/TLS connection behavior.\nPossible values are: `ENCRYPTED_ONLY`, `ALLOW_UNENCRYPTED_AND_ENCRYPTED`.",
      [],
      false,
      false,
    ),
  ];
}
