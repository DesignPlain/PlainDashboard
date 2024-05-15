import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Migrationcenter_PreferenceSetVirtualMachinePreferences,
  Migrationcenter_PreferenceSetVirtualMachinePreferences_GetTypes,
} from "../types/Migrationcenter_PreferenceSetVirtualMachinePreferences";

export interface PreferenceSetArgs {
  // A description of the preference set.
  Description?: string;

  // User-friendly display name. Maximum length is 63 characters.
  DisplayName?: string;

  // Part of `parent`. See documentation of `projectsId`.
  Location?: string;

  /*
Required. User specified ID for the preference set. It will become the last component of the preference set name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression `a-z?`.


- - -
*/
  PreferenceSetId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
VirtualMachinePreferences enables you to create sets of assumptions, for example, a geographical location and pricing track, for your migrated virtual machines. The set of preferences influence recommendations for migrating virtual machine assets.
Structure is documented below.
*/
  VirtualMachinePreferences?: Migrationcenter_PreferenceSetVirtualMachinePreferences;
}
export class PreferenceSet extends Resource {
  // Output only. The timestamp when the preference set was created.
  public CreateTime?: string;

  // Output only. Name of the preference set.
  public Name?: string;

  // A description of the preference set.
  public Description?: string;

  // User-friendly display name. Maximum length is 63 characters.
  public DisplayName?: string;

  // Part of `parent`. See documentation of `projectsId`.
  public Location?: string;

  /*
Required. User specified ID for the preference set. It will become the last component of the preference set name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression `a-z?`.


- - -
*/
  public PreferenceSetId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Output only. The timestamp when the preference set was last updated.
  public UpdateTime?: string;

  /*
VirtualMachinePreferences enables you to create sets of assumptions, for example, a geographical location and pricing track, for your migrated virtual machines. The set of preferences influence recommendations for migrating virtual machine assets.
Structure is documented below.
*/
  public VirtualMachinePreferences?: Migrationcenter_PreferenceSetVirtualMachinePreferences;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "VirtualMachinePreferences",
        "VirtualMachinePreferences enables you to create sets of assumptions, for example, a geographical location and pricing track, for your migrated virtual machines. The set of preferences influence recommendations for migrating virtual machine assets.\nStructure is documented below.",
        Migrationcenter_PreferenceSetVirtualMachinePreferences_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A description of the preference set.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "User-friendly display name. Maximum length is 63 characters.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "Part of `parent`. See documentation of `projectsId`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "PreferenceSetId",
        "Required. User specified ID for the preference set. It will become the last component of the preference set name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression `a-z?`.\n\n\n- - -",
        [],
        true,
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
    ];
  }
}
