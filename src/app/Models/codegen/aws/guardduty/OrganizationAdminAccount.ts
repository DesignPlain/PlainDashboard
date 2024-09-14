import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface OrganizationAdminAccountArgs {
  // AWS account identifier to designate as a delegated administrator for GuardDuty.
  adminAccountId?: string;
}
export class OrganizationAdminAccount extends DS_Resource {
  // AWS account identifier to designate as a delegated administrator for GuardDuty.
  public adminAccountId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "adminAccountId",
        "AWS account identifier to designate as a delegated administrator for GuardDuty.",
        () => [],
        true,
        true,
      ),
    ];
  }
}