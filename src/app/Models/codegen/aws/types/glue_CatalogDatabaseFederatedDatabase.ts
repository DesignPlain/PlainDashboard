import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface glue_CatalogDatabaseFederatedDatabase {
  // Unique identifier for the federated database.
  identifier?: string;

  // Name of the connection to the external metastore.
  connectionName?: string;
}

export function glue_CatalogDatabaseFederatedDatabase_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "identifier",
      "Unique identifier for the federated database.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "connectionName",
      "Name of the connection to the external metastore.",
      () => [],
      false,
      false,
    ),
  ];
}
