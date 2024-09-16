import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface glue_TriggerEventBatchingCondition {
  // Number of events that must be received from Amazon EventBridge before EventBridge  event trigger fires.
  batchSize?: number;

  // Window of time in seconds after which EventBridge event trigger fires. Window starts when first event is received. Default value is `900`.
  batchWindow?: number;
}

export function glue_TriggerEventBatchingCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'batchSize',
      'Number of events that must be received from Amazon EventBridge before EventBridge  event trigger fires.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'batchWindow',
      'Window of time in seconds after which EventBridge event trigger fires. Window starts when first event is received. Default value is `900`.',
      () => [],
      false,
      false,
    ),
  ];
}
