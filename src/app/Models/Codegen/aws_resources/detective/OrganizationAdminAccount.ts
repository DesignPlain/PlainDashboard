import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface OrganizationAdminAccountArgs {
  // AWS account identifier to designate as a delegated administrator for Detective.
  accountId?: string;
}
export class OrganizationAdminAccount extends Resource {
  // AWS account identifier to designate as a delegated administrator for Detective.
  public accountId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "accountId",
        "AWS account identifier to designate as a delegated administrator for Detective.",
        [],
        true,
        true,
      ),
    ];
  }
}
