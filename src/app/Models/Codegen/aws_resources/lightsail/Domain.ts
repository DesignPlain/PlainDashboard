import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DomainArgs {
  // The name of the Lightsail domain to manage
  domainName?: string;
}
export class Domain extends Resource {
  // The ARN of the Lightsail domain
  public arn?: string;

  // The name of the Lightsail domain to manage
  public domainName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "domainName",
        "The name of the Lightsail domain to manage",
        [],
        true,
        true,
      ),
    ];
  }
}
