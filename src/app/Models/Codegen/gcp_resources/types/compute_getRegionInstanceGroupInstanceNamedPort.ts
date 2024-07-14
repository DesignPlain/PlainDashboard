import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface compute_getRegionInstanceGroupInstanceNamedPort {
  // The name of the instance group.  One of `name` or `self_link` must be provided.
  name?: string;

  // Integer port number
  port?: number;
}

export function compute_getRegionInstanceGroupInstanceNamedPort_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the instance group.  One of `name` or `self_link` must be provided.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "Integer port number",
      [],
      true,
      false,
    ),
  ];
}
