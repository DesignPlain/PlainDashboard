import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  devopsguru_NotificationChannelFilters,
  devopsguru_NotificationChannelFilters_GetTypes,
} from '../types/devopsguru_NotificationChannelFilters';
import {
  devopsguru_NotificationChannelSns,
  devopsguru_NotificationChannelSns_GetTypes,
} from '../types/devopsguru_NotificationChannelSns';

export interface NotificationChannelArgs {
  // Filter configurations for the Amazon SNS notification topic. See the `filters` argument reference below.
  filters?: devopsguru_NotificationChannelFilters;

  /*
SNS noficiation channel configurations. See the `sns` argument reference below.

The following arguments are optional:
*/
  sns?: devopsguru_NotificationChannelSns;
}
export class NotificationChannel extends DS_Resource {
  // Filter configurations for the Amazon SNS notification topic. See the `filters` argument reference below.
  public filters?: devopsguru_NotificationChannelFilters;

  /*
SNS noficiation channel configurations. See the `sns` argument reference below.

The following arguments are optional:
*/
  public sns?: devopsguru_NotificationChannelSns;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'filters',
        'Filter configurations for the Amazon SNS notification topic. See the `filters` argument reference below.',
        () => devopsguru_NotificationChannelFilters_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'sns',
        'SNS noficiation channel configurations. See the `sns` argument reference below.\n\nThe following arguments are optional:',
        () => devopsguru_NotificationChannelSns_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
