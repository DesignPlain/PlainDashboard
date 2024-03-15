import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface SubAccountArgs {
  /*
If set to "RENAME_ON_DESTROY" the billing account display_name
will be changed to "Destroyed" along with a timestamp.  If set to "" this will not occur.
Default is "".
*/
  DeletionPolicy?: string;

  // The display name of the billing account.
  DisplayName?: string;

  /*
The name of the master billing account that the subaccount
will be created under in the form `{billing_account_id}` or `billingAccounts/{billing_account_id}`.
*/
  MasterBillingAccount?: string;
}
export class SubAccount extends Resource {
  // The display name of the billing account.
  public DisplayName?: string;

  /*
The name of the master billing account that the subaccount
will be created under in the form `{billing_account_id}` or `billingAccounts/{billing_account_id}`.
*/
  public MasterBillingAccount?: string;

  // The resource name of the billing account in the form `billingAccounts/{billing_account_id}`.
  public Name?: string;

  // `true` if the billing account is open, `false` if the billing account is closed.
  public Open?: boolean;

  // The billing account id.
  public BillingAccountId?: string;

  /*
If set to "RENAME_ON_DESTROY" the billing account display_name
will be changed to "Destroyed" along with a timestamp.  If set to "" this will not occur.
Default is "".
*/
  public DeletionPolicy?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The display name of the billing account.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MasterBillingAccount",
        "The name of the master billing account that the subaccount\nwill be created under in the form `{billing_account_id}` or `billingAccounts/{billing_account_id}`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DeletionPolicy",
        'If set to "RENAME_ON_DESTROY" the billing account display_name\nwill be changed to "Destroyed" along with a timestamp.  If set to "" this will not occur.\nDefault is "".',
      ),
    ];
  }
}
