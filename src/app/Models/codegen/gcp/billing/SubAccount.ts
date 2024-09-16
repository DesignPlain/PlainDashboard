import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface SubAccountArgs {
  /*
The name of the master billing account that the subaccount
will be created under in the form `{billing_account_id}` or `billingAccounts/{billing_account_id}`.
*/
  masterBillingAccount?: string;

  /*
If set to "RENAME_ON_DESTROY" the billing account display_name
will be changed to "Destroyed" along with a timestamp.  If set to "" this will not occur.
Default is "".
*/
  deletionPolicy?: string;

  // The display name of the billing account.
  displayName?: string;
}
export class SubAccount extends DS_Resource {
  // The billing account id.
  public billingAccountId?: string;

  /*
If set to "RENAME_ON_DESTROY" the billing account display_name
will be changed to "Destroyed" along with a timestamp.  If set to "" this will not occur.
Default is "".
*/
  public deletionPolicy?: string;

  // The display name of the billing account.
  public displayName?: string;

  /*
The name of the master billing account that the subaccount
will be created under in the form `{billing_account_id}` or `billingAccounts/{billing_account_id}`.
*/
  public masterBillingAccount?: string;

  // The resource name of the billing account in the form `billingAccounts/{billing_account_id}`.
  public name?: string;

  // `true` if the billing account is open, `false` if the billing account is closed.
  public open?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'masterBillingAccount',
        'The name of the master billing account that the subaccount\nwill be created under in the form `{billing_account_id}` or `billingAccounts/{billing_account_id}`.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'deletionPolicy',
        'If set to "RENAME_ON_DESTROY" the billing account display_name\nwill be changed to "Destroyed" along with a timestamp.  If set to "" this will not occur.\nDefault is "".',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'displayName',
        'The display name of the billing account.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
