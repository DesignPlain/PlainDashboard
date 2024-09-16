import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface UsageLimitArgs {
  // The limit amount. If time-based, this amount is in Redshift Processing Units (RPU) consumed per hour. If data-based, this amount is in terabytes (TB) of data transferred between Regions in cross-account sharing. The value must be a positive number.
  amount?: number;

  // The action that Amazon Redshift Serverless takes when the limit is reached. Valid values are `log`, `emit-metric`, and `deactivate`. The default is `log`.
  breachAction?: string;

  // The time period that the amount applies to. A weekly period begins on Sunday. Valid values are `daily`, `weekly`, and `monthly`. The default is `monthly`.
  period?: string;

  // The Amazon Resource Name (ARN) of the Amazon Redshift Serverless resource to create the usage limit for.
  resourceArn?: string;

  // The type of Amazon Redshift Serverless usage to create a usage limit for. Valid values are `serverless-compute` or `cross-region-datasharing`.
  usageType?: string;
}
export class UsageLimit extends DS_Resource {
  // The limit amount. If time-based, this amount is in Redshift Processing Units (RPU) consumed per hour. If data-based, this amount is in terabytes (TB) of data transferred between Regions in cross-account sharing. The value must be a positive number.
  public amount?: number;

  // Amazon Resource Name (ARN) of the Redshift Serverless Usage Limit.
  public arn?: string;

  // The action that Amazon Redshift Serverless takes when the limit is reached. Valid values are `log`, `emit-metric`, and `deactivate`. The default is `log`.
  public breachAction?: string;

  // The time period that the amount applies to. A weekly period begins on Sunday. Valid values are `daily`, `weekly`, and `monthly`. The default is `monthly`.
  public period?: string;

  // The Amazon Resource Name (ARN) of the Amazon Redshift Serverless resource to create the usage limit for.
  public resourceArn?: string;

  // The type of Amazon Redshift Serverless usage to create a usage limit for. Valid values are `serverless-compute` or `cross-region-datasharing`.
  public usageType?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'usageType',
        'The type of Amazon Redshift Serverless usage to create a usage limit for. Valid values are `serverless-compute` or `cross-region-datasharing`.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'amount',
        'The limit amount. If time-based, this amount is in Redshift Processing Units (RPU) consumed per hour. If data-based, this amount is in terabytes (TB) of data transferred between Regions in cross-account sharing. The value must be a positive number.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'breachAction',
        'The action that Amazon Redshift Serverless takes when the limit is reached. Valid values are `log`, `emit-metric`, and `deactivate`. The default is `log`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'period',
        'The time period that the amount applies to. A weekly period begins on Sunday. Valid values are `daily`, `weekly`, and `monthly`. The default is `monthly`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'resourceArn',
        'The Amazon Resource Name (ARN) of the Amazon Redshift Serverless resource to create the usage limit for.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
