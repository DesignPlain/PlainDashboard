import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  securitycenter_InstanceIamMemberCondition,
  securitycenter_InstanceIamMemberCondition_GetTypes,
} from "../types/securitycenter_InstanceIamMemberCondition";

export interface InstanceIamMemberArgs {
  //
  condition?: securitycenter_InstanceIamMemberCondition;

  //
  member?: string;

  // The ID of the instance or a fully qualified identifier for the instance.
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The region of the Data Fusion instance.
  region?: string;

  //
  role?: string;
}
export class InstanceIamMember extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The region of the Data Fusion instance.
  public region?: string;

  //
  public role?: string;

  //
  public condition?: securitycenter_InstanceIamMemberCondition;

  //
  public etag?: string;

  //
  public member?: string;

  // The ID of the instance or a fully qualified identifier for the instance.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "condition",
        "",
        securitycenter_InstanceIamMemberCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "member", "", [], true, true),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The ID of the instance or a fully qualified identifier for the instance.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "The region of the Data Fusion instance.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "role", "", [], true, true),
    ];
  }
}
