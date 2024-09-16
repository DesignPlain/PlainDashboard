import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface globalaccelerator_CrossAccountAttachmentResource {
  // The AWS Region where a shared endpoint resource is located.
  region?: string;

  // IP address range, in CIDR format, that is specified as resource.
  cidrBlock?: string;

  // The endpoint ID for the endpoint that is specified as a AWS resource.
  endpointId?: string;
}

export function globalaccelerator_CrossAccountAttachmentResource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'cidrBlock',
      'IP address range, in CIDR format, that is specified as resource.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'endpointId',
      'The endpoint ID for the endpoint that is specified as a AWS resource.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'region',
      'The AWS Region where a shared endpoint resource is located.',
      () => [],
      false,
      false,
    ),
  ];
}
