import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Endpoints_ConsumersIamBindingCondition,
  Endpoints_ConsumersIamBindingCondition_GetTypes,
} from "../types/Endpoints_ConsumersIamBindingCondition";

export interface ConsumersIamBindingArgs {
  //
  Condition?: Endpoints_ConsumersIamBindingCondition;

  //
  ConsumerProject?: string;

  //
  Members?: Array<string>;

  /*
The role that should be applied. Only one
`gcp.endpoints.ConsumersIamBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  Role?: string;

  //
  ServiceName?: string;
}
export class ConsumersIamBinding extends Resource {
  //
  public Members?: Array<string>;

  /*
The role that should be applied. Only one
`gcp.endpoints.ConsumersIamBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  public Role?: string;

  //
  public ServiceName?: string;

  //
  public Condition?: Endpoints_ConsumersIamBindingCondition;

  //
  public ConsumerProject?: string;

  // (Computed) The etag of the IAM policy.
  public Etag?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ConsumerProject",
        "",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Members",
        "",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Role",
        "The role that should be applied. Only one\n`gcp.endpoints.ConsumersIamBinding` can be used per role. Note that custom roles must be of the format\n`[projects|organizations]/{parent-name}/roles/{role-name}`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(InputType.String, "ServiceName", "", [], true, true),
      new DynamicUIProps(
        InputType.Object,
        "Condition",
        "",
        Endpoints_ConsumersIamBindingCondition_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
