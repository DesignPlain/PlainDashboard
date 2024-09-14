import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface kendra_DataSourceConfigurationWebCrawlerConfigurationProxyConfiguration {
  // The port number of the website host you want to connect to via a web proxy server. For example, the port for `https://a.example.com/page1.html` is `443`, the standard port for HTTPS.
  port?: number;

  // Your secret ARN, which you can create in AWS Secrets Manager. The credentials are optional. You use a secret if web proxy credentials are required to connect to a website host. Amazon Kendra currently support basic authentication to connect to a web proxy server. The secret stores your credentials.
  credentials?: string;

  // The name of the website host you want to connect to via a web proxy server. For example, the host name of `https://a.example.com/page1.html` is `"a.example.com"`.
  host?: string;
}

export function kendra_DataSourceConfigurationWebCrawlerConfigurationProxyConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "port",
      "The port number of the website host you want to connect to via a web proxy server. For example, the port for `https://a.example.com/page1.html` is `443`, the standard port for HTTPS.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "credentials",
      "Your secret ARN, which you can create in AWS Secrets Manager. The credentials are optional. You use a secret if web proxy credentials are required to connect to a website host. Amazon Kendra currently support basic authentication to connect to a web proxy server. The secret stores your credentials.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "host",
      'The name of the website host you want to connect to via a web proxy server. For example, the host name of `https://a.example.com/page1.html` is `"a.example.com"`.',
      () => [],
      true,
      false,
    ),
  ];
}
