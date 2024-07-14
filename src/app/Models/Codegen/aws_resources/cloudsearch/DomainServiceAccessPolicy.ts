import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface DomainServiceAccessPolicyArgs {
  // The access rules you want to configure. These rules replace any existing rules. See the [AWS documentation](https://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html) for details.
  accessPolicy?: string;

  // The CloudSearch domain name the policy applies to.
  domainName?: string;
}
export class DomainServiceAccessPolicy extends Resource {
  // The access rules you want to configure. These rules replace any existing rules. See the [AWS documentation](https://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html) for details.
  public accessPolicy?: string;

  // The CloudSearch domain name the policy applies to.
  public domainName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "accessPolicy",
        "The access rules you want to configure. These rules replace any existing rules. See the [AWS documentation](https://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html) for details.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "domainName",
        "The CloudSearch domain name the policy applies to.",
        [],
        true,
        false,
      ),
    ];
  }
}
