import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_TrafficMirrorFilterRuleSourcePortRange {
  // Starting port of the range
  fromPort?: number;

  // Ending port of the range
  toPort?: number;
}

export function ec2_TrafficMirrorFilterRuleSourcePortRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'fromPort',
      'Starting port of the range',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'toPort',
      'Ending port of the range',
      () => [],
      false,
      false,
    ),
  ];
}
