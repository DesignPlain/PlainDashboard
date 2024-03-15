import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DocumentArgs {
  // The document's [fields](https://cloud.google.com/firestore/docs/reference/rest/v1/projects.databases.documents) formated as a json string.
  Fields?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The collection ID, relative to database. For example: chatrooms or chatrooms/my-document/private-messages.
  Collection?: string;

  // The Firestore database id. Defaults to `"(default)"`.
  Database?: string;

  /*
The client-assigned document ID to use for this document during creation.


- - -
*/
  DocumentId?: string;
}
export class Document extends Resource {
  /*
A server defined name for this index. Format:
`projects/{{project_id}}/databases/{{database_id}}/documents/{{path}}/{{document_id}}`
*/
  public Name?: string;

  // The document's [fields](https://cloud.google.com/firestore/docs/reference/rest/v1/projects.databases.documents) formated as a json string.
  public Fields?: string;

  // Creation timestamp in RFC3339 format.
  public CreateTime?: string;

  // The Firestore database id. Defaults to `"(default)"`.
  public Database?: string;

  /*
The client-assigned document ID to use for this document during creation.


- - -
*/
  public DocumentId?: string;

  // A relative path to the collection this document exists within
  public Path?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Last update timestamp in RFC3339 format.
  public UpdateTime?: string;

  // The collection ID, relative to database. For example: chatrooms or chatrooms/my-document/private-messages.
  public Collection?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Fields",
        "The document's [fields](https://cloud.google.com/firestore/docs/reference/rest/v1/projects.databases.documents) formated as a json string.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Collection",
        "The collection ID, relative to database. For example: chatrooms or chatrooms/my-document/private-messages.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Database",
        'The Firestore database id. Defaults to `"(default)"`.',
      ),
      new DynamicUIProps(
        InputType.String,
        "DocumentId",
        "The client-assigned document ID to use for this document during creation.\n\n\n- - -",
      ),
    ];
  }
}
