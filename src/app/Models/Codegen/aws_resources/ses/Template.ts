import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface TemplateArgs {
  // The HTML body of the email. Must be less than 500KB in size, including both the text and HTML parts.
  html?: string;

  // The name of the template. Cannot exceed 64 characters. You will refer to this name when you send email.
  name?: string;

  // The subject line of the email.
  subject?: string;

  // The email body that will be visible to recipients whose email clients do not display HTML. Must be less than 500KB in size, including both the text and HTML parts.
  text?: string;
}
export class Template extends Resource {
  // The ARN of the SES template
  public arn?: string;

  // The HTML body of the email. Must be less than 500KB in size, including both the text and HTML parts.
  public html?: string;

  // The name of the template. Cannot exceed 64 characters. You will refer to this name when you send email.
  public name?: string;

  // The subject line of the email.
  public subject?: string;

  // The email body that will be visible to recipients whose email clients do not display HTML. Must be less than 500KB in size, including both the text and HTML parts.
  public text?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the template. Cannot exceed 64 characters. You will refer to this name when you send email.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "subject",
        "The subject line of the email.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "text",
        "The email body that will be visible to recipients whose email clients do not display HTML. Must be less than 500KB in size, including both the text and HTML parts.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "html",
        "The HTML body of the email. Must be less than 500KB in size, including both the text and HTML parts.",
        [],
        false,
        false,
      ),
    ];
  }
}
