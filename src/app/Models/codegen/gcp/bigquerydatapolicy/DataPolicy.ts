import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  bigquerydatapolicy_DataPolicyDataMaskingPolicy,
  bigquerydatapolicy_DataPolicyDataMaskingPolicy_GetTypes,
} from '../types/bigquerydatapolicy_DataPolicyDataMaskingPolicy';

export interface DataPolicyArgs {
  // Policy tag resource name, in the format of projects/{project_number}/locations/{locationId}/taxonomies/{taxonomyId}/policyTags/{policyTag_id}.
  policyTag?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The data masking policy that specifies the data masking rule to use.
Structure is documented below.
*/
  dataMaskingPolicy?: bigquerydatapolicy_DataPolicyDataMaskingPolicy;

  // User-assigned (human readable) ID of the data policy that needs to be unique within a project. Used as {dataPolicyId} in part of the resource name.
  dataPolicyId?: string;

  /*
The enrollment level of the service.
Possible values are: `COLUMN_LEVEL_SECURITY_POLICY`, `DATA_MASKING_POLICY`.


- - -
*/
  dataPolicyType?: string;

  // The name of the location of the data policy.
  location?: string;
}
export class DataPolicy extends DS_Resource {
  /*
The data masking policy that specifies the data masking rule to use.
Structure is documented below.
*/
  public dataMaskingPolicy?: bigquerydatapolicy_DataPolicyDataMaskingPolicy;

  // User-assigned (human readable) ID of the data policy that needs to be unique within a project. Used as {dataPolicyId} in part of the resource name.
  public dataPolicyId?: string;

  /*
The enrollment level of the service.
Possible values are: `COLUMN_LEVEL_SECURITY_POLICY`, `DATA_MASKING_POLICY`.


- - -
*/
  public dataPolicyType?: string;

  // The name of the location of the data policy.
  public location?: string;

  // Resource name of this data policy, in the format of projects/{project_number}/locations/{locationId}/dataPolicies/{dataPolicyId}.
  public name?: string;

  // Policy tag resource name, in the format of projects/{project_number}/locations/{locationId}/taxonomies/{taxonomyId}/policyTags/{policyTag_id}.
  public policyTag?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'location',
        'The name of the location of the data policy.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'policyTag',
        'Policy tag resource name, in the format of projects/{project_number}/locations/{locationId}/taxonomies/{taxonomyId}/policyTags/{policyTag_id}.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'dataMaskingPolicy',
        'The data masking policy that specifies the data masking rule to use.\nStructure is documented below.',
        () => bigquerydatapolicy_DataPolicyDataMaskingPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'dataPolicyId',
        'User-assigned (human readable) ID of the data policy that needs to be unique within a project. Used as {dataPolicyId} in part of the resource name.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'dataPolicyType',
        'The enrollment level of the service.\nPossible values are: `COLUMN_LEVEL_SECURITY_POLICY`, `DATA_MASKING_POLICY`.\n\n\n- - -',
        () => [],
        true,
        false,
      ),
    ];
  }
}
