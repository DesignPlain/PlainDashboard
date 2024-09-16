import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ResourcePolicyArgs {
  // Indicates that you are using both methods to grant cross-account. Valid values are `TRUE` and `FALSE`. Note the provider will not perform drift detetction on this field as its not return on read.
  enableHybrid?: string;

  // The policy to be applied to the aws glue data catalog.
  policy?: string;
}
export class ResourcePolicy extends DS_Resource {
  // Indicates that you are using both methods to grant cross-account. Valid values are `TRUE` and `FALSE`. Note the provider will not perform drift detetction on this field as its not return on read.
  public enableHybrid?: string;

  // The policy to be applied to the aws glue data catalog.
  public policy?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'policy',
        'The policy to be applied to the aws glue data catalog.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'enableHybrid',
        'Indicates that you are using both methods to grant cross-account. Valid values are `TRUE` and `FALSE`. Note the provider will not perform drift detetction on this field as its not return on read.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
