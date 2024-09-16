import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface SinkPolicyArgs {
  // JSON policy to use. If you are updating an existing policy, the entire existing policy is replaced by what you specify here.
  policy?: string;

  // ARN of the sink to attach this policy to.
  sinkIdentifier?: string;
}
export class SinkPolicy extends DS_Resource {
  // ARN of the Sink.
  public arn?: string;

  // JSON policy to use. If you are updating an existing policy, the entire existing policy is replaced by what you specify here.
  public policy?: string;

  // ID string that AWS generated as part of the sink ARN.
  public sinkId?: string;

  // ARN of the sink to attach this policy to.
  public sinkIdentifier?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'policy',
        'JSON policy to use. If you are updating an existing policy, the entire existing policy is replaced by what you specify here.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'sinkIdentifier',
        'ARN of the sink to attach this policy to.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
