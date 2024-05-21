import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  endpoints_ServiceIamBindingCondition,
  endpoints_ServiceIamBindingCondition_GetTypes,
} from "../types/endpoints_ServiceIamBindingCondition";

export interface ServiceIamBindingArgs {
  //
  serviceName?: string;

  //
  condition?: endpoints_ServiceIamBindingCondition;

  //
  members?: Array<string>;

  /*
The role that should be applied. Only one
`gcp.endpoints.ServiceIamBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  role?: string;
}
export class ServiceIamBinding extends Resource {
  //
  public condition?: endpoints_ServiceIamBindingCondition;

  // (Computed) The etag of the IAM policy.
  public etag?: string;

  //
  public members?: Array<string>;

  /*
The role that should be applied. Only one
`gcp.endpoints.ServiceIamBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  public role?: string;

  //
  public serviceName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "members",
        "",
        InputType_String_GetTypes(),
        true,
        false,
      ),
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
        endpoints_ServiceIamBindingCondition_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
