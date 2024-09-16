import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface AssessmentDelegationArgs {
  // Identifier for the assessment.
  assessmentId?: string;

  // Comment describing the delegation request.
  comment?: string;

  // Assessment control set name. This value is the control set name used during assessment creation (not the AWS-generated ID). The `_id` suffix on this attribute has been preserved to be consistent with the underlying AWS API.
  controlSetId?: string;

  // Amazon Resource Name (ARN) of the IAM role.
  roleArn?: string;

  /*
Type of customer persona. For assessment delegation, type must always be `RESOURCE_OWNER`.

The following arguments are optional:
*/
  roleType?: string;
}
export class AssessmentDelegation extends DS_Resource {
  // Assessment control set name. This value is the control set name used during assessment creation (not the AWS-generated ID). The `_id` suffix on this attribute has been preserved to be consistent with the underlying AWS API.
  public controlSetId?: string;

  // Unique identifier for the delegation.
  public delegationId?: string;

  // Amazon Resource Name (ARN) of the IAM role.
  public roleArn?: string;

  /*
Type of customer persona. For assessment delegation, type must always be `RESOURCE_OWNER`.

The following arguments are optional:
*/
  public roleType?: string;

  // Status of the delegation.
  public status?: string;

  // Identifier for the assessment.
  public assessmentId?: string;

  // Comment describing the delegation request.
  public comment?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'assessmentId',
        'Identifier for the assessment.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'comment',
        'Comment describing the delegation request.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'controlSetId',
        'Assessment control set name. This value is the control set name used during assessment creation (not the AWS-generated ID). The `_id` suffix on this attribute has been preserved to be consistent with the underlying AWS API.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'roleArn',
        'Amazon Resource Name (ARN) of the IAM role.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'roleType',
        'Type of customer persona. For assessment delegation, type must always be `RESOURCE_OWNER`.\n\nThe following arguments are optional:',
        () => [],
        true,
        false,
      ),
    ];
  }
}
