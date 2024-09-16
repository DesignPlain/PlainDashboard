import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appmesh_VirtualNodeSpecListenerConnectionPool,
  appmesh_VirtualNodeSpecListenerConnectionPool_GetTypes,
} from './appmesh_VirtualNodeSpecListenerConnectionPool';
import {
  appmesh_VirtualNodeSpecListenerHealthCheck,
  appmesh_VirtualNodeSpecListenerHealthCheck_GetTypes,
} from './appmesh_VirtualNodeSpecListenerHealthCheck';
import {
  appmesh_VirtualNodeSpecListenerOutlierDetection,
  appmesh_VirtualNodeSpecListenerOutlierDetection_GetTypes,
} from './appmesh_VirtualNodeSpecListenerOutlierDetection';
import {
  appmesh_VirtualNodeSpecListenerPortMapping,
  appmesh_VirtualNodeSpecListenerPortMapping_GetTypes,
} from './appmesh_VirtualNodeSpecListenerPortMapping';
import {
  appmesh_VirtualNodeSpecListenerTimeout,
  appmesh_VirtualNodeSpecListenerTimeout_GetTypes,
} from './appmesh_VirtualNodeSpecListenerTimeout';
import {
  appmesh_VirtualNodeSpecListenerTls,
  appmesh_VirtualNodeSpecListenerTls_GetTypes,
} from './appmesh_VirtualNodeSpecListenerTls';

export interface appmesh_VirtualNodeSpecListener {
  // Transport Layer Security (TLS) properties for the listener
  tls?: appmesh_VirtualNodeSpecListenerTls;

  // Connection pool information for the listener.
  connectionPool?: appmesh_VirtualNodeSpecListenerConnectionPool;

  // Health check information for the listener.
  healthCheck?: appmesh_VirtualNodeSpecListenerHealthCheck;

  // Outlier detection information for the listener.
  outlierDetection?: appmesh_VirtualNodeSpecListenerOutlierDetection;

  // Port mapping information for the listener.
  portMapping?: appmesh_VirtualNodeSpecListenerPortMapping;

  // Timeouts for different protocols.
  timeout?: appmesh_VirtualNodeSpecListenerTimeout;
}

export function appmesh_VirtualNodeSpecListener_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'connectionPool',
      'Connection pool information for the listener.',
      () => appmesh_VirtualNodeSpecListenerConnectionPool_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'healthCheck',
      'Health check information for the listener.',
      () => appmesh_VirtualNodeSpecListenerHealthCheck_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'outlierDetection',
      'Outlier detection information for the listener.',
      () => appmesh_VirtualNodeSpecListenerOutlierDetection_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'portMapping',
      'Port mapping information for the listener.',
      () => appmesh_VirtualNodeSpecListenerPortMapping_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'timeout',
      'Timeouts for different protocols.',
      () => appmesh_VirtualNodeSpecListenerTimeout_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'tls',
      'Transport Layer Security (TLS) properties for the listener',
      () => appmesh_VirtualNodeSpecListenerTls_GetTypes(),
      false,
      false,
    ),
  ];
}
