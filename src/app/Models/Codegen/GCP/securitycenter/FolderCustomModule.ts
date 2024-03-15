import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { FolderCustomModuleCustomConfig } from "../types/FolderCustomModuleCustomConfig";

export interface FolderCustomModuleArgs {
  /*
The user specified custom configuration for the module.
Structure is documented below.
*/
  CustomConfig?: FolderCustomModuleCustomConfig;

  /*
The display name of the Security Health Analytics custom module. This
display name becomes the finding category for all findings that are
returned by this custom module. The display name must be between 1 and
128 characters, start with a lowercase letter, and contain alphanumeric
characters or underscores only.
*/
  DisplayName?: string;

  /*
The enablement state of the custom module.
Possible values are: `ENABLED`, `DISABLED`.
*/
  EnablementState?: string;

  // Numerical ID of the parent folder.
  Folder?: string;
}
export class FolderCustomModule extends Resource {
  // Numerical ID of the parent folder.
  public Folder?: string;

  // The editor that last updated the custom module.
  public LastEditor?: string;

  // Name of the property for the custom output.
  public Name?: string;

  /*
The time at which the custom module was last updated.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public UpdateTime?: string;

  /*
If empty, indicates that the custom module was created in the organization, folder,
or project in which you are viewing the custom module. Otherwise, ancestor_module
specifies the organization or folder from which the custom module is inherited.
*/
  public AncestorModule?: string;

  /*
The user specified custom configuration for the module.
Structure is documented below.
*/
  public CustomConfig?: FolderCustomModuleCustomConfig;

  /*
The display name of the Security Health Analytics custom module. This
display name becomes the finding category for all findings that are
returned by this custom module. The display name must be between 1 and
128 characters, start with a lowercase letter, and contain alphanumeric
characters or underscores only.
*/
  public DisplayName?: string;

  /*
The enablement state of the custom module.
Possible values are: `ENABLED`, `DISABLED`.
*/
  public EnablementState?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The display name of the Security Health Analytics custom module. This\ndisplay name becomes the finding category for all findings that are\nreturned by this custom module. The display name must be between 1 and\n128 characters, start with a lowercase letter, and contain alphanumeric\ncharacters or underscores only.",
      ),
      new DynamicUIProps(
        InputType.String,
        "EnablementState",
        "The enablement state of the custom module.\nPossible values are: `ENABLED`, `DISABLED`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Folder",
        "Numerical ID of the parent folder.",
      ),
      new DynamicUIProps(
        InputType.String,
        "CustomConfig",
        "The user specified custom configuration for the module.\nStructure is documented below.",
      ),
    ];
  }
}
