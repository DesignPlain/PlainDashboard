import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Spanner_InstanceAutoscalingConfigAutoscalingLimits {
  /*
Specifies minimum number of processing units allocated to the instance.
If set, this number should be multiples of 1000.
*/
  MinProcessingUnits?: number;

  /*
Specifies maximum number of nodes allocated to the instance. If set, this number
should be greater than or equal to min_nodes.
*/
  MaxNodes?: number;

  /*
Specifies maximum number of processing units allocated to the instance.
If set, this number should be multiples of 1000 and be greater than or equal to
min_processing_units.
*/
  MaxProcessingUnits?: number;

  /*
Specifies number of nodes allocated to the instance. If set, this number
should be greater than or equal to 1.
*/
  MinNodes?: number;
}

export function Spanner_InstanceAutoscalingConfigAutoscalingLimits_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "MaxProcessingUnits",
      "Specifies maximum number of processing units allocated to the instance.\nIf set, this number should be multiples of 1000 and be greater than or equal to\nmin_processing_units.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MinNodes",
      "Specifies number of nodes allocated to the instance. If set, this number\nshould be greater than or equal to 1.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MinProcessingUnits",
      "Specifies minimum number of processing units allocated to the instance.\nIf set, this number should be multiples of 1000.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxNodes",
      "Specifies maximum number of nodes allocated to the instance. If set, this number\nshould be greater than or equal to min_nodes.",
      [],
      false,
      false,
    ),
  ];
}
