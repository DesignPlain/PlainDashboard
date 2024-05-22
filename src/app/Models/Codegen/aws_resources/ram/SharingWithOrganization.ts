import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface SharingWithOrganizationArgs {}
export class SharingWithOrganization extends Resource {
  public static GetTypes(): DynamicUIProps[] {
    return [];
  }
}
