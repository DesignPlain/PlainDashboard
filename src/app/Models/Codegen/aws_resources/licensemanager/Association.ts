import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface AssociationArgs {
  // ARN of the license configuration.
  licenseConfigurationArn?: string;

  // ARN of the resource associated with the license configuration.
  resourceArn?: string;
}
export class Association extends Resource {
  // ARN of the license configuration.
  public licenseConfigurationArn?: string;

  // ARN of the resource associated with the license configuration.
  public resourceArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "licenseConfigurationArn",
        "ARN of the license configuration.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "resourceArn",
        "ARN of the resource associated with the license configuration.",
        [],
        true,
        true,
      ),
    ];
  }
}
