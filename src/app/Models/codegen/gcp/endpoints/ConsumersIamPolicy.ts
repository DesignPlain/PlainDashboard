import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ConsumersIamPolicyArgs {
  //
  serviceName?: string;

  //
  consumerProject?: string;

  /*
The policy data generated by
a `gcp.organizations.getIAMPolicy` data source.
*/
  policyData?: string;
}
export class ConsumersIamPolicy extends DS_Resource {
  //
  public serviceName?: string;

  //
  public consumerProject?: string;

  // (Computed) The etag of the IAM policy.
  public etag?: string;

  /*
The policy data generated by
a `gcp.organizations.getIAMPolicy` data source.
*/
  public policyData?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "serviceName",
        "",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "consumerProject",
        "",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "policyData",
        "The policy data generated by\na `gcp.organizations.getIAMPolicy` data source.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
