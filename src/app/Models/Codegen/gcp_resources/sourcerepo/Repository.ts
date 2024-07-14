import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  sourcerepo_RepositoryPubsubConfig,
  sourcerepo_RepositoryPubsubConfig_GetTypes,
} from "../types/sourcerepo_RepositoryPubsubConfig";

export interface RepositoryArgs {
  /*
Resource name of the repository, of the form `{{repo}}`.
The repo name may contain slashes. eg, `name/with/slash`


- - -
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
How this repository publishes a change in the repository through Cloud Pub/Sub.
Keyed by the topic names.
Structure is documented below.
*/
  pubsubConfigs?: Array<sourcerepo_RepositoryPubsubConfig>;
}
export class Repository extends Resource {
  /*
Resource name of the repository, of the form `{{repo}}`.
The repo name may contain slashes. eg, `name/with/slash`


- - -
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
How this repository publishes a change in the repository through Cloud Pub/Sub.
Keyed by the topic names.
Structure is documented below.
*/
  public pubsubConfigs?: Array<sourcerepo_RepositoryPubsubConfig>;

  // The disk usage of the repo, in bytes.
  public size?: number;

  // URL to clone the repository from Google Cloud Source Repositories.
  public url?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Resource name of the repository, of the form `{{repo}}`.\nThe repo name may contain slashes. eg, `name/with/slash`\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "pubsubConfigs",
        "How this repository publishes a change in the repository through Cloud Pub/Sub.\nKeyed by the topic names.\nStructure is documented below.",
        sourcerepo_RepositoryPubsubConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
