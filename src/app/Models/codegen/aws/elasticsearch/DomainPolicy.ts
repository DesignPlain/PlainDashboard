import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface DomainPolicyArgs {
  // IAM policy document specifying the access policies for the domain
  accessPolicies?: string;

  // Name of the domain.
  domainName?: string;
}
export class DomainPolicy extends DS_Resource {
  // Name of the domain.
  public domainName?: string;

  // IAM policy document specifying the access policies for the domain
  public accessPolicies?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'accessPolicies',
        'IAM policy document specifying the access policies for the domain',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'domainName',
        'Name of the domain.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
