import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface kendra_DataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication {
  // The port number of the website host you want to connect to using authentication credentials. For example, the port for `https://a.example.com/page1.html` is `443`, the standard port for HTTPS.
  port?: number;

  // Your secret ARN, which you can create in AWS Secrets Manager. You use a secret if basic authentication credentials are required to connect to a website. The secret stores your credentials of user name and password.
  credentials?: string;

  // The name of the website host you want to connect to using authentication credentials. For example, the host name of `https://a.example.com/page1.html` is `"a.example.com"`.
  host?: string;
}

export function kendra_DataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "port",
      "The port number of the website host you want to connect to using authentication credentials. For example, the port for `https://a.example.com/page1.html` is `443`, the standard port for HTTPS.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "credentials",
      "Your secret ARN, which you can create in AWS Secrets Manager. You use a secret if basic authentication credentials are required to connect to a website. The secret stores your credentials of user name and password.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "host",
      'The name of the website host you want to connect to using authentication credentials. For example, the host name of `https://a.example.com/page1.html` is `"a.example.com"`.',
      [],
      true,
      false,
    ),
  ];
}
