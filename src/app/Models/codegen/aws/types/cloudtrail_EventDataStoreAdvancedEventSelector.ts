import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudtrail_EventDataStoreAdvancedEventSelectorFieldSelector,
  cloudtrail_EventDataStoreAdvancedEventSelectorFieldSelector_GetTypes,
} from './cloudtrail_EventDataStoreAdvancedEventSelectorFieldSelector';

export interface cloudtrail_EventDataStoreAdvancedEventSelector {
  // Specifies the name of the advanced event selector.
  name?: string;

  // Specifies the selector statements in an advanced event selector. Fields documented below.
  fieldSelectors?: Array<cloudtrail_EventDataStoreAdvancedEventSelectorFieldSelector>;
}

export function cloudtrail_EventDataStoreAdvancedEventSelector_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'Specifies the name of the advanced event selector.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'fieldSelectors',
      'Specifies the selector statements in an advanced event selector. Fields documented below.',
      () =>
        cloudtrail_EventDataStoreAdvancedEventSelectorFieldSelector_GetTypes(),
      false,
      false,
    ),
  ];
}
