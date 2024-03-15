import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { SharedflowMetaData } from "../types/SharedflowMetaData";

export interface SharedflowArgs {
  /*
Path to the config zip bundle.

- - -
*/
  ConfigBundle?: string;

  /*
A hash of local config bundle in string, user needs to use a Terraform Hash function of their choice. A change in hash
will trigger an update.
*/
  DetectMd5hash?: string;

  // The ID of the shared flow.
  Name?: string;

  // The Apigee Organization name associated with the Apigee instance.
  OrgId?: string;
}
export class Sharedflow extends Resource {
  // The ID of the shared flow.
  public Name?: string;

  // The Apigee Organization name associated with the Apigee instance.
  public OrgId?: string;

  // A list of revisions of this shared flow.
  public Revisions?: Array<string>;

  /*
Path to the config zip bundle.

- - -
*/
  public ConfigBundle?: string;

  /*
A hash of local config bundle in string, user needs to use a Terraform Hash function of their choice. A change in hash
will trigger an update.
*/
  public DetectMd5hash?: string;

  // The id of the most recently created revision for this shared flow.
  public LatestRevisionId?: string;

  // (Computed) Base 64 MD5 hash of the uploaded data. It is speculative as remote does not return hash of the bundle. Remote changes are detected using returned last_modified timestamp.
  public Md5hash?: string;

  /*
Metadata describing the shared flow.
Structure is documented below.
*/
  public MetaDatas?: Array<SharedflowMetaData>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ConfigBundle",
        "Path to the config zip bundle.\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "DetectMd5hash",
        "A hash of local config bundle in string, user needs to use a Terraform Hash function of their choice. A change in hash\nwill trigger an update.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The ID of the shared flow.",
      ),
      new DynamicUIProps(
        InputType.String,
        "OrgId",
        "The Apigee Organization name associated with the Apigee instance.",
      ),
    ];
  }
}
