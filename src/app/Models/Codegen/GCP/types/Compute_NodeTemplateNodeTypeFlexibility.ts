import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_NodeTemplateNodeTypeFlexibility {
  // Number of virtual CPUs to use.
  Cpus?: string;

  /*
(Output)
Use local SSD
*/
  LocalSsd?: string;

  // Physical memory available to the node, defined in MB.
  Memory?: string;
}

export function Compute_NodeTemplateNodeTypeFlexibility_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Cpus",
      "Number of virtual CPUs to use.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "LocalSsd",
      "(Output)\nUse local SSD",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Memory",
      "Physical memory available to the node, defined in MB.",
      [],
      false,
      true,
    ),
  ];
}
