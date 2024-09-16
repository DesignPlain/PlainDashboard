import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface emrserverless_ApplicationInteractiveConfiguration {
  // Enables an Apache Livy endpoint that you can connect to and run interactive jobs.
  livyEndpointEnabled?: boolean;

  // Enables you to connect an application to Amazon EMR Studio to run interactive workloads in a notebook.
  studioEnabled?: boolean;
}

export function emrserverless_ApplicationInteractiveConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'livyEndpointEnabled',
      'Enables an Apache Livy endpoint that you can connect to and run interactive jobs.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'studioEnabled',
      'Enables you to connect an application to Amazon EMR Studio to run interactive workloads in a notebook.',
      () => [],
      false,
      false,
    ),
  ];
}
