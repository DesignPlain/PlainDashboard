import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ServiceIamPolicyArgs {
  /*
The policy data generated by
a `gcp.organizations.getIAMPolicy` data source.
*/
  PolicyData?: string;

  //
  ServiceName?: string;
}
export class ServiceIamPolicy extends Resource {
  /*
The policy data generated by
a `gcp.organizations.getIAMPolicy` data source.
*/
  public PolicyData?: string;

  //
  public ServiceName?: string;

  // (Computed) The etag of the IAM policy.
  public Etag?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "PolicyData",
        "The policy data generated by\na `gcp.organizations.getIAMPolicy` data source.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(InputType.String, "ServiceName", "", [], true, true),
    ];
  }
}
