import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { RepositoryPubsubConfig } from "../types/RepositoryPubsubConfig";

export interface RepositoryArgs {
  /*
Resource name of the repository, of the form `{{repo}}`.
The repo name may contain slashes. eg, `name/with/slash`


- - -
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
How this repository publishes a change in the repository through Cloud Pub/Sub.
Keyed by the topic names.
Structure is documented below.
*/
  PubsubConfigs?: Array<RepositoryPubsubConfig>;
}
export class Repository extends Resource {
  /*
Resource name of the repository, of the form `{{repo}}`.
The repo name may contain slashes. eg, `name/with/slash`


- - -
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
How this repository publishes a change in the repository through Cloud Pub/Sub.
Keyed by the topic names.
Structure is documented below.
*/
  public PubsubConfigs?: Array<RepositoryPubsubConfig>;

  // The disk usage of the repo, in bytes.
  public Size?: number;

  // URL to clone the repository from Google Cloud Source Repositories.
  public Url?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Resource name of the repository, of the form `{{repo}}`.\nThe repo name may contain slashes. eg, `name/with/slash`\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "PubsubConfigs",
        "How this repository publishes a change in the repository through Cloud Pub/Sub.\nKeyed by the topic names.\nStructure is documented below.",
      ),
    ];
  }
}
