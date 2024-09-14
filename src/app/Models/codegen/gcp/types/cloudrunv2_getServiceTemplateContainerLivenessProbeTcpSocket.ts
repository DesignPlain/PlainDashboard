import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudrunv2_getServiceTemplateContainerLivenessProbeTcpSocket {
  /*
Port number to access on the container. Must be in the range 1 to 65535.
If not specified, defaults to the exposed port of the container, which
is the value of container.ports[0].containerPort.
*/
  port?: number;
}

export function cloudrunv2_getServiceTemplateContainerLivenessProbeTcpSocket_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "port",
      "Port number to access on the container. Must be in the range 1 to 65535.\nIf not specified, defaults to the exposed port of the container, which\nis the value of container.ports[0].containerPort.",
      () => [],
      true,
      false,
    ),
  ];
}
