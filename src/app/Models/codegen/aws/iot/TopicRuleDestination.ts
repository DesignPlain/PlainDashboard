import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  iot_TopicRuleDestinationVpcConfiguration,
  iot_TopicRuleDestinationVpcConfiguration_GetTypes,
} from '../types/iot_TopicRuleDestinationVpcConfiguration';

export interface TopicRuleDestinationArgs {
  // Whether or not to enable the destination. Default: `true`.
  enabled?: boolean;

  // Configuration of the virtual private cloud (VPC) connection. For more info, see the [AWS documentation](https://docs.aws.amazon.com/iot/latest/developerguide/vpc-rule-action.html).
  vpcConfiguration?: iot_TopicRuleDestinationVpcConfiguration;
}
export class TopicRuleDestination extends DS_Resource {
  // The ARN of the topic rule destination
  public arn?: string;

  // Whether or not to enable the destination. Default: `true`.
  public enabled?: boolean;

  // Configuration of the virtual private cloud (VPC) connection. For more info, see the [AWS documentation](https://docs.aws.amazon.com/iot/latest/developerguide/vpc-rule-action.html).
  public vpcConfiguration?: iot_TopicRuleDestinationVpcConfiguration;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'vpcConfiguration',
        'Configuration of the virtual private cloud (VPC) connection. For more info, see the [AWS documentation](https://docs.aws.amazon.com/iot/latest/developerguide/vpc-rule-action.html).',
        () => iot_TopicRuleDestinationVpcConfiguration_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enabled',
        'Whether or not to enable the destination. Default: `true`.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
