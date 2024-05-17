import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Databasemigrationservice_ConnectionProfileOraclePrivateConnectivity {
  // Required. The resource name (URI) of the private connection.
  PrivateConnection?: string;
}

export function Databasemigrationservice_ConnectionProfileOraclePrivateConnectivity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "PrivateConnection",
      "Required. The resource name (URI) of the private connection.",
      [],
      true,
      false,
    ),
  ];
}
