import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface vertex_AiIndexEndpointPrivateServiceConnectConfig {
  // If set to true, the IndexEndpoint is created without private service access.
  enablePrivateServiceConnect?: boolean;

  // A list of Projects from which the forwarding rule will target the service attachment.
  projectAllowlists?: Array<string>;
}

export function vertex_AiIndexEndpointPrivateServiceConnectConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enablePrivateServiceConnect',
      'If set to true, the IndexEndpoint is created without private service access.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'projectAllowlists',
      'A list of Projects from which the forwarding rule will target the service attachment.',
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
