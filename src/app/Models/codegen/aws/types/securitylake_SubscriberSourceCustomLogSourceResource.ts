import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  securitylake_SubscriberSourceCustomLogSourceResourceAttribute,
  securitylake_SubscriberSourceCustomLogSourceResourceAttribute_GetTypes,
} from './securitylake_SubscriberSourceCustomLogSourceResourceAttribute';
import {
  securitylake_SubscriberSourceCustomLogSourceResourceProvider,
  securitylake_SubscriberSourceCustomLogSourceResourceProvider_GetTypes,
} from './securitylake_SubscriberSourceCustomLogSourceResourceProvider';

export interface securitylake_SubscriberSourceCustomLogSourceResource {
  // The attributes of the third-party custom source. See `attributes` Block below.
  attributes?: Array<securitylake_SubscriberSourceCustomLogSourceResourceAttribute>;

  // The details of the log provider for the third-party custom source. See `provider` Block below.
  providers?: Array<securitylake_SubscriberSourceCustomLogSourceResourceProvider>;

  // The name for a third-party custom source. This must be a Regionally unique value.
  sourceName?: string;

  // The version for a third-party custom source. This must be a Regionally unique value.
  sourceVersion?: string;
}

export function securitylake_SubscriberSourceCustomLogSourceResource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'providers',
      'The details of the log provider for the third-party custom source. See `provider` Block below.',
      () =>
        securitylake_SubscriberSourceCustomLogSourceResourceProvider_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'sourceName',
      'The name for a third-party custom source. This must be a Regionally unique value.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'sourceVersion',
      'The version for a third-party custom source. This must be a Regionally unique value.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'attributes',
      'The attributes of the third-party custom source. See `attributes` Block below.',
      () =>
        securitylake_SubscriberSourceCustomLogSourceResourceAttribute_GetTypes(),
      false,
      false,
    ),
  ];
}
