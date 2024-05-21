import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  networksecurity_AddressGroupIamMemberCondition,
  networksecurity_AddressGroupIamMemberCondition_GetTypes,
} from "../types/networksecurity_AddressGroupIamMemberCondition";

export interface AddressGroupIamMemberArgs {
  //
  condition?: networksecurity_AddressGroupIamMemberCondition;

  //
  location?: string;

  //
  member?: string;

  //
  name?: string;

  //
  project?: string;

  //
  role?: string;
}
export class AddressGroupIamMember extends Resource {
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

  //
  public location?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "condition",
        "",
        networksecurity_AddressGroupIamMemberCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "location", "", [], false, true),
      new DynamicUIProps(InputType.String, "member", "", [], true, true),
      new DynamicUIProps(InputType.String, "name", "", [], false, true),
      new DynamicUIProps(InputType.String, "project", "", [], false, true),
      new DynamicUIProps(InputType.String, "role", "", [], true, true),
    ];
  }
}
