import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface DomainPolicyArgs {
  // IAM policy document specifying the access policies for the domain
  accessPolicies?: string;

  // Name of the domain.
  domainName?: string;
}
export class DomainPolicy extends Resource {
  // IAM policy document specifying the access policies for the domain
  public accessPolicies?: string;

  // Name of the domain.
  public domainName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "accessPolicies",
        "IAM policy document specifying the access policies for the domain",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "domainName",
        "Name of the domain.",
        [],
        true,
        false,
      ),
    ];
  }
}
