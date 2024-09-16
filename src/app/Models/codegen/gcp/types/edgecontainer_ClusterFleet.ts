import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface edgecontainer_ClusterFleet {
  /*
(Output)
The name of the managed Hub Membership resource associated to this cluster.
Membership names are formatted as
`projects/<project-number>/locations/global/membership/<cluster-id>`.
*/
  membership?: string;

  /*
The name of the Fleet host project where this cluster will be registered.
Project names are formatted as
`projects/<project-number>`.
*/
  project?: string;
}

export function edgecontainer_ClusterFleet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'membership',
      '(Output)\nThe name of the managed Hub Membership resource associated to this cluster.\nMembership names are formatted as\n`projects/<project-number>/locations/global/membership/<cluster-id>`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'project',
      'The name of the Fleet host project where this cluster will be registered.\nProject names are formatted as\n`projects/<project-number>`.',
      () => [],
      true,
      true,
    ),
  ];
}
