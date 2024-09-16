import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  securitylake_SubscriberSourceAwsLogSourceResource,
  securitylake_SubscriberSourceAwsLogSourceResource_GetTypes,
} from './securitylake_SubscriberSourceAwsLogSourceResource';
import {
  securitylake_SubscriberSourceCustomLogSourceResource,
  securitylake_SubscriberSourceCustomLogSourceResource_GetTypes,
} from './securitylake_SubscriberSourceCustomLogSourceResource';

export interface securitylake_SubscriberSource {
  // Amazon Security Lake supports log and event collection for natively supported AWS services. See `aws_log_source_resource` Block below.
  awsLogSourceResource?: securitylake_SubscriberSourceAwsLogSourceResource;

  // Amazon Security Lake supports custom source types. See `custom_log_source_resource` Block below.
  customLogSourceResource?: securitylake_SubscriberSourceCustomLogSourceResource;
}

export function securitylake_SubscriberSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'awsLogSourceResource',
      'Amazon Security Lake supports log and event collection for natively supported AWS services. See `aws_log_source_resource` Block below.',
      () => securitylake_SubscriberSourceAwsLogSourceResource_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'customLogSourceResource',
      'Amazon Security Lake supports custom source types. See `custom_log_source_resource` Block below.',
      () => securitylake_SubscriberSourceCustomLogSourceResource_GetTypes(),
      false,
      false,
    ),
  ];
}
