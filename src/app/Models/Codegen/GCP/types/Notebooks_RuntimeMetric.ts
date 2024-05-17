import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Notebooks_RuntimeMetric {
  /*
(Output)
Contains runtime daemon metrics, such as OS and kernels and
sessions stats.
*/
  SystemMetrics?: Map<string, string>;
}

export function Notebooks_RuntimeMetric_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "SystemMetrics",
      "(Output)\nContains runtime daemon metrics, such as OS and kernels and\nsessions stats.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
