import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface DefaultServiceAccountsArgs {
  // The action to be performed in the default service accounts. Valid values are: `DEPRIVILEGE`, `DELETE`, `DISABLE`. Note that `DEPRIVILEGE` action will ignore the REVERT configuration in the restore_policy
  action?: string;

  // The project ID where service accounts are created.
  project?: string;

  /*
The action to be performed in the default service accounts on the resource destroy.
Valid values are NONE, REVERT and REVERT_AND_IGNORE_FAILURE. It is applied for any action but in the DEPRIVILEGE.
If set to REVERT it attempts to restore all default SAs but the DEPRIVILEGE action.
If set to REVERT_AND_IGNORE_FAILURE it is the same behavior as REVERT but ignores errors returned by the API.
*/
  restorePolicy?: string;
}
export class DefaultServiceAccounts extends DS_Resource {
  // The action to be performed in the default service accounts. Valid values are: `DEPRIVILEGE`, `DELETE`, `DISABLE`. Note that `DEPRIVILEGE` action will ignore the REVERT configuration in the restore_policy
  public action?: string;

  // The project ID where service accounts are created.
  public project?: string;

  /*
The action to be performed in the default service accounts on the resource destroy.
Valid values are NONE, REVERT and REVERT_AND_IGNORE_FAILURE. It is applied for any action but in the DEPRIVILEGE.
If set to REVERT it attempts to restore all default SAs but the DEPRIVILEGE action.
If set to REVERT_AND_IGNORE_FAILURE it is the same behavior as REVERT but ignores errors returned by the API.
*/
  public restorePolicy?: string;

  // The Service Accounts changed by this resource. It is used for `REVERT` the `action` on the destroy.
  public serviceAccounts?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'action',
        'The action to be performed in the default service accounts. Valid values are: `DEPRIVILEGE`, `DELETE`, `DISABLE`. Note that `DEPRIVILEGE` action will ignore the REVERT configuration in the restore_policy',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The project ID where service accounts are created.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'restorePolicy',
        'The action to be performed in the default service accounts on the resource destroy.\nValid values are NONE, REVERT and REVERT_AND_IGNORE_FAILURE. It is applied for any action but in the DEPRIVILEGE.\nIf set to REVERT it attempts to restore all default SAs but the DEPRIVILEGE action.\nIf set to REVERT_AND_IGNORE_FAILURE it is the same behavior as REVERT but ignores errors returned by the API.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
