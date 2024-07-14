import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface AccessGrantsInstanceResourcePolicyArgs {
  //
  accountId?: string;

  // The policy document.
  policy?: string;
}
export class AccessGrantsInstanceResourcePolicy extends Resource {
  //
  public accountId?: string;

  // The policy document.
  public policy?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "policy",
        "The policy document.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(InputType.String, "accountId", "", [], false, false),
    ];
  }
}
