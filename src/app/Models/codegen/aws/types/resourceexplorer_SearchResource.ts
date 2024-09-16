import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  resourceexplorer_SearchResourceProperty,
  resourceexplorer_SearchResourceProperty_GetTypes,
} from './resourceexplorer_SearchResourceProperty';

export interface resourceexplorer_SearchResource {
  // Amazon resource name of resource.
  arn?: string;

  // The date and time that the information about this resource property was last updated.
  lastReportedAt?: string;

  // Amazon Web Services account that owns the resource.
  owningAccountId?: string;

  // Structure with additional type-specific details about the resource.  See `properties` below.
  properties?: Array<resourceexplorer_SearchResourceProperty>;

  // Amazon Web Services Region in which the resource was created and exists.
  region?: string;

  // Type of the resource.
  resourceType?: string;

  // Amazon Web Service that owns the resource and is responsible for creating and updating it.
  service?: string;
}

export function resourceexplorer_SearchResource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'arn',
      'Amazon resource name of resource.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'lastReportedAt',
      'The date and time that the information about this resource property was last updated.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'owningAccountId',
      'Amazon Web Services account that owns the resource.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'properties',
      'Structure with additional type-specific details about the resource.  See `properties` below.',
      () => resourceexplorer_SearchResourceProperty_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'region',
      'Amazon Web Services Region in which the resource was created and exists.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'resourceType',
      'Type of the resource.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'service',
      'Amazon Web Service that owns the resource and is responsible for creating and updating it.',
      () => [],
      true,
      false,
    ),
  ];
}
