import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Sourcerepo_RepositoryPubsubConfig,
  Sourcerepo_RepositoryPubsubConfig_GetTypes,
} from "../types/Sourcerepo_RepositoryPubsubConfig";

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
  PubsubConfigs?: Array<Sourcerepo_RepositoryPubsubConfig>;
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
  public PubsubConfigs?: Array<Sourcerepo_RepositoryPubsubConfig>;

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
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "PubsubConfigs",
        "How this repository publishes a change in the repository through Cloud Pub/Sub.\nKeyed by the topic names.\nStructure is documented below.",
        Sourcerepo_RepositoryPubsubConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
