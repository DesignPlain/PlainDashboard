import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  keyspaces_TableSchemaDefinitionClusteringKey,
  keyspaces_TableSchemaDefinitionClusteringKey_GetTypes,
} from "./keyspaces_TableSchemaDefinitionClusteringKey";
import {
  keyspaces_TableSchemaDefinitionColumn,
  keyspaces_TableSchemaDefinitionColumn_GetTypes,
} from "./keyspaces_TableSchemaDefinitionColumn";
import {
  keyspaces_TableSchemaDefinitionPartitionKey,
  keyspaces_TableSchemaDefinitionPartitionKey_GetTypes,
} from "./keyspaces_TableSchemaDefinitionPartitionKey";
import {
  keyspaces_TableSchemaDefinitionStaticColumn,
  keyspaces_TableSchemaDefinitionStaticColumn_GetTypes,
} from "./keyspaces_TableSchemaDefinitionStaticColumn";

export interface keyspaces_TableSchemaDefinition {
  // The columns that are part of the clustering key of the table.
  clusteringKeys?: Array<keyspaces_TableSchemaDefinitionClusteringKey>;

  // The regular columns of the table.
  columns?: Array<keyspaces_TableSchemaDefinitionColumn>;

  // The columns that are part of the partition key of the table .
  partitionKeys?: Array<keyspaces_TableSchemaDefinitionPartitionKey>;

  // The columns that have been defined as `STATIC`. Static columns store values that are shared by all rows in the same partition.
  staticColumns?: Array<keyspaces_TableSchemaDefinitionStaticColumn>;
}

export function keyspaces_TableSchemaDefinition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "clusteringKeys",
      "The columns that are part of the clustering key of the table.",
      keyspaces_TableSchemaDefinitionClusteringKey_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "columns",
      "The regular columns of the table.",
      keyspaces_TableSchemaDefinitionColumn_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "partitionKeys",
      "The columns that are part of the partition key of the table .",
      keyspaces_TableSchemaDefinitionPartitionKey_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "staticColumns",
      "The columns that have been defined as `STATIC`. Static columns store values that are shared by all rows in the same partition.",
      keyspaces_TableSchemaDefinitionStaticColumn_GetTypes(),
      false,
      true,
    ),
  ];
}
