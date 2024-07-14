import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface GroupMembershipArgs {
  // The identifier for a group in the Identity Store.
  groupId?: string;

  // Identity Store ID associated with the Single Sign-On Instance.
  identityStoreId?: string;

  // The identifier for a user in the Identity Store.
  memberId?: string;
}
export class GroupMembership extends Resource {
  // The identifier for a group in the Identity Store.
  public groupId?: string;

  // Identity Store ID associated with the Single Sign-On Instance.
  public identityStoreId?: string;

  // The identifier for a user in the Identity Store.
  public memberId?: string;

  // The identifier of the newly created group membership in the Identity Store.
  public membershipId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "groupId",
        "The identifier for a group in the Identity Store.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "identityStoreId",
        "Identity Store ID associated with the Single Sign-On Instance.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "memberId",
        "The identifier for a user in the Identity Store.",
        [],
        true,
        true,
      ),
    ];
  }
}
