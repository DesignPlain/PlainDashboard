import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  batch_getJobDefinitionEksPropertyPodProperty,
  batch_getJobDefinitionEksPropertyPodProperty_GetTypes,
} from './batch_getJobDefinitionEksPropertyPodProperty';

export interface batch_getJobDefinitionEksProperty {
  // The properties for the Kubernetes pod resources of a job.
  podProperties?: Array<batch_getJobDefinitionEksPropertyPodProperty>;
}

export function batch_getJobDefinitionEksProperty_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'podProperties',
      'The properties for the Kubernetes pod resources of a job.',
      () => batch_getJobDefinitionEksPropertyPodProperty_GetTypes(),
      true,
      false,
    ),
  ];
}
