import { getGroupsGroupGroupKey } from "./getGroupsGroupGroupKey";
import { getGroupsGroupAdditionalGroupKey } from "./getGroupsGroupAdditionalGroupKey";

export interface getGroupsGroup {
  // The display name of the Group.
  DisplayName?: string;

  // EntityKey of the Group.  Structure is documented below.
  GroupKeys?: Array<getGroupsGroupGroupKey>;

  /*
The initial configuration options for creating a Group.

See the
[API reference](https://cloud.google.com/identity/docs/reference/rest/v1beta1/groups/create#initialgroupconfig)
for possible values. Default value: "EMPTY" Possible values: ["INITIAL_GROUP_CONFIG_UNSPECIFIED", "WITH_INITIAL_OWNER", "EMPTY"]
*/
  InitialGroupConfig?: string;

  // Resource name of the Group in the format: groups/{group_id}, where `group_id` is the unique ID assigned to the Group.
  Name?: string;

  // The parent resource under which to list all Groups. Must be of the form identitysources/{identity_source_id} for external- identity-mapped groups or customers/{customer_id} for Google Groups.
  Parent?: string;

  // The time when the Group was last updated.
  UpdateTime?: string;

  // Additional group keys associated with the Group
  AdditionalGroupKeys?: Array<getGroupsGroupAdditionalGroupKey>;

  // The time when the Group was created.
  CreateTime?: string;

  // An extended description to help users determine the purpose of a Group.
  Description?: string;

  /*
The labels that apply to the Group.
Contains 'cloudidentity.googleapis.com/groups.discussion_forum': '' if the Group is a Google Group or
'system/groups/external': '' if the Group is an external-identity-mapped group.
*/
  Labels?: Map<string, string>;
}
