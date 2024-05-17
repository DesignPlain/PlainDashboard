import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Securitycenter_OrganizationCustomModuleCustomConfig,
  Securitycenter_OrganizationCustomModuleCustomConfig_GetTypes,
} from "../types/Securitycenter_OrganizationCustomModuleCustomConfig";

export interface OrganizationCustomModuleArgs {
  /*
The user specified custom configuration for the module.
Structure is documented below.
*/
  CustomConfig?: Securitycenter_OrganizationCustomModuleCustomConfig;

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

  // Numerical ID of the parent organization.
  Organization?: string;
}
export class OrganizationCustomModule extends Resource {
  // The editor that last updated the custom module.
  public LastEditor?: string;

  // Name of the property for the custom output.
  public Name?: string;

  // Numerical ID of the parent organization.
  public Organization?: string;

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
  public CustomConfig?: Securitycenter_OrganizationCustomModuleCustomConfig;

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
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "EnablementState",
        "The enablement state of the custom module.\nPossible values are: `ENABLED`, `DISABLED`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Organization",
        "Numerical ID of the parent organization.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "CustomConfig",
        "The user specified custom configuration for the module.\nStructure is documented below.",
        Securitycenter_OrganizationCustomModuleCustomConfig_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
