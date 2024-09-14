import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface DomainNameApiAssociationArgs {
  // API ID.
  apiId?: string;

  // Appsync domain name.
  domainName?: string;
}
export class DomainNameApiAssociation extends DS_Resource {
  // Appsync domain name.
  public domainName?: string;

  // API ID.
  public apiId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "domainName",
        "Appsync domain name.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "apiId",
        "API ID.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
