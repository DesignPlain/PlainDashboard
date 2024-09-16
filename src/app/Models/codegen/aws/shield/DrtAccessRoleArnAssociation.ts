import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  shield_DrtAccessRoleArnAssociationTimeouts,
  shield_DrtAccessRoleArnAssociationTimeouts_GetTypes,
} from '../types/shield_DrtAccessRoleArnAssociationTimeouts';

export interface DrtAccessRoleArnAssociationArgs {
  //
  timeouts?: shield_DrtAccessRoleArnAssociationTimeouts;

  // The Amazon Resource Name (ARN) of the role the SRT will use to access your AWS account. Prior to making the AssociateDRTRole request, you must attach the `AWSShieldDRTAccessPolicy` managed policy to this role.
  roleArn?: string;
}
export class DrtAccessRoleArnAssociation extends DS_Resource {
  // The Amazon Resource Name (ARN) of the role the SRT will use to access your AWS account. Prior to making the AssociateDRTRole request, you must attach the `AWSShieldDRTAccessPolicy` managed policy to this role.
  public roleArn?: string;

  //
  public timeouts?: shield_DrtAccessRoleArnAssociationTimeouts;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'timeouts',
        '',
        () => shield_DrtAccessRoleArnAssociationTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'roleArn',
        'The Amazon Resource Name (ARN) of the role the SRT will use to access your AWS account. Prior to making the AssociateDRTRole request, you must attach the `AWSShieldDRTAccessPolicy` managed policy to this role.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
