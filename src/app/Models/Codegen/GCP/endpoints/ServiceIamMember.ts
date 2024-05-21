import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  endpoints_ServiceIamMemberCondition,
  endpoints_ServiceIamMemberCondition_GetTypes,
} from "../types/endpoints_ServiceIamMemberCondition";

export interface ServiceIamMemberArgs {
  //
  condition?: endpoints_ServiceIamMemberCondition;

  //
  member?: string;

  /*
The role that should be applied. Only one
`gcp.endpoints.ServiceIamBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  role?: string;

  //
  serviceName?: string;
}
export class ServiceIamMember extends Resource {
  //
  public member?: string;

  /*
The role that should be applied. Only one
`gcp.endpoints.ServiceIamBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  public role?: string;

  //
  public serviceName?: string;

  //
  public condition?: endpoints_ServiceIamMemberCondition;

  // (Computed) The etag of the IAM policy.
  public etag?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "role",
        "The role that should be applied. Only one\n`gcp.endpoints.ServiceIamBinding` can be used per role. Note that custom roles must be of the format\n`[projects|organizations]/{parent-name}/roles/{role-name}`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(InputType.String, "serviceName", "", [], true, true),
      new DynamicUIProps(
        InputType.Object,
        "condition",
        "",
        endpoints_ServiceIamMemberCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "member", "", [], true, true),
    ];
  }
}
