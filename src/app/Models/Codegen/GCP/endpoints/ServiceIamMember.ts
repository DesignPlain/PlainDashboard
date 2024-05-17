import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Endpoints_ServiceIamMemberCondition,
  Endpoints_ServiceIamMemberCondition_GetTypes,
} from "../types/Endpoints_ServiceIamMemberCondition";

export interface ServiceIamMemberArgs {
  //
  Member?: string;

  /*
The role that should be applied. Only one
`gcp.endpoints.ServiceIamBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  Role?: string;

  //
  ServiceName?: string;

  //
  Condition?: Endpoints_ServiceIamMemberCondition;
}
export class ServiceIamMember extends Resource {
  //
  public Condition?: Endpoints_ServiceIamMemberCondition;

  // (Computed) The etag of the IAM policy.
  public Etag?: string;

  //
  public Member?: string;

  /*
The role that should be applied. Only one
`gcp.endpoints.ServiceIamBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  public Role?: string;

  //
  public ServiceName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Member", "", [], true, true),
      new DynamicUIProps(
        InputType.String,
        "Role",
        "The role that should be applied. Only one\n`gcp.endpoints.ServiceIamBinding` can be used per role. Note that custom roles must be of the format\n`[projects|organizations]/{parent-name}/roles/{role-name}`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(InputType.String, "ServiceName", "", [], true, true),
      new DynamicUIProps(
        InputType.Object,
        "Condition",
        "",
        Endpoints_ServiceIamMemberCondition_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
