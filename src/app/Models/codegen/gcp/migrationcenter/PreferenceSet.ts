import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  migrationcenter_PreferenceSetVirtualMachinePreferences,
  migrationcenter_PreferenceSetVirtualMachinePreferences_GetTypes,
} from "../types/migrationcenter_PreferenceSetVirtualMachinePreferences";

export interface PreferenceSetArgs {
  /*
Required. User specified ID for the preference set. It will become the last component of the preference set name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression `a-z?`.


- - -
*/
  preferenceSetId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
VirtualMachinePreferences enables you to create sets of assumptions, for example, a geographical location and pricing track, for your migrated virtual machines. The set of preferences influence recommendations for migrating virtual machine assets.
Structure is documented below.
*/
  virtualMachinePreferences?: migrationcenter_PreferenceSetVirtualMachinePreferences;

  // A description of the preference set.
  description?: string;

  // User-friendly display name. Maximum length is 63 characters.
  displayName?: string;

  // Part of `parent`. See documentation of `projectsId`.
  location?: string;
}
export class PreferenceSet extends DS_Resource {
  // User-friendly display name. Maximum length is 63 characters.
  public displayName?: string;

  // Part of `parent`. See documentation of `projectsId`.
  public location?: string;

  /*
Required. User specified ID for the preference set. It will become the last component of the preference set name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression `a-z?`.


- - -
*/
  public preferenceSetId?: string;

  /*
VirtualMachinePreferences enables you to create sets of assumptions, for example, a geographical location and pricing track, for your migrated virtual machines. The set of preferences influence recommendations for migrating virtual machine assets.
Structure is documented below.
*/
  public virtualMachinePreferences?: migrationcenter_PreferenceSetVirtualMachinePreferences;

  // Output only. The timestamp when the preference set was created.
  public createTime?: string;

  // A description of the preference set.
  public description?: string;

  // Output only. Name of the preference set.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Output only. The timestamp when the preference set was last updated.
  public updateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "preferenceSetId",
        "Required. User specified ID for the preference set. It will become the last component of the preference set name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression `a-z?`.\n\n\n- - -",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "virtualMachinePreferences",
        "VirtualMachinePreferences enables you to create sets of assumptions, for example, a geographical location and pricing track, for your migrated virtual machines. The set of preferences influence recommendations for migrating virtual machine assets.\nStructure is documented below.",
        () => migrationcenter_PreferenceSetVirtualMachinePreferences_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description of the preference set.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "User-friendly display name. Maximum length is 63 characters.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "Part of `parent`. See documentation of `projectsId`.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
