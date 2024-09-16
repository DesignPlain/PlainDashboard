import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  endpoints_ConsumersIamBindingCondition,
  endpoints_ConsumersIamBindingCondition_GetTypes,
} from '../types/endpoints_ConsumersIamBindingCondition';

export interface ConsumersIamBindingArgs {
  //
  members?: Array<string>;

  /*
The role that should be applied. Only one
`gcp.endpoints.ConsumersIamBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  role?: string;

  //
  serviceName?: string;

  //
  condition?: endpoints_ConsumersIamBindingCondition;

  //
  consumerProject?: string;
}
export class ConsumersIamBinding extends DS_Resource {
  //
  public condition?: endpoints_ConsumersIamBindingCondition;

  //
  public consumerProject?: string;

  // (Computed) The etag of the IAM policy.
  public etag?: string;

  //
  public members?: Array<string>;

  /*
The role that should be applied. Only one
`gcp.endpoints.ConsumersIamBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  public role?: string;

  //
  public serviceName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'consumerProject',
        '',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'members',
        '',
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'role',
        'The role that should be applied. Only one\n`gcp.endpoints.ConsumersIamBinding` can be used per role. Note that custom roles must be of the format\n`[projects|organizations]/{parent-name}/roles/{role-name}`.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'serviceName',
        '',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'condition',
        '',
        () => endpoints_ConsumersIamBindingCondition_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
