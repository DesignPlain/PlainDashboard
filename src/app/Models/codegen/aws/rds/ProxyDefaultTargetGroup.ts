import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  rds_ProxyDefaultTargetGroupConnectionPoolConfig,
  rds_ProxyDefaultTargetGroupConnectionPoolConfig_GetTypes,
} from '../types/rds_ProxyDefaultTargetGroupConnectionPoolConfig';

export interface ProxyDefaultTargetGroupArgs {
  // The settings that determine the size and behavior of the connection pool for the target group.
  connectionPoolConfig?: rds_ProxyDefaultTargetGroupConnectionPoolConfig;

  // Name of the RDS DB Proxy.
  dbProxyName?: string;
}
export class ProxyDefaultTargetGroup extends DS_Resource {
  // The name of the default target group.
  public name?: string;

  // The Amazon Resource Name (ARN) representing the target group.
  public arn?: string;

  // The settings that determine the size and behavior of the connection pool for the target group.
  public connectionPoolConfig?: rds_ProxyDefaultTargetGroupConnectionPoolConfig;

  // Name of the RDS DB Proxy.
  public dbProxyName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'connectionPoolConfig',
        'The settings that determine the size and behavior of the connection pool for the target group.',
        () => rds_ProxyDefaultTargetGroupConnectionPoolConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'dbProxyName',
        'Name of the RDS DB Proxy.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
