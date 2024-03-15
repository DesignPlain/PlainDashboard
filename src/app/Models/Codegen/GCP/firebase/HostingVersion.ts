import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { HostingVersionConfig } from "../types/HostingVersionConfig";

export interface HostingVersionArgs {
  /*
The configuration for the behavior of the site. This configuration exists in the `firebase.json` file.
Structure is documented below.
*/
  Config?: HostingVersionConfig;

  /*
Required. The ID of the site in which to create this Version.


- - -
*/
  SiteId?: string;
}
export class HostingVersion extends Resource {
  /*
The configuration for the behavior of the site. This configuration exists in the `firebase.json` file.
Structure is documented below.
*/
  public Config?: HostingVersionConfig;

  /*
The fully-qualified resource name for the version, in the format:
sites/SITE_ID/versions/VERSION_ID
*/
  public Name?: string;

  /*
Required. The ID of the site in which to create this Version.


- - -
*/
  public SiteId?: string;

  // The ID for the version as in sites/SITE_ID/versions/VERSION_ID
  public VersionId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Config",
        "The configuration for the behavior of the site. This configuration exists in the `firebase.json` file.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SiteId",
        "Required. The ID of the site in which to create this Version.\n\n\n- - -",
      ),
    ];
  }
}
