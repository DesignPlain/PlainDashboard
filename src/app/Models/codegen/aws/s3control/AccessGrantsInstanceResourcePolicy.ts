import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface AccessGrantsInstanceResourcePolicyArgs {
  //
  accountId?: string;

  // The policy document.
  policy?: string;
}
export class AccessGrantsInstanceResourcePolicy extends DS_Resource {
  //
  public accountId?: string;

  // The policy document.
  public policy?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "accountId",
        "",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "policy",
        "The policy document.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
