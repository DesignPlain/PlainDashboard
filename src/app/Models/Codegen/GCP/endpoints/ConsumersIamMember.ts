import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ConsumersIAMMemberCondition } from "../types/ConsumersIAMMemberCondition";

export interface ConsumersIAMMemberArgs {
  //
  Member?: string;

  /*
The role that should be applied. Only one
`gcp.endpoints.ConsumersIAMBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  Role?: string;

  //
  ServiceName?: string;

  //
  Condition?: ConsumersIAMMemberCondition;

  //
  ConsumerProject?: string;
}
export class ConsumersIAMMember extends Resource {
  // (Computed) The etag of the IAM policy.
  public Etag?: string;

  //
  public Member?: string;

  /*
The role that should be applied. Only one
`gcp.endpoints.ConsumersIAMBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  public Role?: string;

  //
  public ServiceName?: string;

  //
  public Condition?: ConsumersIAMMemberCondition;

  //
  public ConsumerProject?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Member", ""),
      new DynamicUIProps(
        InputType.String,
        "Role",
        "The role that should be applied. Only one\n`gcp.endpoints.ConsumersIAMBinding` can be used per role. Note that custom roles must be of the format\n`[projects|organizations]/{parent-name}/roles/{role-name}`.",
      ),
      new DynamicUIProps(InputType.String, "ServiceName", ""),
      new DynamicUIProps(InputType.String, "Condition", ""),
      new DynamicUIProps(InputType.String, "ConsumerProject", ""),
    ];
  }
}
