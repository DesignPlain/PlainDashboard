import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface CidrCollectionArgs {
  // Unique name for the CIDR collection.
  name?: string;
}
export class CidrCollection extends DS_Resource {
  // The lastest version of the CIDR collection.
  public version?: number;

  // The Amazon Resource Name (ARN) of the CIDR collection.
  public arn?: string;

  // Unique name for the CIDR collection.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'Unique name for the CIDR collection.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
