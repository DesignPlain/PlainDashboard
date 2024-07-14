import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_TrafficMirrorFilterRuleDestinationPortRange {
  // Starting port of the range
  fromPort?: number;

  // Ending port of the range
  toPort?: number;
}

export function ec2_TrafficMirrorFilterRuleDestinationPortRange_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "fromPort",
      "Starting port of the range",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "toPort",
      "Ending port of the range",
      [],
      false,
      false,
    ),
  ];
}
