import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface spanner_getInstanceAutoscalingConfigAutoscalingLimit {
  /*
Specifies maximum number of nodes allocated to the instance. If set, this number
should be greater than or equal to min_nodes.
*/
  maxNodes?: number;

  /*
Specifies maximum number of processing units allocated to the instance.
If set, this number should be multiples of 1000 and be greater than or equal to
min_processing_units.
*/
  maxProcessingUnits?: number;

  /*
Specifies number of nodes allocated to the instance. If set, this number
should be greater than or equal to 1.
*/
  minNodes?: number;

  /*
Specifies minimum number of processing units allocated to the instance.
If set, this number should be multiples of 1000.
*/
  minProcessingUnits?: number;
}

export function spanner_getInstanceAutoscalingConfigAutoscalingLimit_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxNodes",
      "Specifies maximum number of nodes allocated to the instance. If set, this number\nshould be greater than or equal to min_nodes.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxProcessingUnits",
      "Specifies maximum number of processing units allocated to the instance.\nIf set, this number should be multiples of 1000 and be greater than or equal to\nmin_processing_units.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minNodes",
      "Specifies number of nodes allocated to the instance. If set, this number\nshould be greater than or equal to 1.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minProcessingUnits",
      "Specifies minimum number of processing units allocated to the instance.\nIf set, this number should be multiples of 1000.",
      [],
      true,
      false,
    ),
  ];
}
