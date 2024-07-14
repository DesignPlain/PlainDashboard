import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appmesh_VirtualNodeSpecBackendDefaults,
  appmesh_VirtualNodeSpecBackendDefaults_GetTypes,
} from "./appmesh_VirtualNodeSpecBackendDefaults";
import {
  appmesh_VirtualNodeSpecBackend,
  appmesh_VirtualNodeSpecBackend_GetTypes,
} from "./appmesh_VirtualNodeSpecBackend";
import {
  appmesh_VirtualNodeSpecListener,
  appmesh_VirtualNodeSpecListener_GetTypes,
} from "./appmesh_VirtualNodeSpecListener";
import {
  appmesh_VirtualNodeSpecLogging,
  appmesh_VirtualNodeSpecLogging_GetTypes,
} from "./appmesh_VirtualNodeSpecLogging";
import {
  appmesh_VirtualNodeSpecServiceDiscovery,
  appmesh_VirtualNodeSpecServiceDiscovery_GetTypes,
} from "./appmesh_VirtualNodeSpecServiceDiscovery";

export interface appmesh_VirtualNodeSpec {
  // Defaults for backends.
  backendDefaults?: appmesh_VirtualNodeSpecBackendDefaults;

  // Backends to which the virtual node is expected to send outbound traffic.
  backends?: Array<appmesh_VirtualNodeSpecBackend>;

  // Listeners from which the virtual node is expected to receive inbound traffic.
  listeners?: Array<appmesh_VirtualNodeSpecListener>;

  // Inbound and outbound access logging information for the virtual node.
  logging?: appmesh_VirtualNodeSpecLogging;

  // Service discovery information for the virtual node.
  serviceDiscovery?: appmesh_VirtualNodeSpecServiceDiscovery;
}

export function appmesh_VirtualNodeSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "logging",
      "Inbound and outbound access logging information for the virtual node.",
      appmesh_VirtualNodeSpecLogging_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "serviceDiscovery",
      "Service discovery information for the virtual node.",
      appmesh_VirtualNodeSpecServiceDiscovery_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "backendDefaults",
      "Defaults for backends.",
      appmesh_VirtualNodeSpecBackendDefaults_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "backends",
      "Backends to which the virtual node is expected to send outbound traffic.",
      appmesh_VirtualNodeSpecBackend_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "listeners",
      "Listeners from which the virtual node is expected to receive inbound traffic.",
      appmesh_VirtualNodeSpecListener_GetTypes(),
      false,
      false,
    ),
  ];
}
