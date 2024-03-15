import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DefaultServiceAccountsArgs {
  // The action to be performed in the default service accounts. Valid values are: `DEPRIVILEGE`, `DELETE`, `DISABLE`. Note that `DEPRIVILEGE` action will ignore the REVERT configuration in the restore_policy
  Action?: string;

  // The project ID where service accounts are created.
  Project?: string;

  /*
The action to be performed in the default service accounts on the resource destroy.
Valid values are NONE, REVERT and REVERT_AND_IGNORE_FAILURE. It is applied for any action but in the DEPRIVILEGE.
If set to REVERT it attempts to restore all default SAs but the DEPRIVILEGE action.
If set to REVERT_AND_IGNORE_FAILURE it is the same behavior as REVERT but ignores errors returned by the API.
*/
  RestorePolicy?: string;
}
export class DefaultServiceAccounts extends Resource {
  // The action to be performed in the default service accounts. Valid values are: `DEPRIVILEGE`, `DELETE`, `DISABLE`. Note that `DEPRIVILEGE` action will ignore the REVERT configuration in the restore_policy
  public Action?: string;

  // The project ID where service accounts are created.
  public Project?: string;

  /*
The action to be performed in the default service accounts on the resource destroy.
Valid values are NONE, REVERT and REVERT_AND_IGNORE_FAILURE. It is applied for any action but in the DEPRIVILEGE.
If set to REVERT it attempts to restore all default SAs but the DEPRIVILEGE action.
If set to REVERT_AND_IGNORE_FAILURE it is the same behavior as REVERT but ignores errors returned by the API.
*/
  public RestorePolicy?: string;

  // The Service Accounts changed by this resource. It is used for `REVERT` the `action` on the destroy.
  public ServiceAccounts?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Action",
        "The action to be performed in the default service accounts. Valid values are: `DEPRIVILEGE`, `DELETE`, `DISABLE`. Note that `DEPRIVILEGE` action will ignore the REVERT configuration in the restore_policy",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project ID where service accounts are created.",
      ),
      new DynamicUIProps(
        InputType.String,
        "RestorePolicy",
        "The action to be performed in the default service accounts on the resource destroy.\nValid values are NONE, REVERT and REVERT_AND_IGNORE_FAILURE. It is applied for any action but in the DEPRIVILEGE.\nIf set to REVERT it attempts to restore all default SAs but the DEPRIVILEGE action.\nIf set to REVERT_AND_IGNORE_FAILURE it is the same behavior as REVERT but ignores errors returned by the API.",
      ),
    ];
  }
}
