import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface TemplateAssociationArgs {
  //
  skipDestroy?: boolean;
}
export class TemplateAssociation extends DS_Resource {
  //
  public skipDestroy?: boolean;

  // Association status. Creating this resource will result in an `ASSOCIATED` status, and quota increase requests in the template are automatically applied to new AWS accounts in the organization.
  public status?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "skipDestroy",
        "",
        () => [],
        false,
        false,
      ),
    ];
  }
}
