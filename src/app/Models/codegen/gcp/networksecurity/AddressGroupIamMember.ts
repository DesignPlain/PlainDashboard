import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  networksecurity_AddressGroupIamMemberCondition,
  networksecurity_AddressGroupIamMemberCondition_GetTypes,
} from "../types/networksecurity_AddressGroupIamMemberCondition";

export interface AddressGroupIamMemberArgs {
  //
  member?: string;

  //
  name?: string;

  //
  project?: string;

  //
  role?: string;

  //
  condition?: networksecurity_AddressGroupIamMemberCondition;

  //
  location?: string;
}
export class AddressGroupIamMember extends DS_Resource {
  //
  public location?: string;

  //
  public member?: string;

  //
  public name?: string;

  //
  public project?: string;

  //
  public role?: string;

  //
  public condition?: networksecurity_AddressGroupIamMemberCondition;

  //
  public etag?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "name", "", () => [], false, true),
      new DynamicUIProps(
        InputType.String,
        "project",
        "",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "role", "", () => [], true, true),
      new DynamicUIProps(
        InputType.Object,
        "condition",
        "",
        () => networksecurity_AddressGroupIamMemberCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "member", "", () => [], true, true),
    ];
  }
}
