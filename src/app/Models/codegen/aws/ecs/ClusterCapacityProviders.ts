import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ecs_ClusterCapacityProvidersDefaultCapacityProviderStrategy,
  ecs_ClusterCapacityProvidersDefaultCapacityProviderStrategy_GetTypes,
} from '../types/ecs_ClusterCapacityProvidersDefaultCapacityProviderStrategy';

export interface ClusterCapacityProvidersArgs {
  // Set of names of one or more capacity providers to associate with the cluster. Valid values also include `FARGATE` and `FARGATE_SPOT`.
  capacityProviders?: Array<string>;

  // Name of the ECS cluster to manage capacity providers for.
  clusterName?: string;

  // Set of capacity provider strategies to use by default for the cluster. Detailed below.
  defaultCapacityProviderStrategies?: Array<ecs_ClusterCapacityProvidersDefaultCapacityProviderStrategy>;
}
export class ClusterCapacityProviders extends DS_Resource {
  // Set of names of one or more capacity providers to associate with the cluster. Valid values also include `FARGATE` and `FARGATE_SPOT`.
  public capacityProviders?: Array<string>;

  // Name of the ECS cluster to manage capacity providers for.
  public clusterName?: string;

  // Set of capacity provider strategies to use by default for the cluster. Detailed below.
  public defaultCapacityProviderStrategies?: Array<ecs_ClusterCapacityProvidersDefaultCapacityProviderStrategy>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        'capacityProviders',
        'Set of names of one or more capacity providers to associate with the cluster. Valid values also include `FARGATE` and `FARGATE_SPOT`.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'clusterName',
        'Name of the ECS cluster to manage capacity providers for.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'defaultCapacityProviderStrategies',
        'Set of capacity provider strategies to use by default for the cluster. Detailed below.',
        () =>
          ecs_ClusterCapacityProvidersDefaultCapacityProviderStrategy_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
