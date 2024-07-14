import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface MemberAssociationArgs {
  // ID of the account to associate
  accountId?: string;
}
export class MemberAssociation extends Resource {
  // ID of the account to associate
  public accountId?: string;

  // Account ID of the delegated administrator account
  public delegatedAdminAccountId?: string;

  // Status of the member relationship
  public relationshipStatus?: string;

  // Date and time of the last update of the relationship
  public updatedAt?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "accountId",
        "ID of the account to associate",
        [],
        true,
        true,
      ),
    ];
  }
}
