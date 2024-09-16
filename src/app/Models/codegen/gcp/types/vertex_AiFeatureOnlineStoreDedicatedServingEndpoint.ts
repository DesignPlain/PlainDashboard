import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  vertex_AiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig,
  vertex_AiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig_GetTypes,
} from './vertex_AiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig';

export interface vertex_AiFeatureOnlineStoreDedicatedServingEndpoint {
  /*
Private service connect config.
Structure is documented below.
*/
  privateServiceConnectConfig?: vertex_AiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig;

  /*
(Output)
Domain name to use for this FeatureOnlineStore
*/
  publicEndpointDomainName?: string;

  /*
(Output)
Name of the service attachment resource. Applicable only if private service connect is enabled and after FeatureViewSync is created.
*/
  serviceAttachment?: string;
}

export function vertex_AiFeatureOnlineStoreDedicatedServingEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'privateServiceConnectConfig',
      'Private service connect config.\nStructure is documented below.',
      () =>
        vertex_AiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'publicEndpointDomainName',
      '(Output)\nDomain name to use for this FeatureOnlineStore',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'serviceAttachment',
      '(Output)\nName of the service attachment resource. Applicable only if private service connect is enabled and after FeatureViewSync is created.',
      () => [],
      false,
      false,
    ),
  ];
}
