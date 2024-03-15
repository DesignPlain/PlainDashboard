import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ConsumersIAMBindingCondition } from "../types/ConsumersIAMBindingCondition";

export interface ConsumersIAMBindingArgs {
  //
  Condition?: ConsumersIAMBindingCondition;

  //
  ConsumerProject?: string;

  //
  Members?: Array<string>;

  /*
The role that should be applied. Only one
`gcp.endpoints.ConsumersIAMBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  Role?: string;

  //
  ServiceName?: string;
}
export class ConsumersIAMBinding extends Resource {
  //
  public ServiceName?: string;

  //
  public Condition?: ConsumersIAMBindingCondition;

  //
  public ConsumerProject?: string;

  // (Computed) The etag of the IAM policy.
  public Etag?: string;

  //
  public Members?: Array<string>;

  /*
The role that should be applied. Only one
`gcp.endpoints.ConsumersIAMBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  public Role?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Condition", ""),
      new DynamicUIProps(InputType.String, "ConsumerProject", ""),
      new DynamicUIProps(InputType.DropDown, "Members", ""),
      new DynamicUIProps(
        InputType.String,
        "Role",
        "The role that should be applied. Only one\n`gcp.endpoints.ConsumersIAMBinding` can be used per role. Note that custom roles must be of the format\n`[projects|organizations]/{parent-name}/roles/{role-name}`.",
      ),
      new DynamicUIProps(InputType.String, "ServiceName", ""),
    ];
  }
}
