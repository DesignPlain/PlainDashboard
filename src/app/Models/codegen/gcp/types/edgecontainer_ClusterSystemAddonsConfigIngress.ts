import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface edgecontainer_ClusterSystemAddonsConfigIngress {
  // Whether Ingress is disabled.
  disabled?: boolean;

  // Ingress VIP.
  ipv4Vip?: string;
}

export function edgecontainer_ClusterSystemAddonsConfigIngress_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'disabled',
      'Whether Ingress is disabled.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'ipv4Vip',
      'Ingress VIP.',
      () => [],
      false,
      false,
    ),
  ];
}
