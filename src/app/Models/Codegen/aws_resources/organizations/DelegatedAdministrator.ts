import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface DelegatedAdministratorArgs {
  // The account ID number of the member account in the organization to register as a delegated administrator.
  accountId?: string;

  // The service principal of the AWS service for which you want to make the member account a delegated administrator.
  servicePrincipal?: string;
}
export class DelegatedAdministrator extends Resource {
  // The date when the account was made a delegated administrator.
  public delegationEnabledDate?: string;

  // The email address that is associated with the delegated administrator's AWS account.
  public email?: string;

  // The method by which the delegated administrator's account joined the organization.
  public joinedMethod?: string;

  // The date when the delegated administrator's account became a part of the organization.
  public joinedTimestamp?: string;

  // The friendly name of the delegated administrator's account.
  public name?: string;

  // The service principal of the AWS service for which you want to make the member account a delegated administrator.
  public servicePrincipal?: string;

  // The account ID number of the member account in the organization to register as a delegated administrator.
  public accountId?: string;

  // The Amazon Resource Name (ARN) of the delegated administrator's account.
  public arn?: string;

  // The status of the delegated administrator's account in the organization.
  public status?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "accountId",
        "The account ID number of the member account in the organization to register as a delegated administrator.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "servicePrincipal",
        "The service principal of the AWS service for which you want to make the member account a delegated administrator.",
        [],
        true,
        true,
      ),
    ];
  }
}
