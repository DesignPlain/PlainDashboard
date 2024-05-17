import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networksecurity_AddressGroupIamMemberCondition,
  Networksecurity_AddressGroupIamMemberCondition_GetTypes,
} from "../types/Networksecurity_AddressGroupIamMemberCondition";

export interface AddressGroupIamMemberArgs {
  //
  Name?: string;

  //
  Project?: string;

  //
  Role?: string;

  //
  Condition?: Networksecurity_AddressGroupIamMemberCondition;

  //
  Location?: string;

  //
  Member?: string;
}
export class AddressGroupIamMember extends Resource {
  //
  public Member?: string;

  //
  public Name?: string;

  //
  public Project?: string;

  //
  public Role?: string;

  //
  public Condition?: Networksecurity_AddressGroupIamMemberCondition;

  //
  public Etag?: string;

  //
  public Location?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Member", "", [], true, true),
      new DynamicUIProps(InputType.String, "Name", "", [], false, true),
      new DynamicUIProps(InputType.String, "Project", "", [], false, true),
      new DynamicUIProps(InputType.String, "Role", "", [], true, true),
      new DynamicUIProps(
        InputType.Object,
        "Condition",
        "",
        Networksecurity_AddressGroupIamMemberCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "Location", "", [], false, true),
    ];
  }
}
