import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ServiceIAMBindingCondition } from "../types/ServiceIAMBindingCondition";

export interface ServiceIAMBindingArgs {
  //
  Condition?: ServiceIAMBindingCondition;

  //
  Members?: Array<string>;

  /*
The role that should be applied. Only one
`gcp.endpoints.ServiceIAMBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  Role?: string;

  //
  ServiceName?: string;
}
export class ServiceIAMBinding extends Resource {
  //
  public Condition?: ServiceIAMBindingCondition;

  // (Computed) The etag of the IAM policy.
  public Etag?: string;

  //
  public Members?: Array<string>;

  /*
The role that should be applied. Only one
`gcp.endpoints.ServiceIAMBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  public Role?: string;

  //
  public ServiceName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Condition", ""),
      new DynamicUIProps(InputType.DropDown, "Members", ""),
      new DynamicUIProps(
        InputType.String,
        "Role",
        "The role that should be applied. Only one\n`gcp.endpoints.ServiceIAMBinding` can be used per role. Note that custom roles must be of the format\n`[projects|organizations]/{parent-name}/roles/{role-name}`.",
      ),
      new DynamicUIProps(InputType.String, "ServiceName", ""),
    ];
  }
}
