import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  iam_AccessBoundaryPolicyRule,
  iam_AccessBoundaryPolicyRule_GetTypes,
} from '../types/iam_AccessBoundaryPolicyRule';

export interface AccessBoundaryPolicyArgs {
  /*
Rules to be applied.
Structure is documented below.
*/
  rules?: Array<iam_AccessBoundaryPolicyRule>;

  // The display name of the rule.
  displayName?: string;

  // The name of the policy.
  name?: string;

  // The attachment point is identified by its URL-encoded full resource name.
  parent?: string;
}
export class AccessBoundaryPolicy extends DS_Resource {
  // The display name of the rule.
  public displayName?: string;

  // The hash of the resource. Used internally during updates.
  public etag?: string;

  // The name of the policy.
  public name?: string;

  // The attachment point is identified by its URL-encoded full resource name.
  public parent?: string;

  /*
Rules to be applied.
Structure is documented below.
*/
  public rules?: Array<iam_AccessBoundaryPolicyRule>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        'rules',
        'Rules to be applied.\nStructure is documented below.',
        () => iam_AccessBoundaryPolicyRule_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'displayName',
        'The display name of the rule.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the policy.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'parent',
        'The attachment point is identified by its URL-encoded full resource name.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
