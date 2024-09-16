import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface MemberAssociationArgs {
  // ID of the account to associate
  accountId?: string;
}
export class MemberAssociation extends DS_Resource {
  // Account ID of the delegated administrator account
  public delegatedAdminAccountId?: string;

  // Status of the member relationship
  public relationshipStatus?: string;

  // Date and time of the last update of the relationship
  public updatedAt?: string;

  // ID of the account to associate
  public accountId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'accountId',
        'ID of the account to associate',
        () => [],
        true,
        true,
      ),
    ];
  }
}
