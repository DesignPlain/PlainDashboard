import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface dax_ClusterNode {
  //
  address?: string;

  //
  availabilityZone?: string;

  //
  id?: string;

  // The port used by the configuration endpoint
  port?: number;
}

export function dax_ClusterNode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "port",
      "The port used by the configuration endpoint",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "address", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "availabilityZone",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "id", "", [], false, false),
  ];
}
