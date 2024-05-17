import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Redis_getInstanceNode {
  // Node identifying string. e.g. 'node-0', 'node-1'
  Id?: string;

  // Location of the node.
  Zone?: string;
}

export function Redis_getInstanceNode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Id",
      "Node identifying string. e.g. 'node-0', 'node-1'",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Zone",
      "Location of the node.",
      [],
      true,
      false,
    ),
  ];
}
