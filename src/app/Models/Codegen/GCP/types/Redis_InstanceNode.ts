import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Redis_InstanceNode {
  /*
(Output)
Node identifying string. e.g. 'node-0', 'node-1'
*/
  Id?: string;

  /*
(Output)
Location of the node.
*/
  Zone?: string;
}

export function Redis_InstanceNode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Id",
      "(Output)\nNode identifying string. e.g. 'node-0', 'node-1'",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Zone",
      "(Output)\nLocation of the node.",
      [],
      false,
      false,
    ),
  ];
}
