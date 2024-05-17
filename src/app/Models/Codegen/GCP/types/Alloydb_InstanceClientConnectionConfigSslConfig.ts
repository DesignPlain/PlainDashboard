import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Alloydb_InstanceClientConnectionConfigSslConfig {
  /*
SSL mode. Specifies client-server SSL/TLS connection behavior.
Possible values are: `ENCRYPTED_ONLY`, `ALLOW_UNENCRYPTED_AND_ENCRYPTED`.
*/
  SslMode?: string;
}

export function Alloydb_InstanceClientConnectionConfigSslConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "SslMode",
      "SSL mode. Specifies client-server SSL/TLS connection behavior.\nPossible values are: `ENCRYPTED_ONLY`, `ALLOW_UNENCRYPTED_AND_ENCRYPTED`.",
      [],
      false,
      false,
    ),
  ];
}
