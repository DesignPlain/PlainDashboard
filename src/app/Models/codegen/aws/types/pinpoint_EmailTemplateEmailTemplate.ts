import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  pinpoint_EmailTemplateEmailTemplateHeader,
  pinpoint_EmailTemplateEmailTemplateHeader_GetTypes,
} from './pinpoint_EmailTemplateEmailTemplateHeader';

export interface pinpoint_EmailTemplateEmailTemplate {
  // The message body, in HTML format, to use in email messages that are based on the message template. We recommend using HTML format for email clients that render HTML content. You can include links, formatted text, and more in an HTML message.
  htmlPart?: string;

  // The unique identifier for the recommender model to use for the message template. Amazon Pinpoint uses this value to determine how to retrieve and process data from a recommender model when it sends messages that use the template, if the template contains message variables for recommendation data.
  recommenderId?: string;

  // Subject line, or title, to use in email messages that are based on the message template.
  subject?: string;

  // Message body, in plain text format, to use in email messages that are based on the message template. We recommend using plain text format for email clients that don't render HTML content and clients that are connected to high-latency networks, such as mobile devices.
  textPart?: string;

  // JSON object that specifies the default values to use for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.
  defaultSubstitutions?: string;

  //
  description?: string;

  //
  headers?: Array<pinpoint_EmailTemplateEmailTemplateHeader>;
}

export function pinpoint_EmailTemplateEmailTemplate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'headers',
      '',
      () => pinpoint_EmailTemplateEmailTemplateHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'htmlPart',
      'The message body, in HTML format, to use in email messages that are based on the message template. We recommend using HTML format for email clients that render HTML content. You can include links, formatted text, and more in an HTML message.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'recommenderId',
      'The unique identifier for the recommender model to use for the message template. Amazon Pinpoint uses this value to determine how to retrieve and process data from a recommender model when it sends messages that use the template, if the template contains message variables for recommendation data.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'subject',
      'Subject line, or title, to use in email messages that are based on the message template.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'textPart',
      "Message body, in plain text format, to use in email messages that are based on the message template. We recommend using plain text format for email clients that don't render HTML content and clients that are connected to high-latency networks, such as mobile devices.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'defaultSubstitutions',
      "JSON object that specifies the default values to use for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'description',
      '',
      () => [],
      false,
      false,
    ),
  ];
}
