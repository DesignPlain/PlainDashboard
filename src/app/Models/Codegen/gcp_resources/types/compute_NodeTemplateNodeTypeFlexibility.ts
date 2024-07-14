import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface compute_NodeTemplateNodeTypeFlexibility {
  // Number of virtual CPUs to use.
  cpus?: string;

  /*
(Output)
Use local SSD
*/
  localSsd?: string;

  // Physical memory available to the node, defined in MB.
  memory?: string;
}

export function compute_NodeTemplateNodeTypeFlexibility_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "memory",
      "Physical memory available to the node, defined in MB.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "cpus",
      "Number of virtual CPUs to use.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "localSsd",
      "(Output)\nUse local SSD",
      [],
      false,
      false,
    ),
  ];
}
