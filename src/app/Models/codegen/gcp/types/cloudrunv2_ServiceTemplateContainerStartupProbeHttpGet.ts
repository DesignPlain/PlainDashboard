import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudrunv2_ServiceTemplateContainerStartupProbeHttpGetHttpHeader,
  cloudrunv2_ServiceTemplateContainerStartupProbeHttpGetHttpHeader_GetTypes,
} from './cloudrunv2_ServiceTemplateContainerStartupProbeHttpGetHttpHeader';

export interface cloudrunv2_ServiceTemplateContainerStartupProbeHttpGet {
  /*
Custom headers to set in the request. HTTP allows repeated headers.
Structure is documented below.
*/
  httpHeaders?: Array<cloudrunv2_ServiceTemplateContainerStartupProbeHttpGetHttpHeader>;

  // Path to access on the HTTP server. Defaults to '/'.
  path?: string;

  /*
Port number to access on the container. Must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.
*/
  port?: number;
}

export function cloudrunv2_ServiceTemplateContainerStartupProbeHttpGet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'httpHeaders',
      'Custom headers to set in the request. HTTP allows repeated headers.\nStructure is documented below.',
      () =>
        cloudrunv2_ServiceTemplateContainerStartupProbeHttpGetHttpHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'path',
      "Path to access on the HTTP server. Defaults to '/'.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'port',
      'Port number to access on the container. Must be in the range 1 to 65535.\nIf not specified, defaults to the same value as container.ports[0].containerPort.',
      () => [],
      false,
      false,
    ),
  ];
}
