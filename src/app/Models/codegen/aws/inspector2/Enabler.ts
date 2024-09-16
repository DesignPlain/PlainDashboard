import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface EnablerArgs {
  /*
Set of account IDs.
Can contain one of: the Organization's Administrator Account, or one or more Member Accounts.
*/
  accountIds?: Array<string>;

  /*
Type of resources to scan.
Valid values are `EC2`, `ECR`, `LAMBDA` and `LAMBDA_CODE`.
At least one item is required.
*/
  resourceTypes?: Array<string>;
}
export class Enabler extends DS_Resource {
  /*
Type of resources to scan.
Valid values are `EC2`, `ECR`, `LAMBDA` and `LAMBDA_CODE`.
At least one item is required.
*/
  public resourceTypes?: Array<string>;

  /*
Set of account IDs.
Can contain one of: the Organization's Administrator Account, or one or more Member Accounts.
*/
  public accountIds?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        'accountIds',
        "Set of account IDs.\nCan contain one of: the Organization's Administrator Account, or one or more Member Accounts.",
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'resourceTypes',
        'Type of resources to scan.\nValid values are `EC2`, `ECR`, `LAMBDA` and `LAMBDA_CODE`.\nAt least one item is required.',
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
