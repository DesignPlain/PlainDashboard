import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DocumentArgs {
  // The collection ID, relative to database. For example: chatrooms or chatrooms/my-document/private-messages.
  Collection?: string;

  // The Firestore database id. Defaults to `"(default)"`.
  Database?: string;

  /*
The client-assigned document ID to use for this document during creation.


- - -
*/
  DocumentId?: string;

  // The document's [fields](https://cloud.google.com/firestore/docs/reference/rest/v1/projects.databases.documents) formated as a json string.
  Fields?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class Document extends Resource {
  // The collection ID, relative to database. For example: chatrooms or chatrooms/my-document/private-messages.
  public Collection?: string;

  // The Firestore database id. Defaults to `"(default)"`.
  public Database?: string;

  /*
A server defined name for this index. Format:
`projects/{{project_id}}/databases/{{database_id}}/documents/{{path}}/{{document_id}}`
*/
  public Name?: string;

  // A relative path to the collection this document exists within
  public Path?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Creation timestamp in RFC3339 format.
  public CreateTime?: string;

  /*
The client-assigned document ID to use for this document during creation.


- - -
*/
  public DocumentId?: string;

  // The document's [fields](https://cloud.google.com/firestore/docs/reference/rest/v1/projects.databases.documents) formated as a json string.
  public Fields?: string;

  // Last update timestamp in RFC3339 format.
  public UpdateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Collection",
        "The collection ID, relative to database. For example: chatrooms or chatrooms/my-document/private-messages.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Database",
        'The Firestore database id. Defaults to `"(default)"`.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DocumentId",
        "The client-assigned document ID to use for this document during creation.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Fields",
        "The document's [fields](https://cloud.google.com/firestore/docs/reference/rest/v1/projects.databases.documents) formated as a json string.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
