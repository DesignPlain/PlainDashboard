import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Alloydb_InstanceClientConnectionConfigSslConfig,
  Alloydb_InstanceClientConnectionConfigSslConfig_GetTypes,
} from "./Alloydb_InstanceClientConnectionConfigSslConfig";

export interface Alloydb_InstanceClientConnectionConfig {
  // Configuration to enforce connectors only (ex: AuthProxy) connections to the database.
  RequireConnectors?: boolean;

  /*
SSL config option for this instance.
Structure is documented below.
*/
  SslConfig?: Alloydb_InstanceClientConnectionConfigSslConfig;
}

export function Alloydb_InstanceClientConnectionConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "RequireConnectors",
      "Configuration to enforce connectors only (ex: AuthProxy) connections to the database.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SslConfig",
      "SSL config option for this instance.\nStructure is documented below.",
      Alloydb_InstanceClientConnectionConfigSslConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
