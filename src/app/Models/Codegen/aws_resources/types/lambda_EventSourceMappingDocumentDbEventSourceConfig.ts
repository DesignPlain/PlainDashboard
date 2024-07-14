import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lambda_EventSourceMappingDocumentDbEventSourceConfig {
  // The name of the collection to consume within the database. If you do not specify a collection, Lambda consumes all collections.
  collectionName?: string;

  // The name of the database to consume within the DocumentDB cluster.
  databaseName?: string;

  // Determines what DocumentDB sends to your event stream during document update operations. If set to `UpdateLookup`, DocumentDB sends a delta describing the changes, along with a copy of the entire document. Otherwise, DocumentDB sends only a partial document that contains the changes. Valid values: `UpdateLookup`, `Default`.
  fullDocument?: string;
}

export function lambda_EventSourceMappingDocumentDbEventSourceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "collectionName",
      "The name of the collection to consume within the database. If you do not specify a collection, Lambda consumes all collections.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "databaseName",
      "The name of the database to consume within the DocumentDB cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "fullDocument",
      "Determines what DocumentDB sends to your event stream during document update operations. If set to `UpdateLookup`, DocumentDB sends a delta describing the changes, along with a copy of the entire document. Otherwise, DocumentDB sends only a partial document that contains the changes. Valid values: `UpdateLookup`, `Default`.",
      [],
      false,
      false,
    ),
  ];
}
