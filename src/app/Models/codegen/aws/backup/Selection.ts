import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  backup_SelectionSelectionTag,
  backup_SelectionSelectionTag_GetTypes,
} from '../types/backup_SelectionSelectionTag';
import {
  backup_SelectionCondition,
  backup_SelectionCondition_GetTypes,
} from '../types/backup_SelectionCondition';

export interface SelectionArgs {
  // An array of strings that either contain Amazon Resource Names (ARNs) or match patterns of resources to assign to a backup plan.
  resources?: Array<string>;

  // Tag-based conditions used to specify a set of resources to assign to a backup plan.
  selectionTags?: Array<backup_SelectionSelectionTag>;

  // A list of conditions that you define to assign resources to your backup plans using tags.
  conditions?: Array<backup_SelectionCondition>;

  // The ARN of the IAM role that AWS Backup uses to authenticate when restoring and backing up the target resource. See the [AWS Backup Developer Guide](https://docs.aws.amazon.com/aws-backup/latest/devguide/access-control.html#managed-policies) for additional information about using AWS managed policies or creating custom policies attached to the IAM role.
  iamRoleArn?: string;

  // The display name of a resource selection document.
  name?: string;

  // An array of strings that either contain Amazon Resource Names (ARNs) or match patterns of resources to exclude from a backup plan.
  notResources?: Array<string>;

  // The backup plan ID to be associated with the selection of resources.
  planId?: string;
}
export class Selection extends DS_Resource {
  // The ARN of the IAM role that AWS Backup uses to authenticate when restoring and backing up the target resource. See the [AWS Backup Developer Guide](https://docs.aws.amazon.com/aws-backup/latest/devguide/access-control.html#managed-policies) for additional information about using AWS managed policies or creating custom policies attached to the IAM role.
  public iamRoleArn?: string;

  // The display name of a resource selection document.
  public name?: string;

  // An array of strings that either contain Amazon Resource Names (ARNs) or match patterns of resources to exclude from a backup plan.
  public notResources?: Array<string>;

  // The backup plan ID to be associated with the selection of resources.
  public planId?: string;

  // An array of strings that either contain Amazon Resource Names (ARNs) or match patterns of resources to assign to a backup plan.
  public resources?: Array<string>;

  // Tag-based conditions used to specify a set of resources to assign to a backup plan.
  public selectionTags?: Array<backup_SelectionSelectionTag>;

  // A list of conditions that you define to assign resources to your backup plans using tags.
  public conditions?: Array<backup_SelectionCondition>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'iamRoleArn',
        'The ARN of the IAM role that AWS Backup uses to authenticate when restoring and backing up the target resource. See the [AWS Backup Developer Guide](https://docs.aws.amazon.com/aws-backup/latest/devguide/access-control.html#managed-policies) for additional information about using AWS managed policies or creating custom policies attached to the IAM role.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The display name of a resource selection document.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'notResources',
        'An array of strings that either contain Amazon Resource Names (ARNs) or match patterns of resources to exclude from a backup plan.',
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'planId',
        'The backup plan ID to be associated with the selection of resources.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'resources',
        'An array of strings that either contain Amazon Resource Names (ARNs) or match patterns of resources to assign to a backup plan.',
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'selectionTags',
        'Tag-based conditions used to specify a set of resources to assign to a backup plan.',
        () => backup_SelectionSelectionTag_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'conditions',
        'A list of conditions that you define to assign resources to your backup plans using tags.',
        () => backup_SelectionCondition_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
