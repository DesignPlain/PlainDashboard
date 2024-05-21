import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  networksecurity_AddressGroupIamBindingCondition,
  networksecurity_AddressGroupIamBindingCondition_GetTypes,
} from "../types/networksecurity_AddressGroupIamBindingCondition";

export interface AddressGroupIamBindingArgs {
  //
  role?: string;

  //
  condition?: networksecurity_AddressGroupIamBindingCondition;

  //
  location?: string;

  //
  members?: Array<string>;

  //
  name?: string;

  //
  project?: string;
}
export class AddressGroupIamBinding extends Resource {
  //
  public role?: string;

  //
  public condition?: networksecurity_AddressGroupIamBindingCondition;

  //
  public etag?: string;

  //
  public location?: string;

  //
  public members?: Array<string>;

  //
  public name?: string;

  //
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "name", "", [], false, true),
      new DynamicUIProps(InputType.String, "project", "", [], false, true),
      new DynamicUIProps(InputType.String, "role", "", [], true, true),
      new DynamicUIProps(
        InputType.Object,
        "condition",
        "",
        networksecurity_AddressGroupIamBindingCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "location", "", [], false, true),
      new DynamicUIProps(
        InputType.Array,
        "members",
        "",
        InputType_String_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
