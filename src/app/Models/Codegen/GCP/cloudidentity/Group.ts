import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudidentity_GroupGroupKey,
  Cloudidentity_GroupGroupKey_GetTypes,
} from "../types/Cloudidentity_GroupGroupKey";
import {
  Cloudidentity_GroupAdditionalGroupKey,
  Cloudidentity_GroupAdditionalGroupKey_GetTypes,
} from "../types/Cloudidentity_GroupAdditionalGroupKey";

export interface GroupArgs {
  /*
An extended description to help users determine the purpose of a Group.
Must not be longer than 4,096 characters.
*/
  Description?: string;

  // The display name of the Group.
  DisplayName?: string;

  /*
EntityKey of the Group.
Structure is documented below.
*/
  GroupKey?: Cloudidentity_GroupGroupKey;

  /*
The initial configuration options for creating a Group.
See the
[API reference](https://cloud.google.com/identity/docs/reference/rest/v1beta1/groups/create#initialgroupconfig)
for possible values.
Default value is `EMPTY`.
Possible values are: `INITIAL_GROUP_CONFIG_UNSPECIFIED`, `WITH_INITIAL_OWNER`, `EMPTY`.
*/
  InitialGroupConfig?: string;

  /*
One or more label entries that apply to the Group. Currently supported labels contain a key with an empty value.
Google Groups are the default type of group and have a label with a key of cloudidentity.googleapis.com/groups.discussion_forum and an empty value.
Existing Google Groups can have an additional label with a key of cloudidentity.googleapis.com/groups.security and an empty value added to them. This is an immutable change and the security label cannot be removed once added.
Dynamic groups have a label with a key of cloudidentity.googleapis.com/groups.dynamic.
Identity-mapped groups for Cloud Search have a label with a key of system/groups/external and an empty value.
*/
  Labels?: Map<string, string>;

  /*
The resource name of the entity under which this Group resides in the
Cloud Identity resource hierarchy.
Must be of the form identitysources/{identity_source_id} for external-identity-mapped
groups or customers/{customer_id} for Google Groups.
*/
  Parent?: string;
}
export class Group extends Resource {
  /*
EntityKey of the Group.
Structure is documented below.
*/
  public GroupKey?: Cloudidentity_GroupGroupKey;

  /*
The initial configuration options for creating a Group.
See the
[API reference](https://cloud.google.com/identity/docs/reference/rest/v1beta1/groups/create#initialgroupconfig)
for possible values.
Default value is `EMPTY`.
Possible values are: `INITIAL_GROUP_CONFIG_UNSPECIFIED`, `WITH_INITIAL_OWNER`, `EMPTY`.
*/
  public InitialGroupConfig?: string;

  /*
One or more label entries that apply to the Group. Currently supported labels contain a key with an empty value.
Google Groups are the default type of group and have a label with a key of cloudidentity.googleapis.com/groups.discussion_forum and an empty value.
Existing Google Groups can have an additional label with a key of cloudidentity.googleapis.com/groups.security and an empty value added to them. This is an immutable change and the security label cannot be removed once added.
Dynamic groups have a label with a key of cloudidentity.googleapis.com/groups.dynamic.
Identity-mapped groups for Cloud Search have a label with a key of system/groups/external and an empty value.
*/
  public Labels?: Map<string, string>;

  /*
The resource name of the entity under which this Group resides in the
Cloud Identity resource hierarchy.
Must be of the form identitysources/{identity_source_id} for external-identity-mapped
groups or customers/{customer_id} for Google Groups.
*/
  public Parent?: string;

  /*
Additional group keys associated with the Group
Structure is documented below.
*/
  public AdditionalGroupKeys?: Array<Cloudidentity_GroupAdditionalGroupKey>;

  // The time when the Group was created.
  public CreateTime?: string;

  /*
An extended description to help users determine the purpose of a Group.
Must not be longer than 4,096 characters.
*/
  public Description?: string;

  // The display name of the Group.
  public DisplayName?: string;

  /*
Resource name of the Group in the format: groups/{group_id}, where group_id
is the unique ID assigned to the Group.
*/
  public Name?: string;

  // The time when the Group was last updated.
  public UpdateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An extended description to help users determine the purpose of a Group.\nMust not be longer than 4,096 characters.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The display name of the Group.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "GroupKey",
        "EntityKey of the Group.\nStructure is documented below.",
        Cloudidentity_GroupGroupKey_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "InitialGroupConfig",
        "The initial configuration options for creating a Group.\nSee the\n[API reference](https://cloud.google.com/identity/docs/reference/rest/v1beta1/groups/create#initialgroupconfig)\nfor possible values.\nDefault value is `EMPTY`.\nPossible values are: `INITIAL_GROUP_CONFIG_UNSPECIFIED`, `WITH_INITIAL_OWNER`, `EMPTY`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "One or more label entries that apply to the Group. Currently supported labels contain a key with an empty value.\nGoogle Groups are the default type of group and have a label with a key of cloudidentity.googleapis.com/groups.discussion_forum and an empty value.\nExisting Google Groups can have an additional label with a key of cloudidentity.googleapis.com/groups.security and an empty value added to them. This is an immutable change and the security label cannot be removed once added.\nDynamic groups have a label with a key of cloudidentity.googleapis.com/groups.dynamic.\nIdentity-mapped groups for Cloud Search have a label with a key of system/groups/external and an empty value.",
        InputType_Map_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The resource name of the entity under which this Group resides in the\nCloud Identity resource hierarchy.\nMust be of the form identitysources/{identity_source_id} for external-identity-mapped\ngroups or customers/{customer_id} for Google Groups.",
        [],
        true,
        true,
      ),
    ];
  }
}
