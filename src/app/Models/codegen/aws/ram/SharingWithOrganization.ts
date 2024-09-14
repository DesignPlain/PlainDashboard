import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface SharingWithOrganizationArgs {}
export class SharingWithOrganization extends DS_Resource {
  public static GetTypes(): DynamicUIProps[] {
    return [];
  }
}
