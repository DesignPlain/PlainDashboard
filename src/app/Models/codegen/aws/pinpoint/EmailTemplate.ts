import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  pinpoint_EmailTemplateEmailTemplate,
  pinpoint_EmailTemplateEmailTemplate_GetTypes,
} from '../types/pinpoint_EmailTemplateEmailTemplate';

export interface EmailTemplateArgs {
  //
  tags?: Map<string, string>;

  // name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
  templateName?: string;

  // Specifies the content and settings for a message template that can be used in messages that are sent through the email channel. See Email Template
  emailTemplates?: Array<pinpoint_EmailTemplateEmailTemplate>;
}
export class EmailTemplate extends DS_Resource {
  // Amazon Resource Name (ARN) of the message template.
  public arn?: string;

  // Specifies the content and settings for a message template that can be used in messages that are sent through the email channel. See Email Template
  public emailTemplates?: Array<pinpoint_EmailTemplateEmailTemplate>;

  //
  public tags?: Map<string, string>;

  //
  public tagsAll?: Map<string, string>;

  // name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
  public templateName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        'tags',
        '',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'templateName',
        'name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'emailTemplates',
        'Specifies the content and settings for a message template that can be used in messages that are sent through the email channel. See Email Template',
        () => pinpoint_EmailTemplateEmailTemplate_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
