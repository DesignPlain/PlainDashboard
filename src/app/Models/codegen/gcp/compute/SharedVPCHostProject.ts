import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface SharedVPCHostProjectArgs {
  // The ID of the project that will serve as a Shared VPC host project
  project?: string;
}
export class SharedVPCHostProject extends DS_Resource {
  // The ID of the project that will serve as a Shared VPC host project
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project that will serve as a Shared VPC host project',
        () => [],
        true,
        true,
      ),
    ];
  }
}
