import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  securitycenter_FolderCustomModuleCustomConfig,
  securitycenter_FolderCustomModuleCustomConfig_GetTypes,
} from "../types/securitycenter_FolderCustomModuleCustomConfig";

export interface FolderCustomModuleArgs {
  // Numerical ID of the parent folder.
  folder?: string;

  /*
The user specified custom configuration for the module.
Structure is documented below.
*/
  customConfig?: securitycenter_FolderCustomModuleCustomConfig;

  /*
The display name of the Security Health Analytics custom module. This
display name becomes the finding category for all findings that are
returned by this custom module. The display name must be between 1 and
128 characters, start with a lowercase letter, and contain alphanumeric
characters or underscores only.
*/
  displayName?: string;

  /*
The enablement state of the custom module.
Possible values are: `ENABLED`, `DISABLED`.
*/
  enablementState?: string;
}
export class FolderCustomModule extends Resource {
  // Name of the property for the custom output.
  public name?: string;

  /*
The time at which the custom module was last updated.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public updateTime?: string;

  /*
If empty, indicates that the custom module was created in the organization, folder,
or project in which you are viewing the custom module. Otherwise, ancestor_module
specifies the organization or folder from which the custom module is inherited.
*/
  public ancestorModule?: string;

  /*
The user specified custom configuration for the module.
Structure is documented below.
*/
  public customConfig?: securitycenter_FolderCustomModuleCustomConfig;

  /*
The display name of the Security Health Analytics custom module. This
display name becomes the finding category for all findings that are
returned by this custom module. The display name must be between 1 and
128 characters, start with a lowercase letter, and contain alphanumeric
characters or underscores only.
*/
  public displayName?: string;

  /*
The enablement state of the custom module.
Possible values are: `ENABLED`, `DISABLED`.
*/
  public enablementState?: string;

  // Numerical ID of the parent folder.
  public folder?: string;

  // The editor that last updated the custom module.
  public lastEditor?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "folder",
        "Numerical ID of the parent folder.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "customConfig",
        "The user specified custom configuration for the module.\nStructure is documented below.",
        securitycenter_FolderCustomModuleCustomConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "The display name of the Security Health Analytics custom module. This\ndisplay name becomes the finding category for all findings that are\nreturned by this custom module. The display name must be between 1 and\n128 characters, start with a lowercase letter, and contain alphanumeric\ncharacters or underscores only.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "enablementState",
        "The enablement state of the custom module.\nPossible values are: `ENABLED`, `DISABLED`.",
        [],
        true,
        false,
      ),
    ];
  }
}
