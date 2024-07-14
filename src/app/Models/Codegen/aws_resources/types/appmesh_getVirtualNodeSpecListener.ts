import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_getVirtualNodeSpecListenerConnectionPool,
  appmesh_getVirtualNodeSpecListenerConnectionPool_GetTypes,
} from "./appmesh_getVirtualNodeSpecListenerConnectionPool";
import {
  appmesh_getVirtualNodeSpecListenerHealthCheck,
  appmesh_getVirtualNodeSpecListenerHealthCheck_GetTypes,
} from "./appmesh_getVirtualNodeSpecListenerHealthCheck";
import {
  appmesh_getVirtualNodeSpecListenerOutlierDetection,
  appmesh_getVirtualNodeSpecListenerOutlierDetection_GetTypes,
} from "./appmesh_getVirtualNodeSpecListenerOutlierDetection";
import {
  appmesh_getVirtualNodeSpecListenerPortMapping,
  appmesh_getVirtualNodeSpecListenerPortMapping_GetTypes,
} from "./appmesh_getVirtualNodeSpecListenerPortMapping";
import {
  appmesh_getVirtualNodeSpecListenerTimeout,
  appmesh_getVirtualNodeSpecListenerTimeout_GetTypes,
} from "./appmesh_getVirtualNodeSpecListenerTimeout";
import {
  appmesh_getVirtualNodeSpecListenerTl,
  appmesh_getVirtualNodeSpecListenerTl_GetTypes,
} from "./appmesh_getVirtualNodeSpecListenerTl";

export interface appmesh_getVirtualNodeSpecListener {
  //
  connectionPools?: Array<appmesh_getVirtualNodeSpecListenerConnectionPool>;

  //
  healthChecks?: Array<appmesh_getVirtualNodeSpecListenerHealthCheck>;

  //
  outlierDetections?: Array<appmesh_getVirtualNodeSpecListenerOutlierDetection>;

  //
  portMappings?: Array<appmesh_getVirtualNodeSpecListenerPortMapping>;

  //
  timeouts?: Array<appmesh_getVirtualNodeSpecListenerTimeout>;

  //
  tls?: Array<appmesh_getVirtualNodeSpecListenerTl>;
}

export function appmesh_getVirtualNodeSpecListener_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "healthChecks",
      "",
      appmesh_getVirtualNodeSpecListenerHealthCheck_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "outlierDetections",
      "",
      appmesh_getVirtualNodeSpecListenerOutlierDetection_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "portMappings",
      "",
      appmesh_getVirtualNodeSpecListenerPortMapping_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "timeouts",
      "",
      appmesh_getVirtualNodeSpecListenerTimeout_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tls",
      "",
      appmesh_getVirtualNodeSpecListenerTl_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "connectionPools",
      "",
      appmesh_getVirtualNodeSpecListenerConnectionPool_GetTypes(),
      true,
      false,
    ),
  ];
}
