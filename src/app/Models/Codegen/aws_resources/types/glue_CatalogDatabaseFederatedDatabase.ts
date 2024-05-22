import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface glue_CatalogDatabaseFederatedDatabase {
  // Name of the connection to the external metastore.
  connectionName?: string;

  // Unique identifier for the federated database.
  identifier?: string;
}

export function glue_CatalogDatabaseFederatedDatabase_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "connectionName",
      "Name of the connection to the external metastore.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "identifier",
      "Unique identifier for the federated database.",
      [],
      false,
      false,
    ),
  ];
}
