import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ConsumersIamPolicyArgs {
  /*
The policy data generated by
a `gcp.organizations.getIAMPolicy` data source.
*/
  policyData?: string;

  //
  serviceName?: string;

  //
  consumerProject?: string;
}
export class ConsumersIamPolicy extends Resource {
  /*
The policy data generated by
a `gcp.organizations.getIAMPolicy` data source.
*/
  public policyData?: string;

  //
  public serviceName?: string;

  //
  public consumerProject?: string;

  // (Computed) The etag of the IAM policy.
  public etag?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "serviceName", "", [], true, true),
      new DynamicUIProps(
        InputType.String,
        "consumerProject",
        "",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "policyData",
        "The policy data generated by\na `gcp.organizations.getIAMPolicy` data source.",
        [],
        true,
        false,
      ),
    ];
  }
}