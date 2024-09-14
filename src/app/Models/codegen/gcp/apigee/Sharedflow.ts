import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  apigee_SharedflowMetaData,
  apigee_SharedflowMetaData_GetTypes,
} from "../types/apigee_SharedflowMetaData";

export interface SharedflowArgs {
  /*
A hash of local config bundle in string, user needs to use a Terraform Hash function of their choice. A change in hash
will trigger an update.
*/
  detectMd5hash?: string;

  // The ID of the shared flow.
  name?: string;

  // The Apigee Organization name associated with the Apigee instance.
  orgId?: string;

  /*
Path to the config zip bundle.

- - -
*/
  configBundle?: string;
}
export class Sharedflow extends DS_Resource {
  /*
Metadata describing the shared flow.
Structure is documented below.
*/
  public metaDatas?: Array<apigee_SharedflowMetaData>;

  // The ID of the shared flow.
  public name?: string;

  // The Apigee Organization name associated with the Apigee instance.
  public orgId?: string;

  // A list of revisions of this shared flow.
  public revisions?: Array<string>;

  /*
Path to the config zip bundle.

- - -
*/
  public configBundle?: string;

  /*
A hash of local config bundle in string, user needs to use a Terraform Hash function of their choice. A change in hash
will trigger an update.
*/
  public detectMd5hash?: string;

  // The id of the most recently created revision for this shared flow.
  public latestRevisionId?: string;

  // (Computed) Base 64 MD5 hash of the uploaded data. It is speculative as remote does not return hash of the bundle. Remote changes are detected using returned last_modified timestamp.
  public md5hash?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "detectMd5hash",
        "A hash of local config bundle in string, user needs to use a Terraform Hash function of their choice. A change in hash\nwill trigger an update.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The ID of the shared flow.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "orgId",
        "The Apigee Organization name associated with the Apigee instance.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "configBundle",
        "Path to the config zip bundle.\n\n- - -",
        () => [],
        true,
        false,
      ),
    ];
  }
}
