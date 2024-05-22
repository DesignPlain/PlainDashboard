import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DomainNameApiAssociationArgs {
  // API ID.
  apiId?: string;

  // Appsync domain name.
  domainName?: string;
}
export class DomainNameApiAssociation extends Resource {
  // Appsync domain name.
  public domainName?: string;

  // API ID.
  public apiId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "apiId", "API ID.", [], true, false),
      new DynamicUIProps(
        InputType.String,
        "domainName",
        "Appsync domain name.",
        [],
        true,
        true,
      ),
    ];
  }
}
