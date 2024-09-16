import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface OrganizationDelegatedAdminAccountArgs {
  // An organization member account ID that you want to designate as a delegated administrator.
  accountId?: string;
}
export class OrganizationDelegatedAdminAccount extends DS_Resource {
  // The Amazon Resource Name (ARN) of the delegated administrator's account.
  public arn?: string;

  // The email address that is associated with the delegated administrator's AWS account.
  public email?: string;

  // The friendly name of the delegated administrator's account.
  public name?: string;

  // The AWS CloudTrail service principal name.
  public servicePrincipal?: string;

  // An organization member account ID that you want to designate as a delegated administrator.
  public accountId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'accountId',
        'An organization member account ID that you want to designate as a delegated administrator.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
