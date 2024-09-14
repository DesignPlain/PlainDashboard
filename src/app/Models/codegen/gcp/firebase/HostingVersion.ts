import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  firebase_HostingVersionConfig,
  firebase_HostingVersionConfig_GetTypes,
} from "../types/firebase_HostingVersionConfig";

export interface HostingVersionArgs {
  /*
The configuration for the behavior of the site. This configuration exists in the `firebase.json` file.
Structure is documented below.
*/
  config?: firebase_HostingVersionConfig;

  /*
Required. The ID of the site in which to create this Version.


- - -
*/
  siteId?: string;
}
export class HostingVersion extends DS_Resource {
  /*
The configuration for the behavior of the site. This configuration exists in the `firebase.json` file.
Structure is documented below.
*/
  public config?: firebase_HostingVersionConfig;

  /*
The fully-qualified resource name for the version, in the format:
sites/SITE_ID/versions/VERSION_ID
*/
  public name?: string;

  /*
Required. The ID of the site in which to create this Version.


- - -
*/
  public siteId?: string;

  // The ID for the version as in sites/SITE_ID/versions/VERSION_ID
  public versionId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "config",
        "The configuration for the behavior of the site. This configuration exists in the `firebase.json` file.\nStructure is documented below.",
        () => firebase_HostingVersionConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "siteId",
        "Required. The ID of the site in which to create this Version.\n\n\n- - -",
        () => [],
        true,
        true,
      ),
    ];
  }
}
