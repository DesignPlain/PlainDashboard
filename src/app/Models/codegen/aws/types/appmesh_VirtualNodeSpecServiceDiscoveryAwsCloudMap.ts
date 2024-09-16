import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appmesh_VirtualNodeSpecServiceDiscoveryAwsCloudMap {
  // String map that contains attributes with values that you can use to filter instances by any custom attribute that you specified when you registered the instance. Only instances that match all of the specified key/value pairs will be returned.
  attributes?: Map<string, string>;

  /*
Name of the AWS Cloud Map namespace to use.
Use the `aws.servicediscovery.HttpNamespace` resource to configure a Cloud Map namespace. Must be between 1 and 1024 characters in length.
*/
  namespaceName?: string;

  // Name of the AWS Cloud Map service to use. Use the `aws.servicediscovery.Service` resource to configure a Cloud Map service. Must be between 1 and 1024 characters in length.
  serviceName?: string;
}

export function appmesh_VirtualNodeSpecServiceDiscoveryAwsCloudMap_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      'attributes',
      'String map that contains attributes with values that you can use to filter instances by any custom attribute that you specified when you registered the instance. Only instances that match all of the specified key/value pairs will be returned.',
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'namespaceName',
      'Name of the AWS Cloud Map namespace to use.\nUse the `aws.servicediscovery.HttpNamespace` resource to configure a Cloud Map namespace. Must be between 1 and 1024 characters in length.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'serviceName',
      'Name of the AWS Cloud Map service to use. Use the `aws.servicediscovery.Service` resource to configure a Cloud Map service. Must be between 1 and 1024 characters in length.',
      () => [],
      true,
      false,
    ),
  ];
}
