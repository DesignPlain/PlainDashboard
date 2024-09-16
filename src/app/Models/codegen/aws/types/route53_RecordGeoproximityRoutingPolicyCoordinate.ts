import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface route53_RecordGeoproximityRoutingPolicyCoordinate {
  //
  latitude?: string;

  //
  longitude?: string;
}

export function route53_RecordGeoproximityRoutingPolicyCoordinate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, 'latitude', '', () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      'longitude',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
