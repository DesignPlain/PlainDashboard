import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface SharedVPCServiceProjectArgs {
  // The deletion policy for the shared VPC service. Setting ABANDON allows the resource to be abandoned rather than deleted. Possible values are: "ABANDON".
  deletionPolicy?: string;

  // The ID of a host project to associate.
  hostProject?: string;

  // The ID of the project that will serve as a Shared VPC service project.
  serviceProject?: string;
}
export class SharedVPCServiceProject extends DS_Resource {
  // The deletion policy for the shared VPC service. Setting ABANDON allows the resource to be abandoned rather than deleted. Possible values are: "ABANDON".
  public deletionPolicy?: string;

  // The ID of a host project to associate.
  public hostProject?: string;

  // The ID of the project that will serve as a Shared VPC service project.
  public serviceProject?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'deletionPolicy',
        'The deletion policy for the shared VPC service. Setting ABANDON allows the resource to be abandoned rather than deleted. Possible values are: "ABANDON".',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'hostProject',
        'The ID of a host project to associate.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'serviceProject',
        'The ID of the project that will serve as a Shared VPC service project.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
