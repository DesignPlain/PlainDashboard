import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  container_AttachedClusterProxyConfigKubernetesSecret,
  container_AttachedClusterProxyConfigKubernetesSecret_GetTypes,
} from './container_AttachedClusterProxyConfigKubernetesSecret';

export interface container_AttachedClusterProxyConfig {
  /*
The Kubernetes Secret resource that contains the HTTP(S) proxy configuration.
Structure is documented below.
*/
  kubernetesSecret?: container_AttachedClusterProxyConfigKubernetesSecret;
}

export function container_AttachedClusterProxyConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'kubernetesSecret',
      'The Kubernetes Secret resource that contains the HTTP(S) proxy configuration.\nStructure is documented below.',
      () => container_AttachedClusterProxyConfigKubernetesSecret_GetTypes(),
      false,
      false,
    ),
  ];
}
