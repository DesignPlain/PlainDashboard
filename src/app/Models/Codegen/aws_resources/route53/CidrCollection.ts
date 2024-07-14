import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface CidrCollectionArgs {
  // Unique name for the CIDR collection.
  name?: string;
}
export class CidrCollection extends Resource {
  // The Amazon Resource Name (ARN) of the CIDR collection.
  public arn?: string;

  // Unique name for the CIDR collection.
  public name?: string;

  // The lastest version of the CIDR collection.
  public version?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Unique name for the CIDR collection.",
        [],
        false,
        false,
      ),
    ];
  }
}
