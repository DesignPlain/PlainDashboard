import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appmesh_getVirtualNodeSpecListenerHealthCheck {
  //
  path?: string;

  //
  port?: number;

  //
  protocol?: string;

  //
  timeoutMillis?: number;

  //
  unhealthyThreshold?: number;

  //
  healthyThreshold?: number;

  //
  intervalMillis?: number;
}

export function appmesh_getVirtualNodeSpecListenerHealthCheck_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'intervalMillis',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'path', '', () => [], true, false),
    new DynamicUIProps(InputType.Number, 'port', '', () => [], true, false),
    new DynamicUIProps(InputType.String, 'protocol', '', () => [], true, false),
    new DynamicUIProps(
      InputType.Number,
      'timeoutMillis',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'unhealthyThreshold',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'healthyThreshold',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
