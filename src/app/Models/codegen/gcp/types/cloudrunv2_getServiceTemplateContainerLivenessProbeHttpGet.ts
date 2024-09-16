import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudrunv2_getServiceTemplateContainerLivenessProbeHttpGetHttpHeader,
  cloudrunv2_getServiceTemplateContainerLivenessProbeHttpGetHttpHeader_GetTypes,
} from './cloudrunv2_getServiceTemplateContainerLivenessProbeHttpGetHttpHeader';

export interface cloudrunv2_getServiceTemplateContainerLivenessProbeHttpGet {
  // Path to access on the HTTP server. Defaults to '/'.
  path?: string;

  /*
Port number to access on the container. Number must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.
*/
  port?: number;

  // Custom headers to set in the request. HTTP allows repeated headers.
  httpHeaders?: Array<cloudrunv2_getServiceTemplateContainerLivenessProbeHttpGetHttpHeader>;
}

export function cloudrunv2_getServiceTemplateContainerLivenessProbeHttpGet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'path',
      "Path to access on the HTTP server. Defaults to '/'.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'port',
      'Port number to access on the container. Number must be in the range 1 to 65535.\nIf not specified, defaults to the same value as container.ports[0].containerPort.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'httpHeaders',
      'Custom headers to set in the request. HTTP allows repeated headers.',
      () =>
        cloudrunv2_getServiceTemplateContainerLivenessProbeHttpGetHttpHeader_GetTypes(),
      true,
      false,
    ),
  ];
}
