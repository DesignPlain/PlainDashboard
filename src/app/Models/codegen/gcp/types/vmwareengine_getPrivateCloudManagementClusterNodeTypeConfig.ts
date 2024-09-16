import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface vmwareengine_getPrivateCloudManagementClusterNodeTypeConfig {
  // The number of nodes of this type in the cluster.
  nodeCount?: number;

  //
  nodeTypeId?: string;

  /*
Customized number of cores available to each node of the type.
This number must always be one of 'nodeType.availableCustomCoreCounts'.
If zero is provided max value from 'nodeType.availableCustomCoreCounts' will be used.
This cannot be changed once the PrivateCloud is created.
*/
  customCoreCount?: number;
}

export function vmwareengine_getPrivateCloudManagementClusterNodeTypeConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'nodeCount',
      'The number of nodes of this type in the cluster.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'nodeTypeId',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'customCoreCount',
      "Customized number of cores available to each node of the type.\nThis number must always be one of 'nodeType.availableCustomCoreCounts'.\nIf zero is provided max value from 'nodeType.availableCustomCoreCounts' will be used.\nThis cannot be changed once the PrivateCloud is created.",
      () => [],
      true,
      false,
    ),
  ];
}
