import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface DomainIdentityVerificationArgs {
  // The domain name of the SES domain identity to verify.
  domain?: string;
}
export class DomainIdentityVerification extends Resource {
  // The ARN of the domain identity.
  public arn?: string;

  // The domain name of the SES domain identity to verify.
  public domain?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "domain",
        "The domain name of the SES domain identity to verify.",
        [],
        true,
        true,
      ),
    ];
  }
}
