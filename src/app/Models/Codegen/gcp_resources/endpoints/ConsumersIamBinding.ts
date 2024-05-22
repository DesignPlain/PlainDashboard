import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  endpoints_ConsumersIamBindingCondition,
  endpoints_ConsumersIamBindingCondition_GetTypes,
} from "../types/endpoints_ConsumersIamBindingCondition";

export interface ConsumersIamBindingArgs {
  //
  members?: Array<string>;

  /*
The role that should be applied. Only one
`gcp.endpoints.ConsumersIamBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  role?: string;

  //
  serviceName?: string;

  //
  condition?: endpoints_ConsumersIamBindingCondition;

  //
  consumerProject?: string;
}
export class ConsumersIamBinding extends Resource {
  //
  public serviceName?: string;

  //
  public condition?: endpoints_ConsumersIamBindingCondition;

  //
  public consumerProject?: string;

  // (Computed) The etag of the IAM policy.
  public etag?: string;

  //
  public members?: Array<string>;

  /*
The role that should be applied. Only one
`gcp.endpoints.ConsumersIamBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  public role?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "role",
        "The role that should be applied. Only one\n`gcp.endpoints.ConsumersIamBinding` can be used per role. Note that custom roles must be of the format\n`[projects|organizations]/{parent-name}/roles/{role-name}`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(InputType.String, "serviceName", "", [], true, true),
      new DynamicUIProps(
        InputType.Object,
        "condition",
        "",
        endpoints_ConsumersIamBindingCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "consumerProject",
        "",
        [],
        true,
        true,
      ),
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
