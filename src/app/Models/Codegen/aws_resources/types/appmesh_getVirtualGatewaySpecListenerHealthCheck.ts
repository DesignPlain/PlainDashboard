import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appmesh_getVirtualGatewaySpecListenerHealthCheck {
  //
  unhealthyThreshold?: number;

  //
  healthyThreshold?: number;

  //
  intervalMillis?: number;

  //
  path?: string;

  //
  port?: number;

  //
  protocol?: string;

  //
  timeoutMillis?: number;
}

export function appmesh_getVirtualGatewaySpecListenerHealthCheck_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "protocol", "", [], true, false),
    new DynamicUIProps(InputType.Number, "timeoutMillis", "", [], true, false),
    new DynamicUIProps(
      InputType.Number,
      "unhealthyThreshold",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "healthyThreshold",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.Number, "intervalMillis", "", [], true, false),
    new DynamicUIProps(InputType.String, "path", "", [], true, false),
    new DynamicUIProps(InputType.Number, "port", "", [], true, false),
  ];
}
