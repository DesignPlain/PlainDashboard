import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface alloydb_ClusterMigrationSource {
  // The host and port of the on-premises instance in host:port format
  hostPort?: string;

  // Place holder for the external source identifier(e.g DMS job name) that created the cluster.
  referenceId?: string;

  // Type of migration source.
  sourceType?: string;
}

export function alloydb_ClusterMigrationSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'hostPort',
      'The host and port of the on-premises instance in host:port format',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'referenceId',
      'Place holder for the external source identifier(e.g DMS job name) that created the cluster.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'sourceType',
      'Type of migration source.',
      () => [],
      false,
      false,
    ),
  ];
}
